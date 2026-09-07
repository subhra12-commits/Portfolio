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
    link: "https://github.com/subhra12-commits/resume-screener" // Update with actual URL if different
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
    <main className="min-h-screen bg-white dark:bg-[#030303] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl bg-white/70 dark:bg-[#030303]/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-bold tracking-tighter uppercase">S. Saha</span>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Projects
            </a>
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-xs font-bold hover:opacity-90 transition-opacity">
  Resume
</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-8 relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
              <img src="/profile.jpg" alt="Subhradeep Saha" className="w-full h-full object-cover" />
            </div>

            <span className="px-3 py-1 text-[11px] font-medium tracking-wider uppercase rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
              Available for 2026 Roles
            </span>

            <h1 className="mt-8 text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] max-w-4xl">
              Subhradeep <br />
              <span className="text-zinc-400 dark:text-zinc-600">Saha</span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-light">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">AI/ML Engineer & Systems Developer.</span> Building production-ready machine learning pipelines and AI-driven applications. Transitioning complex models into deployed, interactive software.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 items-center">
              <a href="#projects" className="group flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold transition-all hover:scale-[1.02]">
                Explore Projects
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-4 px-4">
<a href="https://github.com/subhra12-commits" target="_blank" rel="noreferrer" title="GitHub" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
  <Code2 size={22} />
</a>
<a href="https://www.linkedin.com/in/subhradeep-saha-51a3732a7/" target="_blank" rel="noreferrer" title="LinkedIn" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
  <Briefcase size={22} />
</a>
<a href="mailto:rosesaha2k@gmail.com" title="Email" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
  <Mail size={22} />
</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12">Technical Stack</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-lg font-bold mb-6">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-4 text-zinc-500">Selected work in artificial intelligence and systems development.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noreferrer" className="group block p-8 rounded-[2.5rem] bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500">
                    {project.icon}
                  </div>
                  <ExternalLink className="text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" size={20} />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="text-sm text-indigo-500 font-mono mt-2 mb-4 uppercase tracking-tighter">{project.role}</p>
                
                <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700 font-mono italic">
                      #{t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© 2026 Subhradeep Saha. Built with Next.js.</p>
      </footer>

    </main>
  );
}