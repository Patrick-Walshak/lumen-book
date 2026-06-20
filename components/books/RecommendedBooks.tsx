import { getBooksByCategory } from "@/lib/data";
import BookCard from "./BookCard";

interface RecommendedBooksProps {
    category: string;
    currentSlug: string;
}

export default async function RecommendedBooks({
    category,
    currentSlug,
}: RecommendedBooksProps) {
    // Intentional extra delay to demonstrate streaming + Suspense
    await new Promise((r) => setTimeout(r, 2000));

    const books = await getBooksByCategory(category);
    const recommended = books.filter((b) => b.slug !== currentSlug).slice(0, 3);

    if (recommended.length === 0) {
        return <p className="text-[#9a8c76]">No recommendations available right now.</p>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {recommended.map((book) => ( 
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