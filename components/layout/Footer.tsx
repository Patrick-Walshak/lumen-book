import Image from "next/image";
import Link from "next/link";

const linkColumns = [
    {
        heading: "Shop",
        links: [
            { label: "Bestsellers", href: "/books?sort=bestsellers" },
            { label: "New Releases", href: "/books?sort=newest" },
            { label: "Coming Soon", href: "/books?filter=coming-soon" },
            { label: "E-Books", href: "/books?category=ebooks" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About us", href: "/about" },
            { label: "Contacts", href: "/contact" },
            { label: "Blog", href: "/blog" },
        ],
    },
    {
        heading: "Account",
        links: [
            { label: "Account", href: "/dashboard" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Delivery & Returns", href: "/delivery" },
        ],
    },
    {
        heading: "Support",
        links: [
            { label: "Sitemap", href: "/sitemap.xml" },
            { label: "FAQ", href: "/faq" },
            { label: "Support", href: "/support" },
        ],
    },
];

const socials = [
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "tiktok", href: "https://tiktok.com" },
];

export default function Footer() {
    return (
        <footer className="bg-[#ecdfca]">
            <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 grid md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10">
                {/* Brand column */}
                <div>
                    <h3 className="font-serif text-xl font-bold text-[#1c1c1c]">
                        Lumen Book
                    </h3>
                    <p className="mt-3 text-sm text-[#5c5142] leading-relaxed">
                        Making as many books available for everyone as possible.
                    </p>

                    <div className="mt-4 space-y-2 text-sm text-[#1c1c1c]">
                        <p className="flex items-center gap-2">
                            <span aria-hidden>📞</span> (735) 571-7092
                        </p>
                        <p className="flex items-center gap-2">
                            <span aria-hidden>✉️</span> store@bookwormonline.com
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        {socials.map((social) => (
                            
                                <a href="" key={social.platform}
                                // href={social.href}
                                aria-label={social.platform}
                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#e07856]">
                                {social.platform[0].toUpperCase()}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link columns */}
                {linkColumns.map((col) => (
                    <div key={col.heading}>
                        <ul className="space-y-3 text-sm text-[#3d362b]">
                            {col.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-[#e07856]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="bg-[#e3d2bb] py-4">
                <p className="text-center text-sm text-[#5c5142]">
                    © {new Date().getFullYear()} BookWorm. All rights reserved.
                </p>
            </div>
        </footer>
    );
}