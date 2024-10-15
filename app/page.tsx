'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState('');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full items-center">
        <div className="w-full flex justify-center mt-8">
          <p className="text-3xl">Serial Lookup</p>
        </div>
        <div className="w-10/12 max-w-[800px] min-w-[360px] flex flex-col items-center">
          <p className="my-8">Choose an index...</p>
          <div className="flex justify-around w-full text-white">
            <p onClick={() => setCategory((prev) => prev === 'hvac' ? '' : 'hvac')} className={`cursor-pointer px-4 py-2 rounded border ${category === 'hvac' ? "bg-teal-700" : "bg-slate-700"}`}>HVAC Brands</p>
            <p onClick={() => setCategory((prev) => prev === 'waterheater' ? '' : 'waterheater')} className={`cursor-pointer px-4 py-2 rounded border ${category === 'waterheater' ? "bg-teal-700" : "bg-slate-700"}`}>Water Heater Brands</p>
            <p onClick={() => setCategory((prev) => prev === 'appliance' ? '' : 'appliance')} className={`cursor-pointer px-4 py-2 rounded border ${category === 'appliance' ? "bg-teal-700" : "bg-slate-700"}`}>Small Appliances</p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jkintner25/serial_lookup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
