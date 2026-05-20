"use client";

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapContainer, TileLayer, Marker, Popup, useMap, Rectangle, FeatureGroup } from 'react-leaflet';
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
  const markerRefs = useRef({});
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [focusLocation, setFocusLocation] = useState(null);

  const searchParams = useSearchParams();
  const urlProjectId = searchParams?.get('id');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && urlProjectId) {
      const project = projectsData.find(p => String(p.id) === String(urlProjectId));
      if (project && project.lat && project.lng) {
        // Scroll the map into view
        if (mapContainerRef.current) {
          mapContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Set focus location to trigger flyTo
        setFocusLocation([project.lat, project.lng]);
        
        // Wait for flyTo animation and marker rendering, then open the popup
        setTimeout(() => {
          const marker = markerRefs.current[project.id];
          if (marker && marker.openPopup) {
            marker.openPopup();
          }
        }, 800);
      }
    }
  }, [mounted, urlProjectId]);

  // Filter out projects with no coordinates for search
  const searchableProjects = projectsData.filter(p => p.lat && p.lng);
  const filteredResults = searchQuery.trim() === "" ? [] : searchableProjects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleProjectSelect = (project) => {
    setFocusLocation([project.lat, project.lng]);
    setSearchQuery("");
    setShowSearchResults(false);
    
    // Auto-open the popup for the selected project
    setTimeout(() => {
      const marker = markerRefs.current[project.id];
      if (marker && marker.openPopup) {
        marker.openPopup();
      }
    }, 500);
  };

  // Map Component to handle dynamic flying
  function FlyToLocation({ position }) {
    const map = useMap();
    useEffect(() => {
      if (position) {
        // Un-disable scroll wheel briefly while flying or just let flyTo work
        map.flyTo(position, 16, { duration: 2, easeLinearity: 0.25 });

        // Clear focus location after flying so clicking search doesn't trigger it again
        const timer = setTimeout(() => {
          setFocusLocation(null);
        }, 2100);

        return () => clearTimeout(timer);
      }
    }, [position, map]);
    return null;
  }
  // Multan Center
  const centerLat = 30.1968;
  const centerLng = 71.4697;

  if (!mounted) {
    return <div className="w-full h-full bg-[#0a0a0a] animate-pulse border border-white/5 flex items-center justify-center"><span className="text-white/20 font-sans tracking-widest text-xs uppercase">Initializing Spatial Data...</span></div>;
  }

  return (
    <div className="w-full h-[600px] md:h-full relative font-sans" ref={mapContainerRef}>
      {/* Architectural Search Overlay */}
      <div className="absolute top-4 right-4 z-[100] w-[280px] md:w-[350px]">
        <div className="bg-[#050505]/90 backdrop-blur-md border border-white/10 p-1 flex">
          <input
            type="text"
            placeholder="Search projects or locations..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(true);
            }}
            onFocus={() => setShowSearchResults(true)}
            className="w-full bg-transparent border-none outline-none text-white text-xs font-mono tracking-wider p-3 placeholder:text-white/30"
          />
          <div className="w-[40px] flex items-center justify-center text-accent pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>

        {/* Search Results Dropdown */}
        {showSearchResults && filteredResults.length > 0 && (
          <div className="mt-2 bg-[#050505]/95 backdrop-blur-xl border border-white/10 flex flex-col shadow-2xl">
            {filteredResults.map(p => (
              <div
                key={`search-${p.id}`}
                className="p-3 border-b border-white/5 hover:bg-white/5 cursor-pointer flex flex-col gap-1 transition-colors group"
                onClick={() => handleProjectSelect(p)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white text-xs tracking-widest uppercase font-bold group-hover:text-accent transition-colors">{p.title}</span>
                  <span className="text-white/20 text-[10px] font-mono">{p.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent/50 rounded-full"></div>
                  <span className="text-white/40 text-[10px] tracking-widest uppercase">{p.location}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <MapContainer
        center={[centerLat, centerLng]}
        zoom={12}
        scrollWheelZoom={true} // Allow native scrolling to zoom
        className="w-full h-full z-0 font-sans"
        style={{ background: '#050505' }}
      >
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

          // Architectural Boundary Rectangle
          const boundsOffset = 0.0006; // Approx 60 meters
          const bounds = [
            [posLat - boundsOffset, posLng - boundsOffset],
            [posLat + boundsOffset, posLng + boundsOffset]
          ];

          return (
            <FeatureGroup key={`group-${project.id}`}>

              <Marker
                position={[posLat, posLng]}
                icon={customIcon}
                ref={(r) => { markerRefs.current[project.id] = r; }}
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
            </FeatureGroup>
          );
        })}
        <FlyToLocation position={focusLocation} />
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
