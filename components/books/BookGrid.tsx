import { Book } from "@/types/book";
import BookCard from "./BookCard";

export default function BookGrid({ books }: { books: Book[] }) {
    if (books.length === 0) {
        return (
            <p className="mt-12 text-center text-[#9a8c76]">
                No books found. Try a different search or filter.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
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
    );
}