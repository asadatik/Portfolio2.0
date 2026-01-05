"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Briefcase, Sparkles } from "lucide-react"
import Link from "next/link"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function BentoHighlights() {
  const featuredProject = projects.find((p) => p.featured)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, y: -4 }}
        className="lg:col-span-2 rounded-2xl glass border-glow p-6 overflow-hidden relative group cursor-pointer transition-all"
      >
        <Link href={`/projects/${featuredProject?.slug}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/5 transition-opacity"
          />
          <div className="relative z-10">
            <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Featured Project</span>
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {featuredProject?.title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{featuredProject?.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {featuredProject?.techStack.frontend.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-background text-primary border border-primary/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, y: -4 }}
        className="rounded-2xl glass border-glow p-6 transition-all group"
      >
        <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2 mb-3">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <Briefcase className="w-5 h-5 text-primary glow" />
          </motion.div>
          <span className="text-sm font-medium text-primary">Experience</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-foreground mb-2"
        >
          {profile.yearsOfExperience}+
        </motion.div>
        <p className="text-muted-foreground leading-relaxed">Years building production-ready web applications</p>
      </motion.div>

      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, y: -4 }}
        className="rounded-2xl glass border-glow p-6 transition-all"
      >
        <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2 mb-3">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Code2 className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="text-sm font-medium text-primary">What I Do</span>
        </motion.div>
        <h4 className="text-xl font-bold text-foreground mb-2">Full-stack Development</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Frontend, backend, databases, and everything in between
        </p>
      </motion.div>

      <motion.div
        variants={item}
        whileHover={{ scale: 1.02, y: -4 }}
        className="lg:col-span-2 rounded-2xl glass border-glow p-6 transition-all"
      >
        <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2 mb-3">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}>
            <Zap className="w-5 h-5 text-primary glow" />
          </motion.div>
          <span className="text-sm font-medium text-primary">Currently Working On</span>
        </motion.div>
        <h4 className="text-xl font-bold text-foreground mb-3">{profile.currentlyWorkingOn}</h4>
        <div className="flex flex-wrap gap-2">
          {skills.frontend.slice(0, 5).map((tech, i) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ delay: i * 0.05 }}
              className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-background text-primary border border-primary/30 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
