"use client";

import { useEffect, useRef } from "react";

export default function FullCircleCursor({
  size = 30,
  color = "255,115,22", // ANU Architects orange
  hoverScale = 1.8,
  clickScale = 2.5,    // scale when clicking
  trailing = 0.15,
  clickables = [
    "a",
    "button",
    ".cursor-hover",
    "input",
    "textarea",
    "select",
    "label",
  ],
}) {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const isHovering = useRef(false);
  const isClicking = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initial styles
    cursor.style.position = "fixed";
    cursor.style.zIndex = "9999";
    cursor.style.pointerEvents = "none";
    cursor.style.left = "0";
    cursor.style.top = "0";
    cursor.style.width = `${size}px`;
    cursor.style.height = `${size}px`;
    cursor.style.borderRadius = "50%";
    cursor.style.background = `rgb(${color})`;
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.transition = "transform 0.25s cubic-bezier(.2,.9,.2,1)";
    cursor.style.opacity = "0";
    cursor.style.mixBlendMode = "difference";
    cursor.style.willChange = "transform, opacity";

    // Render loop for smooth trailing
    const render = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * trailing;
      pos.current.y += (mouse.current.y - pos.current.y) * trailing;

      let scale = 1;
      if (isHovering.current) scale = hoverScale;
      if (isClicking.current) scale = clickScale;

      cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${scale})`;

      raf.current = requestAnimationFrame(render);
    };

    raf.current = requestAnimationFrame(render);

    // Mouse move / leave handlers
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      cursor.style.opacity = "1";
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
    };

    // Hover handlers
    const handlePointerOver = (e) => {
      if (e.target.closest(clickables.join(","))) isHovering.current = true;
    };
    const handlePointerOut = (e) => {
      if (e.target.closest(clickables.join(","))) isHovering.current = false;
    };

    // Click handlers
    const handleMouseDown = () => {
      isClicking.current = true;
    };
    const handleMouseUp = () => {
      isClicking.current = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onMove);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [color, size, hoverScale, clickScale, trailing, clickables]);

  return <div ref={cursorRef} />;
}
