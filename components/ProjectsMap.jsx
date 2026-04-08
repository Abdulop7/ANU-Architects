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

// Seeded random for deterministic coords
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

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
          attribution='&copy; <a href="https://carto.com/attributions" class="text-accent hover:text-white">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {projectsData.map((project, idx) => {
          // Deterministic pseudo coordinates
          const rand = mulberry32(project.id * 100);
          const latOffset = (rand() - 0.5) * 0.12; 
          const lngOffset = (rand() - 0.5) * 0.12;
          
          return (
            <Marker 
              key={project.id} 
              position={[centerLat + latOffset, centerLng + lngOffset]}
              icon={customIcon}
            >
              <Popup className="arch-popup">
                <div 
                   className="flex flex-col gap-3 p-1 min-w-[220px] cursor-pointer group"
                   onClick={() => setSelectedProject(project)}
                >
                  <div className="relative w-full aspect-video bg-[#111] overflow-hidden">
                    <Image 
                      src={project.preview} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-accent/0 pointer-events-none border border-white/10 group-hover:bg-accent/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
                        <span className="text-white font-bold tracking-widest uppercase text-xs border border-white/30 px-3 py-1 rounded-full">View Project</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white uppercase tracking-[0.1em] text-xs m-0 leading-tight group-hover:text-accent transition-colors">{project.title}</h4>
                    <p className="font-sans text-[0.65rem] text-white/50 m-0 leading-tight mt-1 uppercase tracking-widest">{project.location}</p>
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
