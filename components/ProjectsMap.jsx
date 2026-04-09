"use client";

import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';
import projectsData from '../projects.json';
import { ProjectModal } from './projectModal';

// Use a simple dot icon for marker since default Leaflet markers require image assets
const customIcon = new L.DivIcon({
  className: 'custom-map-marker',
  html: `<div class="w-3 h-3 bg-accent border-[2px] border-[#050505] rounded-full shadow-[0_0_15px_rgba(255,122,0,1)] relative after:content-[''] after:absolute after:inset-[-8px] after:border after:border-accent/40 after:rounded-full after:animate-ping"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  popupAnchor: [0, -10]
});

// No deterministic coordinate fallbacks used
// Projects exclusively rendered if lat and lng exist in projects.json

export default function ProjectsMap() {
  const mapContainerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCtrlOverlay, setShowCtrlOverlay] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map Interaction Handler to access the native Leaflet map instance
  function MapInteractionHandler() {
    const map = useMap();
    useEffect(() => {
      map.scrollWheelZoom.disable(); // start disabled

      const container = map.getContainer();

      let overlayTimeout;
      const handleWheel = (e) => {
        if (e.ctrlKey) {
          e.preventDefault(); // Stop entire browser zoom
          if (!map.scrollWheelZoom.enabled()) {
            map.scrollWheelZoom.enable();
          }
          setShowCtrlOverlay(false);
        } else {
          if (map.scrollWheelZoom.enabled()) {
            map.scrollWheelZoom.disable();
          }
          setShowCtrlOverlay(true);
          clearTimeout(overlayTimeout);
          overlayTimeout = setTimeout(() => setShowCtrlOverlay(false), 2000);
        }
      };

      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }, [map]);
    return null;
  }

  // Multan Center
  const centerLat = 30.1968;
  const centerLng = 71.4697;

  if (!mounted) {
    return <div className="w-full h-full bg-[#0a0a0a] animate-pulse border border-white/5 flex items-center justify-center"><span className="text-white/20 font-sans tracking-widest text-xs uppercase">Initializing Spatial Data...</span></div>;
  }

  return (
    <div className="w-full h-full relative" ref={mapContainerRef}>
      {/* Ctrl + Scroll Warning Overlay */}
      <div className={`absolute inset-0 z-[1000] flex items-center justify-center bg-black/60 pointer-events-none transition-opacity duration-300 ${showCtrlOverlay ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white font-sans text-xl md:text-2xl tracking-[0.2em] font-bold uppercase drop-shadow-lg">Use Ctrl + Scroll to zoom</span>
      </div>

      <MapContainer
        center={[centerLat, centerLng]}
        zoom={12}
        scrollWheelZoom={false} // Will be managed natively by MapInteractionHandler
        className="w-full h-full z-0 font-sans"
        style={{ background: '#050505' }}
      >
        <MapInteractionHandler />
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-E'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {projectsData.map((project, idx) => {
          // Only render projects that have explicitly configured lat and lng markers
          let posLat = project.lat;
          let posLng = project.lng;

          if (!posLat || !posLng) {
            return null;
          }

          return (
            <Marker
              key={project.id}
              position={[posLat, posLng]}
              icon={customIcon}
            >
              <Popup className="arch-popup">
                <div
                  className="flex flex-col gap-0 p-0 w-[260px] md:w-[320px] cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative w-full aspect-video bg-[#111] overflow-hidden">
                    <Image
                      src={project.preview}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-[#050505] p-5 flex flex-col gap-3 relative">
                    <div className="flex justify-between items-start">
                      <h4 className="font-sans font-bold text-white uppercase tracking-widest text-[12px] leading-tight group-hover:text-accent transition-colors">{project.title}</h4>
                      <span className="text-white/20 text-[10px] font-mono">{project.year}</span>
                    </div>
                    {project.description && (
                      <p className="font-sans text-[11px] text-white/50 leading-relaxed font-light line-clamp-3">
                        {project.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-[4px] h-[4px] bg-accent rounded-full"></div>
                        <p className="font-sans text-[9px] text-accent/80 leading-none uppercase tracking-[0.15em]">{project.location}</p>
                      </div>
                      <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-white group-hover:text-accent transition-colors flex items-center gap-1">
                        Explore <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </span>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 opacity-50 group-hover:border-accent transition-colors"></div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Render the Project Modal if a project is selected */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
