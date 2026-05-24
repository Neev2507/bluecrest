import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-40 border-t border-[#1a1f2e]/[0.08]">
      <div className="mx-auto max-w-5xl">

        <div className="mb-20">
          <p className="text-[12px] text-[#1a1f2e]/50 mb-4 tracking-widest uppercase">Contact</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1f2e]/90 tracking-tight">
            Let's work together
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-0 border border-[#1a1f2e]/[0.08] rounded-xl overflow-hidden">
          <div className="p-8 border-b sm:border-b-0 sm:border-r border-[#1a1f2e]/[0.08]">
            <p className="text-[11px] text-[#1a1f2e]/50 tracking-widest uppercase mb-6">Email</p>
            <p className="text-[14px] text-[#1a1f2e]/70 mb-4">hello@bluecrestmedia.com</p>
            <p className="text-[13px] text-[#1a1f2e]/40">We respond within 24 hours.</p>
          </div>
          <div className="p-8 border-b sm:border-b-0 sm:border-r border-[#1a1f2e]/[0.08]">
            <p className="text-[11px] text-[#1a1f2e]/50 tracking-widests uppercase mb-6">Office</p>
            <p className="text-[14px] text-[#1a1f2e]/70 mb-4">XYZ Business District<br />New Delhi, India</p>
            <p className="text-[13px] text-[#1a1f2e]/40">Drop by for a chat.</p>
          </div>
          <div className="p-8">
            <p className="text-[11px] text-[#1a1f2e]/50 tracking-widest uppercase mb-6">Phone</p>
            <p className="text-[14px] text-[#1a1f2e]/70 mb-4">+91 88103 56278</p>
            <p className="text-[13px] text-[#1a1f2e]/40">Mon–Fri, 9am–6pm IST.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <p className="text-[12px] text-[#1a1f2e]/40 tracking-widest uppercase mr-4">Find us online</p>
          {[
            { name: "Instagram", href: "https://www.instagram.com/blcrmedia/" },
            { name: "LinkedIn", href: "#" },
            { name: "Twitter", href: "#" },
          ].map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="inline-flex items-center px-4 py-2 text-[13px] text-[#1a1f2e]/50 border border-[#1a1f2e]/[0.08] rounded-full transition-all duration-200 hover:border-[#1a1f2e]/25 hover:text-[#1a1f2e]/80"
            >
              {social.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
