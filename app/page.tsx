import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen scroll-smooth">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full h-full -z-10"
            style={{ background: "linear-gradient(to bottom, #022152, #020202)" }}
          />
          <div className="m-auto w-full text-white">
            <div className="text-center max-w-6xl mx-auto px-4 md:px-8 md:pt-10 lg:pt-16 text-xl md:text-2xl lg:text-3xl">
              <div className="mt-8 md:mt-10 mb-12 md:mb-25">
                <Image
                  src="/mist-logo.svg"
                  alt="Mist logo"
                  width={50}
                  height={50}
                  className="mx-auto my-2 brightness-0 invert"
                />
                MIST.cash | FOCBB
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Send <span className="text-blue-400">anything</span>
                <br />
                to anyone <span className="text-yellow-400">privately</span>
                <br />
                with <span className="text-green-300">full compliance</span>
              </h1>
              <div className="flex flex-col items-center my-20">
                <a
                  href="#demo"
                  className="group flex flex-col items-center transition-transform duration-300"
                >
                  <span className="text-white text-lg font-medium tracking-wide opacity-90 animate-bounce">
                    Try the demo below
                  </span>
                  <div className="relative">
                    <svg
                      className="mt-4 w-16 h-16 text-white animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 20V0" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="bg-black/30 rounded-lg p-4 md:p-6">
          <div className="flex justify-center mt-1 mb-8">
            <div className="bg-gray-800/60 rounded-lg p-1 flex">
              <button className="px-6 py-2 rounded-md font-semibold transition-all bg-blue-600 text-white shadow-lg">
                Send <span className="hidden md:inline">Payment</span>
              </button>
              <button className="px-6 py-2 rounded-md font-semibold transition-all text-gray-300 hover:text-white hover:bg-gray-700">
                Claim <span className="hidden md:inline">Payment</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-10">
            <form className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Send any token privately to a wallet address
              </h2>
              <p className="text-lg text-red-300 text-center mb-12 max-w-2xl mx-auto">
                This is an alpha preview, expect bugs, including complete loss of funds.
                <br />
                Please use at your own risk.
              </p>
              <div className="mb-6">
                <div className="mb-2">
                  <h3 className="text-white text-sm font-medium">Token</h3>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 border border-gray-700 flex items-center justify-between cursor-pointer hover:bg-gray-750 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#5f7edd" }}>
                      <svg viewBox="10 10 180 180" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="m99.99 127.24-33.6-19.85 33.6 47.36 33.63-47.36z" fill="#fff" />
                        <path d="m133.6 101.02-33.61 19.86-33.61-19.86 33.61-55.77z" fill="#fff" />
                        <g fill="#c1ccf7">
                          <path d="m133.6 101.02-33.61-15.28v-40.49z" />
                          <path d="m133.62 107.39-33.63 47.36v-27.51z" />
                          <path d="m99.99 85.74v35.14l-33.6-19.86z" />
                        </g>
                        <path d="m133.6 101.02-33.61 19.86v-35.14z" fill="#8198ee" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">ETH</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              <div className="mb-6">
                <div className="mb-2">
                  <h3 className="text-white text-sm font-medium">To</h3>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 border border-gray-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FF6B35" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <input type="text" className="flex-1 bg-transparent text-white font-sm outline-none placeholder-gray-400" required placeholder="Account address (0x...)" />
                </div>
              </div>
              <div className="mb-6">
                <div className="mb-2">
                  <h3 className="text-white text-sm font-medium">Claiming Key</h3>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 border border-gray-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#10B981" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                  <input type="text" className="flex-1 bg-transparent text-white font-sm outline-none placeholder-gray-400" required placeholder="Generate Claiming Key" />
                  <button type="button" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-1">Share this code with the recipient to claim the funds.</p>
              </div>
              <div className="mb-6">
                <div className="mb-2">
                  <h3 className="text-white text-sm font-medium">Amount</h3>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 border border-gray-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#10B981" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                      <line x1="12" x2="12" y1="2" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <input
                    type="number"
                    className="flex-1 bg-transparent text-white font-sm outline-none placeholder-gray-400"
                    required
                    placeholder="Amount"
                    step="1"
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="cursor-pointer w-full py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M17 14h.01" />
                    <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
                  </svg>
                  Connect Wallet
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Blockchains Are Too Public */}
      <section className="py-16 px-4 md:px-6 bg-gray-800/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6 text-2xl md:text-3xl font-bold">Blockchains Are too Public</h2>
          <p className="text-lg text-gray-300 mb-6">
            Blockchains expose user balances and transaction history. This creates friction for widespread adoption.
            We are building the private, compliant financial rails the world needs.
          </p>
        </div>
      </section>

      {/* MIST Chamber */}
      <section className="py-16 px-4 md:px-6 bg-gray-900/70">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6 text-2xl md:text-3xl font-bold">MIST Chamber: The anonymity layer</h2>
          <p className="text-lg text-gray-300 mb-8">
            Chamber breaks the link between sender and recipient. Send any token to any wallet address without
            revealing the connected parties.
          </p>
          <h3 className="font-semibold text-white mb-8 text-xl">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-yellow-400 mb-2">
                <circle cx="8" cy="8" r="6" />
                <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                <path d="M7 6h1v4" />
                <path d="m16.71 13.88.7.71-2.82 2.82" />
              </svg>
              <span className="font-semibold my-2 text-white">Select and Deposit Tokens</span>
              <span className="text-gray-300 text-sm">Deposit your tokens for recipient address with a claiming key.</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-green-400 mb-2">
                <path d="m16 3 4 4-4 4" />
                <path d="M20 7H4" />
                <path d="m8 21-4-4 4-4" />
                <path d="M4 17h16" />
              </svg>
              <span className="font-semibold my-2 text-white">Share Claiming Key</span>
              <span className="text-gray-300 text-sm">Recipient uses the claiming key to find and claim the funds.</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-400 mb-2">
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                <path d="m2 2 20 20" />
              </svg>
              <span className="font-semibold my-2 text-white">Complete Privacy</span>
              <span className="text-gray-300 text-sm">No on-chain connection between sender and recipient.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-gray-800/70">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6 text-2xl md:text-3xl font-bold">Chamber demo is just the beginning</h2>
          <p className="text-gray-200 mb-6">
            FOCBB provides complete financial privacy through anonymous transfers and encrypted ledgers.
            <br className="hidden md:block" />
            Built with configurable compliance for any jurisdiction, business model or niche market.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
              href="https://t.me/+IopcODWeG7wxZDhl"
            >
              Join Community
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
              href="https://shhtarknet.github.io/mist"
            >
              Ledger v1 Demo
            </a>
            <a
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
              href="mailto:partner@mist.cash"
            >
              Build with Us
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            FOCBB, pronounced Fok bibi, Fully On-Chain Better Banks - is a protocol for deploying and maintaining
            compliant privacy ledgers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 bg-gray-900 bg-gradient-to-b from-gray-900/50 to-gray-900 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Image
                  src="/mist-logo.svg"
                  alt="Mist logo"
                  width={120}
                  height={24}
                  className="mb-3 brightness-0 invert"
                />
                <p className="text-gray-400 text-sm leading-relaxed">MIST | FOCBB</p>
              </div>
              <div className="flex space-x-3">
                <a
                  href="https://t.me/+IopcODWeG7wxZDhl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                </a>
                <a
                  href="https://github.com/mistcash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/_mistcash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link className="text-gray-400 hover:text-cyan-400 text-sm transition-colors" href="/#demo">Chamber Demo</Link></li>
                <li>
                  <a href="https://shhtarknet.github.io/mist" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors inline-flex items-center gap-1">
                    MIST Ledger
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </li>
                <li><span className="text-gray-600 text-sm">Documentation <span className="text-xs">(Coming Soon)</span></span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://t.me/+IopcODWeG7wxZDhl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors inline-flex items-center gap-1">
                    Telegram
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mistcash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors inline-flex items-center gap-1">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </li>
                <li><a href="mailto:partner@mist.cash" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-600 text-sm">About <span className="text-xs">(Coming Soon)</span></span></li>
                <li><span className="text-gray-600 text-sm">Whitepaper <span className="text-xs">(Coming Soon)</span></span></li>
                <li><span className="text-gray-600 text-sm">Security <span className="text-xs">(Coming Soon)</span></span></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-cyan-500/20 rounded-xl p-6 mb-8 text-center">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Ready to Build the Private Web3?
            </h3>
            <p className="text-gray-400 text-sm mb-4">Join the revolution in blockchain privacy infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.me/+IopcODWeG7wxZDhl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Join Community
              </a>
              <a
                href="mailto:partner@mist.cash"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">&copy; 2025 FOCBB. Building the private web3.</p>
              </div>
              <div className="flex space-x-6">
                <span className="text-gray-600 text-sm">Privacy Policy <span className="text-xs">(Coming Soon)</span></span>
                <span className="text-gray-600 text-sm">Terms <span className="text-xs">(Coming Soon)</span></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
