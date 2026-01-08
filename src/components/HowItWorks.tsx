import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TimelineStep = ({ step, index, totalSteps, scrollYProgress }: { step: any, index: number, totalSteps: number, scrollYProgress: any }) => {
    // Each step is "active" when the scroll passing through it
    const stepSegment = (index + 0.5) / totalSteps; // Target the center of each step segment

    // Reveal around the time the car passes this point
    const start = stepSegment - 0.15;
    const end = stepSegment;

    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
    const x = useTransform(scrollYProgress, [start, end], [step.align === 'left' ? -50 : 50, 0]);

    return (
        <motion.div
            style={{ opacity, scale, x }}
            className={`flex flex-col md:flex-row items-center w-full ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Text Content */}
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${step.align === 'left' ? 'md:pr-32 md:text-right' : 'md:pl-32 md:text-left'} relative`}>
                {/* Connector Dot for Mobile */}
                <div className={`md:hidden absolute left-[14px] top-2 w-3 h-3 rounded-full border-2 border-zinc-950 bg-brand-red`} />

                {/* Number: Lighter color and positioned away from the center line */}
                <span
                    className={`text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-800 absolute -top-10 md:-top-16 opacity-40 select-none z-0 ${step.align === 'left' ? 'md:right-12' : 'md:left-12'}`}
                >
                    {step.number}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-2 relative z-10 group-hover:text-brand-gold transition-colors">
                    {step.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10">
                    {step.description}
                </p>
            </div>

            {/* Spacer for center line (desktop) */}
            <div className="hidden md:block w-px" />

            {/* Empty side for alignment */}
            <div className="hidden md:block w-1/2" />
        </motion.div>
    );
};

export const HowItWorks = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll from top of section to bottom of section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 40%", "end center"] // Start animating when section hits 40% of viewport
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 15,
        mass: 1,
        restDelta: 0.001
    });

    // Both Line and Car track the SAME progress (0% to 100%)
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
    const carY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    const steps = [
        { number: "01", title: "Precision Decontamination", description: "Beyond a standard wash — we perform a multi-stage decontamination to remove iron particles, tar, and bonded surface grit.", align: "left" },
        { number: "02", title: "Professional Paint Correction", description: "Our specialists use dual-action polishers to remove swirl marks, scratches, and oxidation, restoring depth and clarity.", align: "right" },
        { number: "03", title: "Advanced Molecular Coating", description: "Application of Ceramic or Graphene layers that bond with the clear coat for self-cleaning properties and extreme gloss.", align: "left" },
        { number: "04", title: "Hygienic Interior Rebirth", description: "Full cabin sterilization using steam and high-extraction tools to eliminate bacteria, odors, and deep-seated stains.", align: "right" },
        { number: "05", title: "Master Inspection", description: "A rigorous 40-point quality check under specialized lighting ensures every inch meets the Auto Vibe standard.", align: "left" }
    ];

    return (
        <section ref={containerRef} className="py-12 bg-zinc-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(229,25,18,0.15),transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
                    >
                        How <span className="text-brand-red">Auto Vibe</span> Works
                    </motion.h2>
                    <p className="mt-3 text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                        The Ultimate Process for Perfection
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Central Line (Background Track) */}
                    <div className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-1 bg-zinc-800 -translate-x-1/2 rounded-full" />

                    {/* Filling Line (Progress) - Tracks scroll position */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[20px] md:left-1/2 top-4 w-1 bg-brand-red -translate-x-1/2 rounded-full origin-top z-10 box-shadow-[0_0_10px_rgba(229,25,18,0.5)] will-change-transform"
                    />

                    {/* Moving Car - Now moves WITH the line using 'top' style based on same progress */}
                    <motion.div
                        style={{ top: carY }}
                        className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-32 h-52 md:w-48 md:h-80 z-20 pointer-events-none will-change-transform"
                    >
                        {/* Offset the car image so its center/bottom aligns with the tip of the line */}
                        <div className="relative -top-3/4">
                            <img
                                src="/moving car.svg"
                                alt="Car"
                                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(229,25,18,0.4)]"
                            />
                        </div>
                    </motion.div>

                    {/* Steps List */}
                    <div className="pt-16 pb-16 space-y-32">
                        {steps.map((step, idx) => (
                            <TimelineStep
                                key={step.number}
                                step={step}
                                index={idx}
                                totalSteps={steps.length}
                                scrollYProgress={smoothProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
