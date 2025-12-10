// src/components/About.jsx
import React, { useRef, useEffect, useState } from "react";
import aboutImg from "../assets/images/e2.jpg";

/**
 * useInView
 * - ref: element ref
 * - options: IntersectionObserver options (threshold, rootMargin)
 * - returns boolean (true once element is in view)
 */
function useInView(ref, options = { threshold: 0.3, rootMargin: "0px 0px -120px 0px" }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // if you only want to trigger once, disconnect
        // observer after first intersection
        if (obs) obs.disconnect();
      }
    }, options);

    obs.observe(el);

    return () => {
      if (obs && el) obs.unobserve(el);
      if (obs) obs.disconnect();
    };
    // note: options intentionally omitted from deps to avoid re-creating observer frequently
    // if you want to react to options changes, add them here
  }, [ref]);

  return inView;
}

/**
 * AnimatedCounter
 * - target: final number to count to (integer)
 * - start: boolean to start the animation
 * - duration: total ms duration of animation
 */
function AnimatedCounter({ target = 0, start = false, duration = 1200 }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const targetNum = Number(target) || 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * targetNum);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(targetNum);
      }
    }

    // start the animation
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [start, target, duration]);

  return <span>{value}</span>;
}

export default function About({ text = {} }) {
  // you pass `text` from Home.jsx (t.about)
  const { eyebrow, title, desc, overlayTitle, stats, details = {} } = text;

  // the ref is attached to the stat container so it becomes visible
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { threshold: 0.2, rootMargin: "0px 0px -120px 0px" });

  // local state to control when the counters should start (so they start once)
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    if (inView && !startCounters) {
      setStartCounters(true);
    }
  }, [inView, startCounters]);

  // defensive defaults
  const countries = stats?.countries ?? 10;
  const projects = stats?.projects ?? 35;

  return (
    <section className="prs-about-section" id="about">
      <div className="container prs-about-container">
        <div className="about-left">
          <div className="about-image-wrap">
            <img src={aboutImg} className="about-image" alt={title || "About image"} />
            <div className="about-overlay-card">
              <h3>
                {(overlayTitle || "Performance,\nQualité et\nFiabilité")
                  .split("\n")
                  .map((line, idx) => (
                    <span key={idx} className="overlay-line">{line}</span>
                  ))}
              </h3>
            </div>

          </div>
        </div>

        <div className="about-right">
       
          <h4 className="about-title">{title || "Notre expertise et\nnotre adaptabilité"}</h4>
          <div className="about-stats" ref={statsRef}>
            <div className="stat">
              <div className="stat-label">Years</div>
              <div className="stat-number">
                <AnimatedCounter target={countries} start={startCounters} duration={1200} />
                <span className="plus">+</span>
              </div>
            </div>

            <div className="stat">
              <div className="stat-label">Projets</div>
              <div className="stat-number">
                <AnimatedCounter target={projects} start={startCounters} duration={1200} />
                <span className="plus">+</span>
              </div>
            </div>
          </div>

          <div className="details-block">
            <h4>{details.labels?.who || "Who we are"}</h4>
            <p>{details.who || `PRS International is a French company founded...`}</p>
          </div>

        </div>
      </div>


      {/* — NEW: Details grid — */}
      <div className="container">
        <div className="about-details">
          <div className="details-left">
            <div className="details-block">
              <h4>{details.labels?.mission || "Our mission"}</h4>
              <p>{details.mission || ""}</p>
            </div>

            <div className="details-block">
              <h4>{details.labels?.strengths || "Our strengths"}</h4>
              <ul className="plain-bullets">
                {(details.strengths || []).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>

          <div className="details-right">
            <div className="details-block">
              <h4>{details.labels?.vision || "Our vision"}</h4>
              <p>{details.vision || ""}</p>
            </div>

            <div className="details-block">
              <h4>{details.labels?.values || "Our values"}</h4>
              <ul className="plain-bullets">
                {(details.values || []).map((v, i) => <li key={i}>{v}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* — end details grid — */}


    </section>
  );

}
