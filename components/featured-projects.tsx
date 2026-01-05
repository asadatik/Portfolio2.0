"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of my recent work building full-stack applications and platforms
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <motion.div
              key={project.slug}
              variants={item}
              whileHover={{ y: -8 }}
              className="group rounded-2xl glass border-glow overflow-hidden transition-all"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-48 bg-background overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.div
                    initial={{ color: "hsl(var(--primary))" }}
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className="text-xs font-medium mb-2 text-primary"
                  >
                    {project.type}
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{project.tagline}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {[...project.techStack.frontend.slice(0, 2), ...project.techStack.backend.slice(0, 1)].map(
                      (tech, i) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ delay: i * 0.05 }}
                          className="text-xs px-2 py-1 rounded bg-gradient-to-br from-primary/10 to-background text-primary border border-primary/30 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ),
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <motion.span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Case Study
                      <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.span>
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.2, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-cyan-500 text-background hover:shadow-lg hover:shadow-primary/30 glow-lg"
            >
              <Link href="/projects">
                View All Projects
                <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
