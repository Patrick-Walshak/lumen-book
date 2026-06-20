import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const authCookie = request.cookies.get("lumen_auth");

    if (!authCookie) {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"],
};