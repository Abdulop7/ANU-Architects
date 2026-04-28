"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';

export function SocialSection() {
  const [metaData, setMetaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/meta')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMetaData(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num;
  };

  const displayPosts = metaData?.posts?.slice(0, 6) || [];

  return (
    <section className="bg-background py-[8rem] border-t border-border overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border pb-8 gap-8">
            <div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Social Presence</span>
              <h2 className="font-sans font-black text-5xl tracking-tight">Stay Connected</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Instagram Handle */}
              <Link href="#" className="group flex items-center gap-4 text-primary hover:text-accent transition-colors">
                <div className="w-12 h-12 border border-white/20 group-hover:border-accent rounded-full flex items-center justify-center transition-colors bg-[#0a0a0a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm tracking-widest uppercase">Instagram</span>
                  <span className="font-mono text-xs text-secondary group-hover:text-primary transition-colors">
                    {loading ? "Loading..." : `@${metaData?.page?.name?.replace(/\s+/g, '_').toLowerCase() || 'your_architects'}`}
                  </span>
                </div>
              </Link>
              
              {/* Facebook Handle */}
              <Link href="https://www.facebook.com/profile.php?id=102369609131014" target="_blank" className="group flex items-center gap-4 text-primary hover:text-[#1877F2] transition-colors">
                <div className="w-12 h-12 border border-white/20 group-hover:border-[#1877F2] rounded-full flex items-center justify-center transition-colors bg-[#0a0a0a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm tracking-widest uppercase">Facebook</span>
                  <span className="font-mono text-xs text-secondary group-hover:text-primary transition-colors flex gap-2">
                    {loading ? "Loading..." : (
                      <>
                        <span>{formatNumber(metaData?.page?.followers)} Followers</span>
                      </>
                    )}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </FadeIn>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-[#111] w-full" />
            ))}
          </div>
        ) : displayPosts.length > 0 ? (
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {displayPosts.map((post) => (
              <Link key={post.id} href={post.permalink} target="_blank" className="relative aspect-square group cursor-pointer overflow-hidden bg-[#111] block">
                {post.image ? (
                  <Image 
                    src={post.image} 
                    alt="Social Post" 
                    fill 
                    unoptimized
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw" 
                    className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a] p-4 text-center">
                    <p className="text-white/60 text-[10px] font-sans line-clamp-4">{post.caption}</p>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-[2px] p-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  
                  <div className="flex items-center gap-4 text-white font-mono text-xs">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      {formatNumber(post.likes)}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      {formatNumber(post.comments)}
                    </span>
                  </div>
                  
                  <p className="text-white/80 text-[10px] font-sans line-clamp-3 text-center w-full mt-2">
                    {post.caption}
                  </p>
                </div>
              </Link>
            ))}
          </StaggerContainer>
        ) : (
          <div className="w-full text-center py-12 text-secondary/50 font-sans tracking-widest text-sm uppercase">
            No posts available at the moment.
          </div>
        )}
      </div>
    </section>
  );
}
