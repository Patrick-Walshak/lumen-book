import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-serif text-5xl font-bold text-[#1c1c1c]">404</h1>
            <p className="text-[#6b5e4d] mt-3">
                We couldn&apos;t find the book you&apos;re looking for.
            </p>
            <Link
                href="/books"
                className="mt-6 bg-[#e07856] hover:bg-[#cf6b4a] text-white px-6 py-3 rounded-md transition-colors"
            >
                Back to Catalog
            </Link>
        </main>
    );
}