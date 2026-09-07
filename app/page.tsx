"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Briefcase, Mail, BrainCircuit, Database, Layers, ExternalLink } from "lucide-react";

// --- Data ---
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
    icon: <BrainCircuit size={22} />,
    link: "https://github.com/subhra12-commits/permind-ai"
  },
  {
    title: "AI Resume Screener",
    role: "Machine Learning Engineer",
    description: "An end-to-end NLP pipeline that automates candidate filtering. Parses resumes and ranks them against job descriptions using BERT sentence embeddings and cosine similarity, fully containerized.",
    tech: ["BERT", "Flask", "MLflow", "Docker", "NLP"],
    icon: <Layers size={22} />,
    link: "https://github.com/subhra12-commits/resume-screener"
  },
  {
    title: "Customer Churn Prediction",
    role: "Data Scientist",
    description: "A complete machine learning pipeline predicting customer churn based on usage data. Built with a tuned Random Forest classifier and integrated with MLflow for tracking and a Flask web dashboard.",
    tech: ["Scikit-learn", "Flask", "MLflow", "Docker", "Pandas"],
    icon: <Database size={22} />,
    link: "https://github.com/subhra12-commits/customer-churn-prediction"
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-50 selection:bg-indigo-500/30 relative">
      
      {/* Modern Tech Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Pill Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl rounded-full border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md bg-white/50 dark:bg-[#0a0a0a]/50 shadow-sm"
      >
        <div className="px-6 h-14 flex items-center justify-between">
          {/* Fixed Name: Now bright white in dark mode */}
          <span className="text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
            S. Saha
          </span>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform duration-300">
              Resume
            </a>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6 flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col items-center">
              
              <div className="mb-8 relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800 ring-offset-4 ring-offset-white dark:ring-offset-[#050505]">
                <img src="/profile.jpg" alt="Subhradeep Saha" className="w-full h-full object-cover" />
              </div>

              <span className="px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for 2026 Roles
              </span>

              {/* Fixed Heading: High contrast, clean layout */}
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Subhradeep <span className="text-zinc-400 dark:text-zinc-500">Saha</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-light mb-10">
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">AI/ML Engineer & Systems Developer.</span> Building production-ready machine learning pipelines and transitioning complex models into deployed software.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a href="#projects" className="group flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105">
                  Explore Projects
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-[#0a0a0a]/50">
                  <a href="https://github.com/subhra12-commits" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Code2 size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/subhradeep-saha-51a3732a7/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Briefcase size={20} />
                  </a>
                  <a href="mailto:rosesaha2k@gmail.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 border-y border-zinc-200/50 dark:border-zinc-900/50 bg-zinc-50/50 dark:bg-[#0a0a0a]/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-10 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {Object.entries(SKILLS).map(([category, items], i) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-100">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="px-3 py-1.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Work</h2>
              <p className="text-zinc-500 dark:text-zinc-400">Deployed machine learning pipelines and applications.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, idx) => (
                <motion.a 
                  key={idx} 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors h-full relative overflow-hidden"
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-zinc-400 group-hover:text-indigo-500 transition-colors">
                        {project.icon}
                      </div>
                      <ExternalLink className="text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" size={16} />
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                    <p className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 font-mono mb-4 uppercase tracking-widest">{project.role}</p>
                    
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-900 text-center text-zinc-400 text-xs">
          <p>© 2026 Subhradeep Saha. Built with Next.js.</p>
        </footer>
      </div>

    </main>
  );
}