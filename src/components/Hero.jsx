/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    }
    setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 2,
      delay: 2,
    });

    gsap.to(".cta-item", {
      y: -50,
      opacity: 1,
      duration: 1,
      delay: 2,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex  flex-col items-center "
      >
        <a href="#highlights" className="btn cta-item translate-y-20 opacity-0">
          Buy
        </a>

        <p className="cta-item translate-y-20 text-xl font-normal opacity-0">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
