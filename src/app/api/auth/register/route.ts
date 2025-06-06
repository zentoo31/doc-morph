import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "../auth.service";

export async function POST(request: NextRequest){
    try {
        const { email, password } = await request.json();
        
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }

        const user = await AuthService.registerUser(email, password);
        
        return NextResponse.json(
            { message: "User registered successfully.", user },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Registration failed. Please try again." },
            { status: 500 }
        );
    }
}