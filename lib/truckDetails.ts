import { db } from "@/lib/database";
import "server-only";
import { RowDataPacket } from "mysql2";

interface TruckDetail extends RowDataPacket {
    driver_name: string | null;
    driver_gate_pass: string | null;
}

export async function getTruckDetails() {

    const [rows] = await db.execute<TruckDetail[]>(
        `SELECT driver_name, driver_gate_pass
         FROM do_truck_details_entry
         WHERE last_update LIKE ?`,
        ["2026-05-20%"]
    );

    return rows;
}