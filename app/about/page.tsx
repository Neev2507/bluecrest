"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Contact } from "@/components/contact"

const leadership = [
  { name: "Atharv Akhaury", title: "Chairman" },
  { name: "Harshbardhan Tripathi", title: "Chief Executive Officer" },
  { name: "Jas Bhatia", title: "Chief Operating Officer" },
]

const values = [
  { title: "Design-led thinking", description: "Great design is not decoration — it is strategy made visible." },
  { title: "Bespoke by default", description: "We understand your brand deeply before we deploy a single tactic." },
  { title: "Measurable outcomes", description: "Every campaign is built to move the needle, not just the metrics." },
  { title: "Dedicated advocacy", description: "We become the most committed member of your brand team." },
]

function AboutNav() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#14171f]/90 backdrop-blur-xl border-b border-white/[0.05]" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-lg text-white/90 tracking-tight">Bluecrest</Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[13px] text-white/40 hover:text-white/80 transition-colors duration-200">Home</Link>
            <Link href="/about" className="text-[13px] text-white/80 transition-colors duration-200">About</Link>
          </div>
          <button onClick={scrollToContact} className="hidden lg:inline-flex items-center px-4 py-2 text-[13px] text-white/60 border border-white/[0.1] rounded-full transition-all duration-200 hover:border-white/25 hover:text-white/90">
            Get in touch
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden hover:bg-white/[0.04] transition-colors" aria-label="Toggle menu">
            <div className="flex h-4 w-5 flex-col items-center justify-center gap-[5px]">
              <span className={`h-[1px] bg-white/50 transition-all duration-300 ${isOpen ? "w-5 translate-y-[6px] rotate-45" : "w-5"}`} />
              <span className={`h-[1px] bg-white/50 transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-5"}`} />
              <span className={`h-[1px] bg-white/50 transition-all duration-300 ${isOpen ? "w-5 -translate-y-[6px] -rotate-45" : "w-5"}`} />
            </div>
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 top-16 bg-[#14171f] transition-all duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center gap-6 px-6 py-10">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg text-white/60 hover:text-white">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg text-white/80">About</Link>
          <button onClick={scrollToContact} className="text-lg text-white/60 hover:text-white">Get in touch</button>
        </div>
      </div>
    </nav>
  )
}

export default function About() {
  return (
    <div>
      <AboutNav />
      <main className="min-h-screen bg-[#14171f]">

        <section className="relative pt-44 pb-40 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] text-white/30 mb-8 tracking-widest uppercase">About Us</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white/90 leading-[1.15] tracking-tight text-balance">
              Built on the conviction that excellence cannot be siloed
            </h1>
          </div>
        </section>

        <section className="px-6 py-40 border-t border-white/[0.04]">
          <div className="mx-auto max-w-3xl">
            <p className="text-[12px] text-white/25 mb-4 tracking-widest uppercase">Our story</p>
            <div className="space-y-6">
              <p className="text-[16px] leading-relaxed text-white/60">
                Bluecrest Media is a full-service digital media and marketing agency incorporated in September 2025 and headquartered in India. Founded on the conviction that great design, compelling content, and technical excellence must operate in concert, we partner with businesses across sectors to build purposeful, high-impact digital presences.
              </p>
              <p className="text-[16px] leading-relaxed text-white/40">
                We offer an integrated suite of services spanning social media management, content strategy, website development, and search engine optimisation — each executed with a commitment to creativity, precision, and measurable outcomes.
              </p>
              <p className="text-[16px] leading-relaxed text-white/40">
                Bluecrest Media operates on a bespoke model, prioritising a deep understanding of each client's brand identity and business objectives before deploying strategy. The result is not merely digital visibility, but meaningful engagement that translates into bottom-line results.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-40 border-t border-white/[0.04]">
          <div className="mx-auto max-w-3xl">
            <p className="text-[12px] text-white/25 mb-4 tracking-widest uppercase">What we stand for</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white/90 tracking-tight mb-20">Our values</h2>
            <div className="grid sm:grid-cols-2 gap-12">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="text-[15px] font-medium text-white/80 mb-3">{value.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/35">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-40 border-t border-white/[0.04]">
          <div className="mx-auto max-w-3xl">
            <p className="text-[12px] text-white/25 mb-4 tracking-widest uppercase">Leadership</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white/90 tracking-tight mb-20">The team</h2>
            <div className="grid sm:grid-cols-3 gap-10">
              {leadership.map((person) => (
                <div key={person.name} className="border-t border-white/[0.06] pt-6">
                  <h3 className="text-[15px] font-medium text-white/80 mb-1">{person.name}</h3>
                  <p className="text-[13px] text-white/30">{person.title}</p>
                </div>
              ))}
            </div>
            <p className="mt-16 text-[14px] leading-relaxed text-white/35 max-w-xl">
              Supported by a capable middle management layer overseeing operations, general management, and visual communications — a team of young, driven professionals united by a single purpose: to become every client's most dedicated brand advocate.
            </p>
          </div>
        </section>

        <Contact />

        <footer className="px-6 py-10 border-t border-white/[0.04]">
          <div className="mx-auto max-w-5xl flex flex-col items-center gap-4">
            <span className="font-serif text-[15px] text-white/50">Bluecrest Media</span>
            <p className="text-[11px] text-white/20">&copy; 2025 Bluecrest Media. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </div>
  )
}