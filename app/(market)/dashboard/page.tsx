import { Suspense } from "react";
import { getTruckDetails } from "@/lib/truckDetails";

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
    const trucks = await getTruckDetails();

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

// function BarChart(){
//     return(
//         <h1>Bar Chart</h1>
//     )
// }
// export default function Dashboard() {
//     return(
//         <h1>Dashboard</h1>
//     )
// }