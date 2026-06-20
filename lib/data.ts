// lib/data.ts
export interface Book {
    id: string;
    slug: string;
    title: string;
    author: string;
    price: number;
    description: string;
    coverImageUrl: string;
    category: string;
    createdAt: string;
    ratingsCount: number;
}

const books: Book[] = [
    {
        id: "1",
        slug: "atomic-habits",
        title: "Atomic Habits",
        author: "James Clear",
        price: 12000,
        description: "An easy and proven way to build good habits and break bad ones.",
        coverImageUrl: "/images/book-1.jpg",
        category: "Self Help",
        createdAt: "2024-01-15",
        ratingsCount: 320,
    },
    {
        id: "2",
        slug: "clean-code",
        title: "Clean Code",
        author: "Robert Martin",
        price: 15000,
        description: "A handbook of agile software craftsmanship.",
        coverImageUrl: "/images/book-2.jpg",
        category: "Programming",
        createdAt: "2024-02-10",
        ratingsCount: 210,
    },
    {
        id: "3",
        slug: "dune",
        title: "Dune",
        author: "Frank Herbert",
        price: 13500,
        description: "A science fiction epic set on the desert planet Arrakis.",
        coverImageUrl: "/images/book-3.jpg",
        category: "Fiction",
        createdAt: "2023-11-05",
        ratingsCount: 540,
    },
    {
        id: "4",
        slug: "rich-dad-poor-dad",
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 11000,
        description: "What the rich teach their kids about money that the poor and middle class do not.",
        coverImageUrl: "/images/book-4.jpg",
        category: "Business",
        createdAt: "2024-03-01",
        ratingsCount: 410,
    },
];

export async function getFeaturedBooks(): Promise<Book[]> {
    await new Promise((r) => setTimeout(r, 500)); // simulate network latency
    return books.slice(0, 4);
}

export async function getAllBooks(): Promise<Book[]> {
    await new Promise((r) => setTimeout(r, 500));
    return books;
}

export async function getBookBySlug(slug: string): Promise<Book | undefined> {
    await new Promise((r) => setTimeout(r, 500));
    return books.find((b) => b.slug === slug);
}