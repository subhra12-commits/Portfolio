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
    icon: <BrainCircuit size={24} />,
    link: "https://github.com/subhra12-commits/permind-ai"
  },
  {
    title: "AI Resume Screener",
    role: "Machine Learning Engineer",
    description: "An end-to-end NLP pipeline that automates candidate filtering. Parses resumes and ranks them against job descriptions using BERT sentence embeddings and cosine similarity, fully containerized.",
    tech: ["BERT", "Flask", "MLflow", "Docker", "NLP"],
    icon: <Layers size={24} />,
    link: "https://github.com/subhra12-commits/resume-screener"
  },
  {
    title: "Customer Churn Prediction",
    role: "Data Scientist",
    description: "A complete machine learning pipeline predicting customer churn based on usage data. Built with a tuned Random Forest classifier and integrated with MLflow for tracking and a Flask web dashboard.",
    tech: ["Scikit-learn", "Flask", "MLflow", "Docker", "Pandas"],
    icon: <Database size={24} />,
    link: "https://github.com/subhra12-commits/customer-churn-prediction"
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30 overflow-hidden">
      
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 dark:bg-purple-500/10 blur-[100px]" 
        />
      </div>

      {/* Floating Pill Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl rounded-full border border-white/20 dark:border-zinc-800/50 backdrop-blur-xl bg-white/60 dark:bg-[#0a0a0a]/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
      >
        <div className="px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-bold tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">S. Saha</span>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-xs font-bold hover:scale-105 hover:shadow-lg transition-all duration-300">
              Resume
            </a>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-48 pb-32 px-6 flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center">
              
              {/* Floating Profile Picture */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8 relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-white dark:border-zinc-800 shadow-2xl shadow-indigo-500/20"
              >
                <img src="/profile.jpg" alt="Subhradeep Saha" className="w-full h-full object-cover" />
              </motion.div>

              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.2 }}
                className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 backdrop-blur-md"
              >
                Available for 2026 Roles
              </motion.span>

              <h1 className="mt-8 text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9]">
                Subhradeep <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-700"> Saha</span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-light">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">AI/ML Engineer & Systems Developer.</span> Building production-ready machine learning pipelines and transitioning complex models into deployed, interactive software.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
                <a href="#projects" className="group flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  Explore Projects
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="flex items-center gap-5 px-6 py-4 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                  <a href="https://github.com/subhra12-commits" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all">
                    <Code2 size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/subhradeep-saha-51a3732a7/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all">
                    <Briefcase size={24} />
                  </a>
                  <a href="mailto:rosesaha2k@gmail.com" className="text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Glassmorphism Pills */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12 text-center md:text-left">Technical Stack</h3>
            <div className="grid md:grid-cols-3 gap-12">
              {Object.entries(SKILLS).map(([category, items], i) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map(item => (
                      <span key={item} className="px-5 py-2.5 rounded-2xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 text-sm font-medium hover:scale-105 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Floating Cards */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-5xl font-extrabold tracking-tight">Featured Projects</h2>
              <p className="mt-6 text-lg text-zinc-500">Selected work in artificial intelligence and systems development.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.a 
                  key={idx} 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative block p-8 md:p-10 rounded-[2.5rem] bg-white/40 hover:bg-white/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-inner">
                      {project.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                      <ExternalLink className="text-zinc-900 dark:text-white" size={18} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h3>
                  <p className="text-sm font-bold text-indigo-500 dark:text-indigo-400 font-mono mb-6 uppercase tracking-widest">{project.role}</p>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-zinc-200/50 dark:border-zinc-800/50 text-center text-zinc-500 text-sm backdrop-blur-sm">
          <p>© 2026 Subhradeep Saha. Built with Next.js & Framer Motion.</p>
        </footer>
      </div>

    </main>
  );
}