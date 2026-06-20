"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
    { label: "All", value: "all" },
    { label: "Programming", value: "programming" },
    { label: "Business", value: "business" },
    { label: "Self Help", value: "self-help" },
    { label: "Fiction", value: "fiction" },
    { label: "Non-Fiction", value: "non-fiction" },
];

export default function BookFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const current = searchParams.get("category") ?? "all";

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const params = new URLSearchParams(searchParams.toString());
        if (e.target.value === "all") {
            params.delete("category");
        } else {
            params.set("category", e.target.value);
        }
        router.push(`/books?${params.toString()}`);
    }

    return (
        <select
            value={current}
            onChange={handleChange}
            className="bg-[#f3e9da] rounded-md px-4 py-3 text-sm outline-none"
        >
            {categories.map((c) => (
                <option key={c.value} value={c.value}>
                    {c.label}
                </option>
            ))}
        </select>
    );
}