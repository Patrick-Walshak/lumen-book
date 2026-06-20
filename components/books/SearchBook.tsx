"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [value, setValue] = useState(searchParams.get("search") ?? "");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        router.push(`/books?${params.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex-1">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search books..."
                className="w-full bg-[#f3e9da] rounded-md px-4 py-3 text-sm outline-none placeholder:text-[#9a8c76]"
            />
        </form>
    );
}