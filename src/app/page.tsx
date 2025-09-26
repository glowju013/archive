'use client';

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-sans  items-center min-h-screen w-full md:grid md:pl-20 md:pr-20 justify-items-center gap-16">
      <header className="flex w-full items-center justify-between">
            <label className="text-large flex  justify-center items-center flex-row">GLOW</label>
            <nav className="hidden md:flex flex-row gap-6 text-header">
              <h2>plants</h2>
              <h2>sky</h2>
              <h2>churrr</h2>
              <h2>about</h2>
            </nav>
            <button
              type="button"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="flex flex-row items-center justify-center w-6 h-6 md:w-10 md:h-10  md:hidden"
            >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <div
            className={`md:hidden overflow-hidden transition-[max-height,opacity] pt-10 duration-300 ease-out
                      ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <nav className="flex flex-col gap-4 px-5 py-4 text-large text-header">
              <button className="text-left">PLANTS</button>
              <button className="text-left">SKY</button>
              <button className="text-left">CHURRR</button>
              <button className="text-left">ABOUT</button>
            </nav>
        </div>

        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
        
       
      </footer>
    </div>
  );
}
