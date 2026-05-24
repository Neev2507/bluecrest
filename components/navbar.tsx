"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#14171f]/90 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-lg text-white/90 tracking-tight">
              Bluecrest
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white/80"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-[13px] text-white/60 border border-white/[0.1] rounded-full transition-all duration-200 hover:border-white/25 hover:text-white/90"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden hover:bg-white/[0.04] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="flex h-4 w-5 flex-col items-center justify-center gap-[5px]">
              <span
                className={`h-[1px] bg-white/50 transition-all duration-300 ease-out ${
                  isOpen ? "w-5 translate-y-[6px] rotate-45" : "w-5"
                }`}
              />
              <span
                className={`h-[1px] bg-white/50 transition-all duration-300 ease-out ${
                  isOpen ? "w-0 opacity-0" : "w-5"
                }`}
              />
              <span
                className={`h-[1px] bg-white/50 transition-all duration-300 ease-out ${
                  isOpen ? "w-5 -translate-y-[6px] -rotate-45" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-[#14171f] transition-all duration-400 ease-out lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-10">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white/60 transition-all duration-300 hover:text-white"
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div
            className="mt-10 flex justify-center"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center px-6 py-2.5 text-[14px] text-white/70 border border-white/[0.1] rounded-full transition-all duration-200 hover:border-white/25 hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}