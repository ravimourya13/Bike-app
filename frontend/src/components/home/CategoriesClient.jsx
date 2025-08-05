"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CategoriesClient() {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".category-card", {
      scrollTrigger: {
        trigger: ".category-grid",
        start: "top 80%",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".brand-card", {
      scrollTrigger: {
        trigger: ".brand-grid",
        start: "top 80%",
      },
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });

    hasAnimated.current = true;
  }, []);

  return null;
}
