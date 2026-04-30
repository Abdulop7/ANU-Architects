"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';

export function FacebookSection() {
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

  const displayPosts = metaData?.posts
    ? [...metaData.posts]
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .slice(0, 4) // Limit to 4 for a perfect 2x2 grid beside the CTA
    : [];

  return (
    <section className="bg-background py-[10rem] border-t border-border relative overflow-hidden">
      {/* Huge Architectural Typography Background */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 text-[40vw] font-black text-[#1877F2]/5 leading-none select-none pointer-events-none z-0">
        FB
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-20 items-center">
          
          {/* Conversion Focus: Left CTA Area */}
          <FadeIn>
            <div className="flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(24,119,242,0.3)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <span className="text-[#1877F2] font-bold tracking-[0.2em] uppercase">Join Our Community</span>
              </div>
              
              <h2 className="font-sans font-black text-5xl md:text-6xl lg:text-[4rem] tracking-tighter text-primary leading-[1.1] mb-12">
                Daily Design <br/> <span className="text-secondary">Inspiration.</span>
              </h2>
              
              {/* Glorified Follower Count */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
                <div className="flex flex-col">
                  <span className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-[#1877F2] mb-2 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse"></span>
                    Active Community
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-black text-[5rem] lg:text-[6rem] tracking-tighter leading-none bg-gradient-to-br from-white via-white to-[#1877F2]/40 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(24,119,242,0.15)]">
                      {loading ? "..." : formatNumber(metaData?.page?.followers)}
                    </span>
                    <span className="text-[#1877F2] font-black text-4xl lg:text-5xl">+</span>
                  </div>
                </div>
                
                {/* Simulated follower avatars for social proof, made larger */}
                <div className="hidden md:flex -space-x-5 ml-4">
                  <div className="w-16 h-16 rounded-full border-4 border-background bg-[#111] shadow-2xl overflow-hidden relative"><Image src="/projects/Jamia_Khair_Ul_Madaris/1.webp" alt="follower" fill className="object-cover opacity-50" /></div>
                  <div className="w-16 h-16 rounded-full border-4 border-background bg-[#111] shadow-2xl overflow-hidden relative"><Image src="/projects/Clifton_Studio/13.webp" alt="follower" fill className="object-cover opacity-50" /></div>
                  <div className="w-16 h-16 rounded-full border-4 border-background bg-[#111] shadow-2xl overflow-hidden relative"><Image src="/projects/Fezan_E_Madina_Markaz/1.webp" alt="follower" fill className="object-cover opacity-50" /></div>
                </div>
              </div>

              {/* Glorified Button */}
              <Link 
                href="https://www.facebook.com/profile.php?id=102369609131014" 
                target="_blank"
                className="group relative inline-flex items-center justify-between w-full sm:max-w-md bg-[#1877F2] rounded-full p-2 pr-8 transition-all duration-500 hover:shadow-[0_0_60px_rgba(24,119,242,0.6)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                <div className="relative z-10 w-16 h-16 bg-white text-[#1877F2] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <span className="relative z-10 font-sans font-black text-[1.1rem] uppercase tracking-[0.15em] text-white ml-6">Join The Page</span>
                <div className="relative z-10 flex-1 flex justify-end">
                  <svg className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </FadeIn>

          {/* Right Area: The 4:5 Grid */}
          {loading ? (
            <div className="grid grid-cols-2 gap-4 animate-pulse">
              <div className="aspect-[4/5] bg-[#111]"></div>
              <div className="aspect-[4/5] bg-[#111] translate-y-8"></div>
              <div className="aspect-[4/5] bg-[#111]"></div>
              <div className="aspect-[4/5] bg-[#111] translate-y-8"></div>
            </div>
          ) : displayPosts.length > 0 ? (
            <StaggerContainer className="grid grid-cols-2 gap-4 lg:gap-6 items-center">
              {displayPosts.map((post, index) => {
                // Offset the right column to create an architectural cascading effect
                const isEven = index % 2 !== 0;
                
                return (
                  <StaggerItem 
                    key={post.id} 
                    className={`relative group cursor-pointer overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-[#1877F2]/30 transition-colors duration-500 aspect-[4/5] ${isEven ? 'lg:translate-y-12' : ''}`}
                  >
                    <Link href={post.permalink} target="_blank" className="block w-full h-full relative">
                      {post.image ? (
                        <Image 
                          src={post.image} 
                          alt="Facebook Post" 
                          fill 
                          unoptimized
                          className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-8 bg-[#111]">
                          <p className="text-secondary font-sans text-sm line-clamp-6">{post.caption}</p>
                        </div>
                      )}
                      
                      {/* Gradient Overlay for Text Readability & CTA */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          
                          {/* Facebook Icon acting as CTA */}
                          <div className="mb-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#1877F2] transition-colors duration-300 border border-white/20 group-hover:border-[#1877F2]">
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                          </div>

                          {post.caption && (
                            <p className="text-white font-sans font-medium text-sm line-clamp-3 leading-relaxed mb-4">
                              {post.caption.split('\n')[0]}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between text-white/80 font-mono text-xs">
                            <span className="flex items-center gap-2">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                              {formatNumber(post.likes)}
                            </span>
                            <span className="text-[#1877F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans font-bold tracking-widest uppercase">
                              View Post
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <div className="w-full text-center py-24 border border-white/10 text-secondary font-mono tracking-widest text-sm uppercase">
              No architectural updates available at the moment.
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
