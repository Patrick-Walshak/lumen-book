import Image from "next/image";

export default function Newsletter() {
    return (
        <section className="bg-[#e3d2bb]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch mt-10">
                {/* Left: image */}
                <div className="relative h-72 md:h-auto min-h-[300px]">
                    <Image
                        src="/image/cta-book.jpg"
                        alt="Stack of books on a windowsill"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: copy + form */}
                <div className="px-8 py-10 md:px-12 flex flex-col justify-center">
                    <h2 className="font-serif text-3xl font-bold text-[#1c1c1c] leading-snug">
                        Subscribe to our newsletter and get 10% off your next order
                    </h2>

                    <p className="mt-4 text-sm text-[#5c5142] leading-relaxed">
                        Be the first to know about our latest book releases, exclusive
                        promotions, and book news. You&apos;ll get access to special
                        discounts, reading recommendations, and more.
                    </p>

                    <form className="mt-6 flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="example@example.com"
                            required
                            className="flex-1 bg-[#f3e9da] rounded-md px-4 py-3 text-sm placeholder:text-[#9a8c76] outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#e07856] hover:bg-[#cf6b4a] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}