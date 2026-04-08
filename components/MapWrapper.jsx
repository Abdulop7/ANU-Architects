"use client";

import dynamic from 'next/dynamic';

// Dynamically import the map to avoid SSR issues with window/document inside Leaflet
const ProjectsMap = dynamic(() => import('./ProjectsMap'), {
  ssr: false,
});

export default function MapWrapper() {
  return <ProjectsMap />;
}
