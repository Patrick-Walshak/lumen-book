"use client";

export default function HeroCarouselControls() {
    return (
        <div className="absolute bottom-0 right-0 flex gap-3 z-20">
            <button
                aria-label="Previous book"
                onClick={() => console.log("prev")}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
                ‹
            </button>
            <button
                aria-label="Next book"
                onClick={() => console.log("next")}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
                ›
            </button>
        </div>
    );
}