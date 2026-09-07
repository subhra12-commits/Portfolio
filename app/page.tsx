"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Briefcase, Mail, BrainCircuit, Database, Layers, ExternalLink, ChevronRight } from "lucide-react";

// --- Data (Unchanged content, updated theme colors) ---
const SKILLS = {
  "AI & Machine Learning": ["BERT", "RAG", "FAISS", "Sentence Transformers", "Scikit-learn", "Gemini AI", "NLP"],
  "Backend & Frameworks": ["Python", "FastAPI", "Flask", "Streamlit", "Pandas", "NumPy"],
  "MLOps & Infrastructure": ["Docker", "MLflow", "DVC", "Git", "GitHub"]
};

const PROJECTS = [
  {
    title: "Permind AI",
    role: "AI/ML Developer",
    description: "An intelligent interview preparation platform using RAG and semantic search. Retrieves relevant interview knowledge using FAISS and generates high-quality, AI-assisted responses via the Gemini API.",
    tech: ["Python", "FastAPI", "Streamlit", "FAISS", "Gemini AI"],
    icon: <BrainCircuit size={24} />,
    link: "https://github.com/subhra12-commits/permind-ai",
    color: "from-[#E76F2E]/20 to-[#C65D3A]/20"
  },
  {
    title: "AI Resume Screener",
    role: "Machine Learning Engineer",
    description: "An end-to-end NLP pipeline that automates candidate filtering. Parses resumes and ranks them against job descriptions using BERT sentence embeddings and cosine similarity, fully containerized.",
    tech: ["BERT", "Flask", "MLflow", "Docker", "NLP"],
    icon: <Layers size={24} />,
    link: "https://github.com/subhra12-commits/resume-screener",
    color: "from-[#C65D3A]/20 to-[#E76F2E]/10"
  },
  {
    title: "Customer Churn Prediction",
    role: "Data Scientist",
    description: "A complete machine learning pipeline predicting customer churn based on usage data. Built with a tuned Random Forest classifier and integrated with MLflow for tracking and a Flask web dashboard.",
    tech: ["Scikit-learn", "Flask", "MLflow", "Docker", "Pandas"],
    icon: <Database size={24} />,
    link: "https://github.com/subhra12-commits/customer-churn-prediction",
    color: "from-[#E76F2E]/20 to-[#C65D3A]/30"
  }
];

// --- Types ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- Interactive Components ---

const SpotlightCard = ({ children, className = "" }: CardProps) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-[#2B2118]/10 dark:border-[#FFF8F0]/10 bg-[#FFFDF9] dark:bg-[#2B2118] transition-shadow hover:shadow-xl dark:hover:shadow-[#E76F2E]/5 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(231, 111, 46, 0.08), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

const TiltCard = ({ children, className = "" }: CardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] dark:bg-[#1A140E] text-[#2B2118] dark:text-[#FFF8F0] selection:bg-[#E76F2E]/30 relative overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(231,111,46,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2B21180a_1px,transparent_1px),linear-gradient(to_bottom,#2B21180a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Pill Navigation */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl"
      >
        <div className="px-6 h-14 flex items-center justify-between rounded-full border border-[#2B2118]/10 dark:border-[#FFF8F0]/10 backdrop-blur-xl bg-[#FFFDF9]/70 dark:bg-[#2B2118]/70 shadow-2xl shadow-black/5">
          <span className="text-xs font-black tracking-tighter uppercase">
            Subhradeep <span className="text-[#E76F2E]">Saha</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-[11px] font-bold uppercase tracking-widest text-[#2B2118]/60 dark:text-[#FFF8F0]/60 hover:text-[#E76F2E] transition-colors">Projects</a>
            <a href="/resume.pdf" target="_blank" className="bg-[#2B2118] dark:bg-[#FFF8F0] text-white dark:text-[#2B2118] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
              Resume
            </a>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-44 pb-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Intro Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 flex flex-col justify-center p-8 md:p-12 rounded-[2.5rem] bg-[#FFFDF9] dark:bg-[#2B2118]/40 border border-[#2B2118]/10 dark:border-[#FFF8F0]/10 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E76F2E] blur-2xl opacity-10 animate-pulse" />
                  <img src="/profile.jpg" alt="S. Saha" className="relative w-16 h-16 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-[#2B2118]/10 dark:border-[#FFF8F0]/20" />
                </div>
                <div>
                  <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full border border-[#C65D3A]/20 bg-[#C65D3A]/5 text-[#C65D3A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C65D3A] animate-pulse" />
                    Open for 2026 Roles
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-8">
                Building the <span className="text-[#E76F2E]">Intelligence</span> of tomorrow.
              </h1>
              
              <p className="text-lg md:text-xl text-[#2B2118]/60 dark:text-[#FFF8F0]/60 max-w-2xl leading-relaxed mb-10">
                AI/ML Engineer specializing in <span className="text-[#2B2118] dark:text-white font-medium">Neural Systems</span> and production-ready pipelines. I bridge the gap between complex research and scalable software.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="group flex items-center gap-2 bg-[#E76F2E] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-[#E76F2E]/20 active:scale-95">
                  View Work
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <div className="flex items-center gap-2">
                  {[
                    { icon: <Code2 size={20} />, link: "https://github.com/subhra12-commits" },
                    { icon: <Briefcase size={20} />, link: "https://www.linkedin.com/in/subhradeep-saha-51a3732a7/" },
                    { icon: <Mail size={20} />, link: "mailto:rosesaha2k@gmail.com" }
                  ].map((social, i) => (
                    <a key={i} href={social.link} target="_blank" rel="noreferrer" className="p-4 rounded-2xl border border-[#2B2118]/10 dark:border-[#FFF8F0]/10 text-[#2B2118]/50 dark:text-[#FFF8F0]/50 hover:text-[#E76F2E] dark:hover:text-[#E76F2E] hover:bg-[#E76F2E]/5 transition-all">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Skills Bento Item */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 grid grid-cols-1 gap-6"
            >
              <div className="p-8 rounded-[2.5rem] bg-[#E76F2E] dark:bg-[#C65D3A] text-white flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <BrainCircuit size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Core Focus</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    LLMs, RAG Architectures, and Automated NLP Pipelines.
                  </p>
                </div>
                <div className="mt-8 flex gap-2 overflow-hidden relative z-10">
                   <div className="flex gap-2 animate-marquee whitespace-nowrap">
                      {["Python", "FastAPI", "Docker", "PyTorch"].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold">{tag}</span>
                      ))}
                   </div>
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] border border-[#2B2118]/10 dark:border-[#FFF8F0]/10 bg-[#FFFDF9] dark:bg-[#2B2118]/40 backdrop-blur-sm flex items-center justify-between group cursor-default">
                 <div>
                    <p className="text-[#2B2118]/40 dark:text-[#FFF8F0]/40 text-[10px] font-black uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold">India / Remote</p>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-[#E76F2E]/5 dark:bg-[#FFF8F0]/5 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <ChevronRight className="text-[#E76F2E]" />
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Bento Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#2B2118]/30 dark:text-[#FFF8F0]/30 mb-4">Stack & Tools</h2>
              <div className="h-1 w-12 bg-[#E76F2E] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(SKILLS).map(([category, items], i) => (
                <SpotlightCard key={category} className="p-8 h-full">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E76F2E]/10 flex items-center justify-center text-[#E76F2E]">
                      {i === 0 ? <BrainCircuit size={20}/> : i === 1 ? <Code2 size={20}/> : <Layers size={20}/>}
                    </div>
                    <h4 className="font-bold text-[#2B2118] dark:text-[#FFF8F0]">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="px-3 py-1.5 rounded-xl bg-[#2B2118]/5 dark:bg-[#FFF8F0]/5 border border-[#2B2118]/5 dark:border-[#FFF8F0]/5 text-[11px] font-semibold text-[#2B2118]/60 dark:text-[#FFF8F0]/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-16 px-4">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-2">Featured Projects</h2>
                <p className="text-[#2B2118]/50 dark:text-[#FFF8F0]/50">Engineering production-grade ML solutions.</p>
              </div>
              <div className="hidden md:block text-[10px] font-black uppercase tracking-widest text-[#2B2118]/30 dark:text-[#FFF8F0]/30">
                01 — 03 / Selected Work
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, idx) => (
                <TiltCard key={idx} className="h-full">
                  <SpotlightCard className="h-full group flex flex-col p-8 border border-[#2B2118]/10 dark:border-[#FFF8F0]/10 transition-all hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-[#2B2118] dark:text-[#FFF8F0]`}>
                        {project.icon}
                      </div>
                      <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-[#E76F2E]/10 transition-colors">
                        <ExternalLink size={18} className="text-[#2B2118]/30 dark:text-[#FFF8F0]/30 group-hover:text-[#E76F2E]" />
                      </a>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#E76F2E] transition-colors">{project.title}</h3>
                      <p className="text-[10px] font-black text-[#C65D3A] mb-4 uppercase tracking-[0.2em]">{project.role}</p>
                      <p className="text-sm text-[#2B2118]/60 dark:text-[#FFF8F0]/60 leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[9px] px-2 py-1 rounded-md bg-[#2B2118]/5 dark:bg-[#FFF8F0]/5 text-[#2B2118]/40 dark:text-[#FFF8F0]/40 font-bold uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 mt-20 border-t border-[#2B2118]/10 dark:border-[#FFF8F0]/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold mb-2 text-[#2B2118] dark:text-[#FFF8F0]">Subhradeep Saha</p>
              <p className="text-xs text-[#2B2118]/40 dark:text-[#FFF8F0]/40 uppercase tracking-widest font-medium">Available for Collaboration 2026</p>
            </div>
            
            <div className="flex gap-8">
              {['GitHub', 'LinkedIn', 'Email'].map((social) => (
                <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-[#2B2118]/30 dark:text-[#FFF8F0]/30 hover:text-[#E76F2E] transition-colors">
                  {social}
                </a>
              ))}
            </div>

            <p className="text-[10px] text-[#2B2118]/30 dark:text-[#FFF8F0]/30 font-mono">
              &copy; 2026 / DESIGNED_FOR_SCALE
            </p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}