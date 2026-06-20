"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DEMO_EMAIL = "seller@lumen.com";
const DEMO_PASSWORD = "password123";

export async function login(formData: FormData) {
    const email = formData.get("email")?.toString().trim() ?? "";
    const password = formData.get("password")?.toString().trim() ?? "";

    console.log("RECEIVED EMAIL:", JSON.stringify(email));
    console.log("RECEIVED PASSWORD:", JSON.stringify(password));
    console.log("EXPECTED EMAIL:", JSON.stringify(DEMO_EMAIL));
    console.log("EXPECTED PASSWORD:", JSON.stringify(DEMO_PASSWORD));

    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
        redirect("/login?error=1");
    }

    const cookieStore = await cookies();
    cookieStore.set("lumen_auth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24,
    });

    redirect("/dashboard");
}