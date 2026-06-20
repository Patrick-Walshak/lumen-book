import Link from "next/link";
import BookCard from "../books/BookCard";
import { getFeaturedBooks } from "@/lib/data";

export default async function FeaturedBooks() {
    const books = await getFeaturedBooks();

    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="font-serif text-3xl font-bold text-[#1c1c1c] underline decoration-[#e07856] decoration-4">
                        Featured Books
                    </h2>
                    <p className="text-sm text-[#6b5e4d] mt-2">
                        Discover our bestselling collections
                    </p>
                </div>
                <Link href="/books" className="text-sm font-medium text-[#1c1c1c] hover:text-[#e07856]">
                    See all
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        slug={book.slug}
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        coverImageUrl={book.coverImageUrl}
                        category={book.category}
                    />
                ))}
            </div>
        </section>
    );
}