import { NextResponse } from "next/server";
import { db } from "@/lib/database";

export async function GET() {
    try {
        const [rows] = await db.query(
            "SELECT 1 AS connected, DATABASE() AS databaseName"
        );

        return NextResponse.json({
            success: true,
            message: "Database connected successfully!",
            data: rows
        });

    } catch (error) {
        console.error("Database connection error:", error);

        return NextResponse.json({
            success: false,
            message: "Database connection failed."
        }, { status: 500 });
    }
}