export default function BooksLoading() {
    return (
        <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <div className="h-10 w-64 bg-[#ecdfca] rounded animate-pulse" />
            <div className="h-5 w-80 bg-[#ecdfca] rounded animate-pulse mt-3" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-[#f3e9da] rounded-xl p-3">
                        <div className="aspect-[3/4] bg-[#ecdfca] rounded-md animate-pulse" />
                        <div className="h-4 bg-[#ecdfca] rounded mt-3 animate-pulse" />
                        <div className="h-3 w-2/3 bg-[#ecdfca] rounded mt-2 animate-pulse" />
                    </div>
                ))}
            </div>
        </main>
    );
}