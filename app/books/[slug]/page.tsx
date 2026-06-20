import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllBooks, getBookBySlug } from "@/lib/data";
import StarRating from "@/components/books/StarRating";
import RecommendedBooks from "@/components/books/RecommendedBooks";
import RecommendedBooksSkeleton from "@/components/books/RecommendedBooksSkeleton";

interface BookPageProps {
    params: Promise<{ slug: string }>;
}

// SSG: pre-render all known books at build time
export async function generateStaticParams() {
    const books = await getAllBooks();
    return books.map((book) => ({ slug: book.slug }));
}

// Dynamic metadata per book
export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
    const { slug } = await params;
    const book = await getBookBySlug(slug);

    if (!book) {
        return { title: "Book Not Found | Lumen Books" };
    }

    return {
        title: `${book.title} | Lumen Books`,
        description: book.description,
        openGraph: {
            title: book.title,
            description: book.description,
            images: [{ url: book.coverImageUrl }],
        },
    };
}

export default async function BookPage({ params }: BookPageProps) {
    const { slug } = await params;
    const book = await getBookBySlug(slug);

    if (!book) {
        notFound();
    }

    return (
        <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="relative w-full aspect-[3/4] max-w-sm rounded-md overflow-hidden">
                    <Image
                        src={book.coverImageUrl}
                        alt={`${book.title} cover`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                        priority
                    />
                </div>

                <div>
                    <p className="text-xs uppercase tracking-wide text-[#9a8c76]">
                        {book.category}
                    </p>
                    <h1 className="font-serif text-4xl font-bold text-[#1c1c1c] mt-2">
                        {book.title}
                    </h1>
                    <p className="text-[#6b5e4d] mt-1">{book.author}</p>

                    <div className="flex items-center gap-2 mt-3">
                        <StarRating rating={4} />
                        <span className="text-sm text-[#9a8c76]">
                            ({book.ratingsCount} ratings)
                        </span>
                    </div>

                    <p className="font-semibold text-2xl text-[#1c1c1c] mt-4">
                        ₦{book.price.toLocaleString()}
                    </p>

                    <p className="text-[#5c5142] leading-relaxed mt-6">
                        {book.description}
                    </p>
                </div>
            </div>

            <section className="mt-16">
                <h2 className="font-serif text-2xl font-bold text-[#1c1c1c] mb-6">
                    Recommended For You
                </h2>
                <Suspense fallback={<RecommendedBooksSkeleton />}>
                    <RecommendedBooks category={book.category} currentSlug={book.slug} />
                </Suspense>
            </section>
        </main>
    );
}