"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const greetings = [
  "Halo",
  "你好",
  "Здравствуйте ",
  "こんにちは",
  "Ciao",
  "안녕하세요",
  "السلام عليكم",
  "Hello",
];

export default function SplashScreen({ onComplete }) {
  const container = useRef(null);
  const greetRef = useRef(null);
  const nameRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      greetings.forEach((text, index) => {
        const isLast = index === greetings.length - 1;

        tl.call(() => {
          greetRef.current.textContent = text;
        }).fromTo(
          greetRef.current,
          {
            opacity: 0,
            y: 24,
            filter: "blur(4px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.2,
            ease: "power3.out",
          },
        );

        if (!isLast) {
          tl.to(
            greetRef.current,
            {
              opacity: 0,
              y: -16,
              filter: "blur(4px)",
              duration: 0.15,
              ease: "power2.in",
            },
            "+=0.07",
          );
        }
      });

      tl.to(
        greetRef.current,
        {
          opacity: 0,
          y: -8,
          filter: "blur(4px)",
          duration: 0.4,
          ease: "power2.out",
        },
        "+=0.8",
      )

        .fromTo(
          nameRef.current,
          {
            opacity: 0,
            y: 32,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "expo.out",
          },
          "-=0.15",
        )

        .fromTo(
          lineRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "expo.out",
            transformOrigin: "left",
          },
          "-=0.4",
        )

        .to(
          container.current,
          {
            yPercent: -100,
            duration: 0.9,
            ease: "expo.inOut",
          },
          "+=1",
        )

        .then(() => onComplete());
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <span
        ref={greetRef}
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          fontWeight: 200,
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          minHeight: "1.2em",
          display: "block",
        }}
      />

      <div
        style={{
          position: "absolute",
          padding: "0 2rem",
          display: "inline-block",
        }}
      >
        <p
          ref={nameRef}
          style={{
            fontSize: "clamp(2rem, 8vw, 4rem)",
            fontWeight: 200,
            color: "#fff",
            letterSpacing: "-0.03em",
            opacity: 0,
            marginBottom: "1rem",
          }}
        >
          I'm Muhamad Marseal
        </p>

        <div
          ref={lineRef}
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.3)",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
