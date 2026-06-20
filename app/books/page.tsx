import { Suspense } from "react";
import { getAllBooks } from "@/lib/data";
import BookGrid from "@/components/books/BookGrid";
import SearchBar from "@/components/books/SearchBook";
import BookFilters from "@/components/books/BookFilters";
import SortDropdown from "@/components/books/SortDropdown";

interface BooksPageProps {
    searchParams: Promise<{
        search?: string;
        category?: string;
        sort?: string;
    }>;
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
    const { search, category, sort } = await searchParams;

    let books = await getAllBooks();

    // Filter: search
    if (search) {
        books = books.filter((b) =>
            b.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Filter: category
    if (category && category !== "all") {
        books = books.filter(
            (b) => b.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
        );
    }

    // Sort
    if (sort === "newest") {
        books = [...books].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    } else if (sort === "price-asc") {
        books = [...books].sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
        books = [...books].sort((a, b) => b.price - a.price);
    }

    return (
        <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <h1 className="font-serif text-4xl font-bold text-[#1c1c1c]">
                Explore Books
            </h1>
            <p className="text-[#6b5e4d] mt-2">Discover your next favorite read.</p>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
                <SearchBar />
                <BookFilters />
                <SortDropdown />
            </div>

            <Suspense fallback={<p className="mt-10 text-[#9a8c76]">Loading books...</p>}>
                <BookGrid books={books} />
            </Suspense>
        </main>
    );
}