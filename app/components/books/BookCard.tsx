import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";

interface BookCardProps {
    slug: string;
    title: string;
    author: string;
    price: number;
    coverImageUrl: string;
    category?: string;
    rating?: number;
}

export default function BookCard({
    slug,
    title,
    author,
    price,
    coverImageUrl,
    category,
    rating = 4,
}: BookCardProps) {
    return (
        <div className="bg-[#f3e9da] rounded-xl p-3 flex flex-col">
            <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden">
                <Image
                    src={coverImageUrl}
                    alt={`${title} cover`}
                    fill
                    sizes="(max-width: 768px) 50vw, 220px"
                    className="object-cover"
                />
            </div>

            <div className="mt-3 flex-1">
                {category && (
                    <p className="text-xs text-[#9a8c76] uppercase tracking-wide">
                        {category}
                    </p>
                )}
                <h3 className="font-serif font-bold text-[#1c1c1c] mt-1">{title}</h3>
                <p className="text-sm text-[#6b5e4d]">{author}</p>
                <p className="font-semibold text-[#1c1c1c] mt-1">
                    ₦{price.toLocaleString()}
                </p>
            </div>

            <div className="flex items-center justify-between mt-3">
                <StarRating rating={rating} />

                <div className="flex items-center gap-2">
                    <Link
                        href={`/books/${slug}`}
                        className="w-8 h-8 rounded-full bg-[#e07856] flex items-center justify-center text-white hover:bg-[#cf6b4a] transition-colors"
                        aria-label="View details"
                    >
                        🛒
                    </Link>
                    <button
                        aria-label="Add to wishlist"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#e07856]"
                    >
                        ♡
                    </button>
                </div>
            </div>
        </div>
    );
}