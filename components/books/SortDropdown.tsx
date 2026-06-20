"use client";

import { useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
];

export default function SortDropdown() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const current = searchParams.get("sort") ?? "";

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const params = new URLSearchParams(searchParams.toString());
        if (!e.target.value) {
            params.delete("sort");
        } else {
            params.set("sort", e.target.value);
        }
        router.push(`/books?${params.toString()}`);
    }

    return (
        <select
            value={current}
            onChange={handleChange}
            className="bg-[#f3e9da] rounded-md px-4 py-3 text-sm outline-none"
        >
            <option value="">Sort by</option>
            {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                    {o.label}
                </option>
            ))}
        </select>
    );
}