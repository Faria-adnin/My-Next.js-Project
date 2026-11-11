interface Truck {
    driver_name: string;
    driver_gate_pass: string;
}

async function getTrucks(): Promise<Truck[]> {
    const response = await fetch(
        "http://localhost:8080/api/trucks?date=2026-05-20",
        {
            cache: "no-store"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch truck records");
    }

    return response.json();
}

// export default async function Dashboard() {

//     const trucks = await getTrucks();

//     return (
//         <main className="p-8">
//             <h1 className="text-2xl font-bold mb-6">
//                 Truck Dashboard
//             </h1>

//             <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-lg font-semibold mb-4">
//                     Truck Records
//                 </h2>

//                 <table className="w-full border-collapse">
//                     <thead>
//                         <tr className="bg-slate-100">
//                             <th className="border p-3 text-left">
//                                 Driver Name
//                             </th>
//                             <th className="border p-3 text-left">
//                                 Gate Pass
//                             </th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {trucks.map((truck, index) => (
//                             <tr key={index}>
//                                 <td className="border p-3">
//                                     {truck.driver_name}
//                                 </td>
//                                 <td className="border p-3">
//                                     {truck.driver_gate_pass}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 <p className="mt-4 text-sm text-gray-500">
//                     Total Records: {trucks.length}
//                 </p>
//             </div>
//         </main>
//     );
// }






import { Suspense } from "react";
// import { getTruckDetails } from "@/lib/truckDetails";

export default function Dashboard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                Dashboard
            </h1>

            <h2 className="text-xl font-semibold mb-4">
                Driver Gate Pass Details
            </h2>

            <Suspense fallback={<p className="text-sm text-gray-500">Loading driver details...</p>}>
                <DriverGatePassDetails />
            </Suspense>
        </div>
    );
}

async function DriverGatePassDetails() {
    // const trucks = await getTruckDetails();
    const trucks = await getTrucks();

    return (
        <>
            <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-left">
                    <thead className="bg-slate-900 text-white">
                        <tr>
                            <th className="p-3">SL</th>
                            <th className="p-3">Driver Name</th>
                            <th className="p-3">Driver Gate Pass</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trucks.length > 0 ? (
                            trucks.map((truck, index) => (
                                <tr
                                    key={`${truck.driver_gate_pass}-${index}`}
                                    className="border-b hover:bg-slate-50"
                                >
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{truck.driver_name ?? "N/A"}</td>
                                    <td className="p-3">{truck.driver_gate_pass ?? "N/A"}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="p-5 text-center text-gray-500">
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
                Total Records: {trucks.length}
            </p>
        </>
    );
}