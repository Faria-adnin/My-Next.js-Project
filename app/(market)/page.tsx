"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/global.css";
import {useState} from "react";

export default function Home() {
  const [importCont, setImportContainer] = useState(20);
  const [exportCont, setExportContainer] = useState(30);
  const totalCont = importCont + exportCont;
  const maxValue = 90;
  const reset = () => {
    setImportContainer(20);
    setExportContainer(30);
  };
  const [containerNo, setContainerNo] = useState("");

  return (
    <div className="dashboard">
      <Header />
        <h1 className="dashboardTitle">Container Dashboard</h1>
        <div className="importCards">
          <p className="cardLabel">Import Container </p>
          <p className="cardValue importValue">{importCont}</p>
          <button className="commonButton" onClick = {() => setImportContainer(importCont + 1)}>Increase Import </button>{" "}
          <button className="commonButton" onClick = {() => setImportContainer(importCont - 1)}> Decrease Import</button>{" "}
        </div>
        <div className="exportCards">
          <p className="cardLabel">Export Container </p>
          <p className="cardValue exportValue">{exportCont}</p>
          <button className="commonButton" onClick = {() => setExportContainer(exportCont + 1)}>Increase Export</button>
          <button className="commonButton" onClick = {() => setExportContainer(exportCont - 1)}> Decrease Export</button>
        </div>
        <p className="totalRow">
          <input type="text" placeholder="Enter Container No" value={containerNo} onChange={(e) => setContainerNo(e.target.value)} />
          <p>Search for: {containerNo}</p>
          <span className="totalLabel">Total Container :</span>
          <span className="totalValue">{totalCont}</span>
        </p>

        {totalCont > maxValue ? (
          <p style={{color: "red"}}>Total Container Exceeded the Maximum Value!</p>
        ) : (
          <p style={{color: "green"}}>Total Container is within the Limit.</p>
        )}
        <button className="resetButton" onClick={reset}>
          Reset Containers
        </button>
      <Footer />
    </div>
  )
}



// "use client";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import DashboardCard from "./components/dashboardCard";
// import {useState} from "react";


// export default function Home(){
//   const totalVessels = 50;
//   const pangaonVessels = 20;
//   const matarBariVessel = 30;
//   const containerData = [
//     {title: "Total Shipping Agents", value: 100},
//     {title: "Total Freid Forwarders", value: 50},
//     {title: "Total Shipping lines", value: 80},
//     {title: "Total MLOs", value: 60}
//   ];
//   const [totalContainer,setTotalContainer] = useState(50);
//   const [containerNo, setContainerNo] = useState("");
//   const isAvailable = true;

//   return(
//     <div style={{
//       border: "2px solid #ddd", 
//       padding: "20px", 
//       margin: "10px", 
//       borderRadius: "8px"}}>
//       <Header />



// {/* Conditional Rendering */}
//       {isAvailable ?(
//         <h1>Container Available</h1>
//       ):(
//         <h1>Container Not Available</h1>
//       )}



// {/* Handling Events */}
//       <input type = "text" placeholder="Enter container number" value={containerNo}
//       onChange={(e) => setContainerNo(e.target.value)}/>
//       <p>Search for: {containerNo}</p>
      


// {/* useState */}
//       <h1>Total: {totalContainer}</h1>
//       <button onClick={() =>setTotalContainer(totalContainer + 1)}>Increment</button>
      
      
      
// {/* Map */}
//       {containerData.map((item, index) => (
//         <DashboardCard
//           key={index}
//           title={item.title}
//           value={item.value}
//         />
//       ))}
     


//       <h1>Welcome to My First Next.js Project</h1>
//       <DashboardCard title="Total Containers" value={100} />
//       <DashboardCard title="Import Containers" value={40} />
//       <DashboardCard title="Export Containers" value={60} />



// {/* JavaScript expressions in JSX  */}
//       <p>I am learning Next.js step by step.</p>
//       <DashboardCard title="Total Vessels" value={totalVessels} />
//       <DashboardCard title="Pangaon Vessels" value={pangaonVessels} />
//       <DashboardCard title="Matar Bari Vessels" value={matarBariVessel} />
//       <button>View Containers</button>
//       <Footer />
//     </div>
//   );
// }
















// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
