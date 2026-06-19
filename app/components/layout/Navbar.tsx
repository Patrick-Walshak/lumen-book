import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-[#e3d2bb] w-full">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-5">
                <Link href="/" className="font-serif text-2xl font-bold text-[#1c1c1c]">
                    Lumen Books
                </Link>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1c1c1c]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/books">Discover</Link></li>
                    <li><Link href="/about">About us</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center bg-[#f3e9da] rounded-full px-4 py-2 gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="2">
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm placeholder:text-[#8a7c6a] w-32"
                        />
                    </div>

                    <button aria-label="Cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </button>
                    <button aria-label="Account">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="2">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        </svg>
                    </button>
                    <button aria-label="Menu" className="md:hidden">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}