"use client";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
    </section>
  );
}
