import Image from "next/image";
import Link from "next/link";
import HeroCarouselControls from "./HeroCarouselControls";

const stats = [
    { value: "16,052", label: "Bookworms read with us" },
    { value: "1,304", label: "Orders made this month" },
    { value: "80,552", label: "Books available in our store" },
    { value: "63,526", label: "E-books available" },
];

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/hero-bg.jpg"
                alt=""
                fill
                priority
                className="object-cover"
            />

            {/* Dim overlay */}
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left: copy */}
                    <div className="max-w-xl">
                        <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-white">
                            Discover Your Next Favorite Book
                        </h1>

                        <p className="mt-6 text-white/85 text-base leading-relaxed">
                            Explore a vast selection of books in all genres. Are you a fan
                            of mystery novels? Romance? Non-fiction? Or children&apos;s
                            books? We have something for everyone!
                        </p>

                        <Link
                            href="/books"
                            className="inline-block mt-8 bg-[#e07856] hover:bg-[#cf6b4a] text-white font-medium px-7 py-3 rounded-md transition-colors"
                        >
                            Browse Our Selection
                        </Link>
                    </div>

                    {/* Right: floating book covers */}
                    <div className="relative h-[380px] flex items-center justify-center">
                        <div className="absolute right-10 w-40 h-56 rotate-3 shadow-2xl rounded-sm overflow-hidden">
                            <Image src="/images/book-2.jpg" alt="Book cover" fill className="object-cover" />
                        </div>
                        <div className="absolute right-0 w-40 h-56 -rotate-2 shadow-2xl rounded-sm overflow-hidden">
                            <Image src="/images/book-3.jpg" alt="Book cover" fill className="object-cover" />
                        </div>
                        <div className="relative w-48 h-72 shadow-2xl rounded-sm overflow-hidden z-10">
                            <Image src="/images/book-1.jpg" alt="Featured book cover" fill className="object-cover" />
                        </div>

                        {/* Interactive carousel arrows — isolated client component */}
                        <HeroCarouselControls />
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div className="relative z-10 bg-[#f3e9da]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#d8cdb8] text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="px-4">
                            <p className="font-serif text-2xl font-bold text-[#1c1c1c]">
                                {stat.value}
                            </p>
                            <p className="text-sm text-[#6b5e4d] mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}