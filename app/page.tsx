import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact"

const works = [
  {
    title: "Meridian Health",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    title: "Vertex Labs",
    category: "Digital Campaign",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    title: "Nova Finance",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
]

const services = [
  {
    title: "Brand Strategy",
    description: "We define your brand positioning, voice, and visual identity to create lasting market differentiation.",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns across paid, organic, and social channels that deliver measurable growth.",
  },
  {
    title: "Web Development",
    description: "High-performance websites and applications built with modern technology and exceptional craft.",
  },
  {
    title: "Content Production",
    description: "Compelling narratives and visual content that resonates with your audience and drives engagement.",
  },
]

const faqs = [
  {
    question: "What makes Bluecrest different from other agencies?",
    answer: "We combine strategic thinking with exceptional execution. Our team has worked with global brands and startups alike, bringing enterprise-level expertise to every project regardless of size.",
  },
  {
    question: "How do you approach new projects?",
    answer: "Every engagement starts with discovery. We take time to understand your business, audience, and goals before proposing solutions. This ensures our work is always aligned with your objectives.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on scope. Brand strategy projects typically take 6-8 weeks. Web development ranges from 8-16 weeks. We always provide detailed timelines before starting.",
  },
]

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#14171f]">
        {/* Hero Section */}
        <section className="relative pt-44 pb-40 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] text-white/30 mb-8 tracking-widest uppercase">
              Digital Media Agency
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white/90 leading-[1.15] tracking-tight text-balance">
              We build brands that stand out and scale
            </h1>
            <p className="mt-8 max-w-xl mx-auto text-[16px] leading-relaxed text-white/40">
              Bluecrest is a digital media agency helping ambitious companies grow through strategic brand building, performance marketing, and exceptional digital experiences.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 text-[14px] text-white/70 border border-white/[0.12] rounded-full transition-all duration-200 hover:border-white/30 hover:text-white"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="inline-flex items-center px-6 py-2.5 text-[14px] text-white/40 transition-colors duration-200 hover:text-white/70"
              >
                View our work
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-40 border-t border-white/[0.04]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] text-white/25 mb-4 tracking-widest uppercase">What we do</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white/90 tracking-tight mb-20">
              Services
            </h2>

            <div className="grid sm:grid-cols-2 gap-12 text-left">
              {services.map((service) => (
                <div key={service.title} className="group">
                  <h3 className="text-[15px] font-medium text-white/80 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-white/35">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="px-6 py-40 border-t border-white/[0.04]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[12px] text-white/25 mb-4 tracking-widest uppercase">Selected projects</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white/90 tracking-tight mb-20">
              Recent work
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {works.map((work) => (
                <div key={work.title} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-5">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-[260px] object-cover transition-all duration-500 group-hover:scale-[1.02] opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <p className="text-[11px] text-white/25 mb-2 tracking-wide uppercase">{work.category}</p>
                  <h3 className="text-[15px] text-white/60 group-hover:text-white/90 transition-colors duration-200">
                    {work.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-40 border-t border-white/[0.04]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] text-white/25 mb-4 tracking-widest uppercase">Pricing</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white/90 tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-[15px] text-white/35 max-w-md mx-auto mb-20">
              Choose the engagement model that works best for your needs. No hidden fees, no surprises.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Monthly Retainer */}
              <div className="p-8 rounded-xl border border-white/[0.06] bg-white/[0.01] text-left">
                <p className="text-[12px] text-white/30 mb-3 tracking-wide uppercase">Monthly retainer</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-light text-white/90">$4,200</span>
                  <span className="text-[13px] text-white/25">/month</span>
                </div>
                <p className="text-[13px] text-white/35 mb-8 leading-relaxed">
                  Ongoing partnership for brands that need consistent support and growth.
                </p>
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full py-2.5 text-[13px] text-white/60 border border-white/[0.1] rounded-full transition-all duration-200 hover:border-white/25 hover:text-white/90 mb-8"
                >
                  Get started
                </a>
                <ul className="space-y-3">
                  {[
                    "Dedicated account manager",
                    "Weekly strategy calls",
                    "Multi-channel execution",
                    "Performance reporting",
                    "Unlimited revisions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] text-white/40">
                      <span className="w-1 h-1 rounded-full bg-[#00D4FF]/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project-Based */}
              <div className="p-8 rounded-xl border border-white/[0.06] bg-white/[0.01] text-left">
                <p className="text-[12px] text-white/30 mb-3 tracking-wide uppercase">Project-based</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-light text-white/90">$5,000</span>
                  <span className="text-[13px] text-white/25">starting</span>
                </div>
                <p className="text-[13px] text-white/35 mb-8 leading-relaxed">
                  Focused engagements for specific initiatives, launches, or campaigns.
                </p>
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full py-2.5 text-[13px] text-white/60 border border-white/[0.1] rounded-full transition-all duration-200 hover:border-white/25 hover:text-white/90 mb-8"
                >
                  Discuss your project
                </a>
                <ul className="space-y-3">
                  {[
                    "Fixed scope and timeline",
                    "Dedicated project lead",
                    "Two revision rounds",
                    "Final deliverables package",
                    "30-day support included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] text-white/40">
                      <span className="w-1 h-1 rounded-full bg-[#00D4FF]/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-40 border-t border-white/[0.04]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] text-white/25 mb-4 tracking-widest uppercase">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white/90 tracking-tight mb-20">
              Common questions
            </h2>

            <div className="text-left">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border-b border-white/[0.05] [&:first-child]:border-t"
                >
                  <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                    <span className="text-[14px] text-white/50 group-open:text-white/80 transition-colors duration-200 pr-8">
                      {faq.question}
                    </span>
                    <svg 
                      className="w-4 h-4 text-white/20 group-open:rotate-45 transition-transform duration-200 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <div className="pb-6">
                    <p className="text-[13px] leading-relaxed text-white/35">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Contact />

        {/* Footer */}
        <footer className="px-6 py-10 border-t border-white/[0.04]">
          <div className="mx-auto max-w-5xl flex flex-col items-center gap-4">
            <span className="font-serif text-[15px] text-white/50">
              Bluecrest Media
            </span>
            <p className="text-[11px] text-white/20">
              &copy; 2025 Bluecrest Media. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}