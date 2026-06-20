import { login } from "@/lib/actions";

interface LoginPageProps {
    searchParams: Promise<{ error?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const { error } = await searchParams;

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#f3e9da] px-6">
            <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
                <h1 className="font-serif text-3xl font-bold text-[#1c1c1c] text-center">
                    Seller Login
                </h1>
                <p className="text-sm text-[#6b5e4d] text-center mt-2">
                    Sign in to manage your book listings.
                </p>

                {error && (
                    <p className="mt-4 text-sm text-center text-red-600 bg-red-50 rounded-md py-2 px-3">
                        Invalid email or password. Please try again.
                    </p>
                )}

                <form action={login} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1c1c1c] mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="seller@lumen.com"
                            className="w-full bg-[#f3e9da] rounded-md px-4 py-3 text-sm outline-none placeholder:text-[#9a8c76]"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[#1c1c1c] mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full bg-[#f3e9da] rounded-md px-4 py-3 text-sm outline-none placeholder:text-[#9a8c76]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#e07856] hover:bg-[#cf6b4a] text-white font-medium py-3 rounded-md transition-colors"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-6 bg-[#f3e9da] rounded-md p-4 text-sm text-[#5c5142]">
                    <p className="font-medium text-[#1c1c1c] mb-1">Demo credentials</p>
                    <p>Email: seller@lumen.com</p>
                    <p>Password: password123</p>
                </div>
            </div>
        </main>
    );
}