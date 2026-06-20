export default function StarRating({ rating = 0 }: { rating?: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={i < rating ? "#e07856" : "none"}
                    stroke="#e07856"
                    strokeWidth="1.5"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                </svg>
            ))}
        </div>
    );
}