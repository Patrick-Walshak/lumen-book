import { Book } from "@/types/book";

const books: Book[] = [
    {
        id: "1",
        slug: "atomic-habits",
        title: "Atomic Habits",
        author: "James Clear",
        price: 12000,
        description: "An easy and proven way to build good habits and break bad ones.",
        coverImageUrl: "/image/feature-book.jpg",
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
        coverImageUrl: "/image/featur-book1.jpg",
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
        coverImageUrl: "/image/feater-book2.jpg",
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
        coverImageUrl: "/image/feature-book-3.jpg",
        category: "Business",
        createdAt: "2024-03-01",
        ratingsCount: 410,
    },
    {
        id: "5",
        slug: "the-lean-startup",
        title: "The Lean Startup",
        author: "Eric Ries",
        price: 14000,
        description: "How today's entrepreneurs use continuous innovation to create successful businesses.",
        coverImageUrl: "/image/feature-book4.jpg",
        category: "Business",
        createdAt: "2023-09-20",
        ratingsCount: 198,
    },
    {
        id: "6",
        slug: "sapiens",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 16000,
        description: "A brief history of humankind, from the Stone Age to the present.",
        coverImageUrl: "/image/feature-book5.jpg",
        category: "Non-Fiction",
        createdAt: "2023-07-12",
        ratingsCount: 612,
    },
    {
        id: "7",
        slug: "the-pragmatic-programmer",
        title: "The Pragmatic Programmer",
        author: "David Thomas",
        price: 17500,
        description: "Your journey to mastery, covering timeless techniques and tools.",
        coverImageUrl: "/image/feature-book6.jpg",
        category: "Programming",
        createdAt: "2024-04-02",
        ratingsCount: 145,
    },
    {
        id: "8",
        slug: "the-alchemist",
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 9500,
        description: "A shepherd boy's journey to find his personal legend.",
        coverImageUrl: "/image/feature-book7.jpg",
        category: "Fiction",
        createdAt: "2023-05-18",
        ratingsCount: 730,
    },
    // {
    //     id: "9",
    //     slug: "deep-work",
    //     title: "Deep Work",
    //     author: "Cal Newport",
    //     price: 12500,
    //     description: "Rules for focused success in a distracted world.",
    //     coverImageUrl: "/images/book-9.jpg",
    //     category: "Self Help",
    //     createdAt: "2024-01-30",
    //     ratingsCount: 287,
    // },
    // {
    //     id: "10",
    //     slug: "educated",
    //     title: "Educated",
    //     author: "Tara Westover",
    //     price: 13000,
    //     description: "A memoir about a woman who leaves her survivalist family to pursue education.",
    //     coverImageUrl: "/images/book-10.jpg",
    //     category: "Non-Fiction",
    //     createdAt: "2023-10-08",
    //     ratingsCount: 455,
    // },
];

export async function getFeaturedBooks(): Promise<Book[]> {
    await new Promise((r) => setTimeout(r, 500)); 
    return books.slice(0, 8);
}

export async function getAllBooks(): Promise<Book[]> {
    await new Promise((r) => setTimeout(r, 500));
    return books;
}

export async function getBookBySlug(slug: string): Promise<Book | undefined> {
    await new Promise((r) => setTimeout(r, 500));
    return books.find((b) => b.slug === slug);
}

export async function getBooksByCategory(category: string): Promise<Book[]> {
    await new Promise((r) => setTimeout(r, 500));
    return books.filter((b) => b.category.toLowerCase() === category.toLowerCase());
}