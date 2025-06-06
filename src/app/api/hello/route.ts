import { NextResponse } from "next/server";

type ResponseData ={
    message: string;
}

export async function GET(request: Request){
    return NextResponse.json<ResponseData>({
        message: "Hello, World! This is a response from the API."
    });
}