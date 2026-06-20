export default function RecommendedBooksSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-[#f3e9da] rounded-xl p-3">
                    <div className="aspect-[3/4] bg-[#ecdfca] rounded-md animate-pulse" />
                    <div className="h-4 bg-[#ecdfca] rounded mt-3 animate-pulse" />
                    <div className="h-3 w-2/3 bg-[#ecdfca] rounded mt-2 animate-pulse" />
                </div>
            ))}
        </div>
    );
}