import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { getAllBooks } from "@/lib/data";

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const isAuthed = cookieStore.get("lumen_auth");

    // Middleware already protects this route, but this read is what
    // makes the page genuinely dynamic (SSR) per-request.
    const books = isAuthed ? await getAllBooks() : [];

    const totalBooks = books.length;
    const totalValue = books.reduce((sum, b) => sum + b.price, 0);

    return (
        <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <h1 className="font-serif text-4xl font-bold text-[#1c1c1c]">
                Welcome Seller 👋
            </h1>
            <p className="text-[#6b5e4d] mt-2">
                Here&apos;s an overview of your bookstore.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#f3e9da] rounded-xl p-6">
                    <p className="text-sm text-[#9a8c76]">Total Books</p>
                    <p className="font-serif text-3xl font-bold text-[#1c1c1c] mt-1">
                        {totalBooks}
                    </p>
                </div>
                <div className="bg-[#f3e9da] rounded-xl p-6">
                    <p className="text-sm text-[#9a8c76]">Inventory Value</p>
                    <p className="font-serif text-3xl font-bold text-[#1c1c1c] mt-1">
                        ₦{totalValue.toLocaleString()}
                    </p>
                </div>
                <div className="bg-[#f3e9da] rounded-xl p-6">
                    <p className="text-sm text-[#9a8c76]">Categories</p>
                    <p className="font-serif text-3xl font-bold text-[#1c1c1c] mt-1">
                        {new Set(books.map((b) => b.category)).size}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-12 mb-6">
                <h2 className="font-serif text-2xl font-bold text-[#1c1c1c]">
                    Your Listings
                </h2>
                <Link
                    href="/dashboard/new"
                    className="bg-[#e07856] hover:bg-[#cf6b4a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
                >
                    + Add New Book
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {books.map((book) => (
                    <div key={book.id} className="bg-[#f3e9da] rounded-xl p-3">
                        <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden">
                            <Image
                                src={book.coverImageUrl}
                                alt={`${book.title} cover`}
                                fill
                                sizes="(max-width: 768px) 50vw, 220px"
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-serif font-bold text-[#1c1c1c] mt-3">
                            {book.title}
                        </h3>
                        <p className="text-sm text-[#6b5e4d]">{book.author}</p>
                        <p className="font-semibold text-[#1c1c1c] mt-1">
                            ₦{book.price.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}