import Image from "next/image";

const products = [
  {
    name: "AgentFactory",
    description: "The ultimate platform for creating autonomous AI clones. Deploy a version of yourself that handles chats, creates content, and manages your brand.",
    image: "/screenshots/agentfactory.jpg",
    link: "https://jasim-saas.vercel.app",
    tags: ["AI", "SaaS", "Automation"]
  },
  {
    name: "Study AI Buddy",
    description: "The premier AI-powered educational platform that transforms study materials into interactive resources like quizzes, flashcards, and AI podcasts.",
    image: "/screenshots/studyaibuddy.jpg",
    link: "https://www.studyaibuddy.com",
    tags: ["EdTech", "AI", "Education"]
  },
  {
    name: "Publishle",
    description: "AI-powered marketing content studio that helps create, edit, and publish professional marketing materials in seconds.",
    image: "/screenshots/publishle.jpg",
    link: "https://publishle.vercel.app/",
    tags: ["Marketing", "AI", "SaaS"]
  },
  {
    name: "Cloud9 Profile",
    description: "AI-assisted resume builder and professional portfolio platform with integrated ATS checking for career growth.",
    image: "/screenshots/cloud9.jpg",
    link: "https://cloud9profile.com",
    tags: ["HRTech", "AI", "Career"]
  },
  {
    name: "LeadMate",
    description: "Intelligent lead management and sales automation platform designed to streamline high-velocity outreach.",
    image: "/screenshots/leadmate.jpg",
    link: "https://leadmate.vercel.app/",
    tags: ["Sales", "CRM", "Automation"]
  },
  {
    name: "CryptoTrader",
    description: "Advanced cryptocurrency trading dashboard featuring automated asset management and real-time market analytics.",
    image: "/screenshots/crypto.jpg",
    link: "https://cryptotrader-tau.vercel.app",
    tags: ["Crypto", "Fintech", "Analytics"]
  },
  {
    name: "AssetFlow",
    description: "Enterprise Asset Management platform with automated tracking, maintenance scheduling, and granular system access control.",
    image: "/screenshots/assetflow.jpg",
    link: "https://assetfront.vercel.app/",
    tags: ["Enterprise", "Management", "SaaS"]
  },
  {
    name: "MyDebugTools",
    description: "A comprehensive suite of professional-grade developer tools for formatting, validating, and debugging code in real-time.",
    image: "/screenshots/debugtools.jpg",
    link: "https://mydebugtools.com",
    tags: ["DevTools", "Utilities", "Web"]
  },
  {
    name: "HR Module",
    description: "Next-gen Human Resource Management System with biometric-ready authentication and AI-powered personnel operations.",
    image: "/screenshots/hr-module.jpg",
    link: "https://hrmodule.vercel.app",
    tags: ["SaaS", "Enterprise", "HRTech"]
  },
  {
    name: "Clarity BI",
    description: "Strategic business intelligence dashboard for enterprise data visualization and predictive analytics.",
    image: "/screenshots/clarity.jpg",
    link: "https://clarity-bi-opal.vercel.app",
    tags: ["Analytics", "BI", "Data"]
  },
  {
    name: "Docs Analyzer",
    description: "Automated financial bank statement parsing and credit scoring system for automated risk assessment.",
    image: "/screenshots/bankanalyzer.jpg",
    link: "https://bankstatementanalyzer.vercel.app",
    tags: ["Fintech", "Automation", "Security"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tighter">ENDURX LABS</div>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#products" className="transition-colors hover:text-white">Portfolio</a>
            <a href="#philosophy" className="transition-colors hover:text-white">Philosophy</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
          <h1 className="max-w-4xl animate-fade-in text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Engineering <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent">Intelligence</span> at Scale.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            EndurxLabs builds high-impact AI, SaaS, and Fintech solutions engineered for extreme performance and global reliability.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-transform hover:scale-105">
              Explore Portfolio
            </a>
            <a href="#contact" className="flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold transition-colors hover:bg-white/10">
              Partner With Us
            </a>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built & Deployed</h2>
              <p className="mt-4 text-zinc-400">A curated showcase of production-ready AI and software ecosystems.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition-colors hover:border-white/20">
                <div className="aspect-video relative overflow-hidden bg-zinc-800/50">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-zinc-700 font-bold text-4xl">
                      {product.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-zinc-500 border border-white/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {product.description}
                  </p>
                  <a 
                    href={product.link} 
                    target="_blank" 
                    className="mt-6 flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70"
                  >
                    Launch Platform 
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="border-t border-white/5 bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Development Philosophy</h2>
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  At EndurxLabs, we don't just write code; we build intelligent systems that solve real-world problems. Our development lifecycle is anchored by three core pillars:
                </p>
                <dl className="mt-10 space-y-8 text-base leading-7 text-zinc-400">
                  <div className="relative pl-9">
                    <dt className="inline font-bold text-white">AI-Native Infrastructure.</dt>
                    <dd className="inline"> Every product is built from the ground up to leverage artificial intelligence for maximum user impact.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-bold text-white">QA-Driven Excellence.</dt>
                    <dd className="inline"> Our systems are stress-tested and verified for edge cases before they ever hit production.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-bold text-white">Revenue-Focused UX.</dt>
                    <dd className="inline"> We optimize for usage and business outcomes, ensuring that every interface serves a strategic purpose.</dd>
                  </div>
                </dl>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-800/50 border border-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4 italic text-zinc-600">"Clear mind. Honest code."</div>
                  <div className="text-zinc-500 uppercase tracking-widest text-sm">— The EndurxLabs Ethos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Let's Build the Future.</h2>
          <p className="mt-6 text-lg text-zinc-400">
            EndurxLabs is open for strategic partnerships and high-impact development collaborations.
          </p>
          <div className="mt-12">
            <a href="mailto:hello@endurxlabs.com" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-bold text-black transition-transform hover:scale-105">
              Contact EndurxLabs
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-sm text-zinc-600">
        <p>&copy; 2026 EndurxLabs. Engineered with Precision.</p>
      </footer>
    </div>
  );
}
