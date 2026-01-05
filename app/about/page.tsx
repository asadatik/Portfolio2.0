"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Briefcase } from "lucide-react"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"
import { experience } from "@/data/experience"

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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-linear-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">About Me</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>{profile.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{profile.yearsOfExperience}+ years experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-primary rounded mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Databases & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
            <div className="h-1 w-20 bg-primary rounded mb-12" />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-primary font-medium">{exp.company}</span>
                        <span className="text-xs px-2 py-1 rounded bg-card text-muted-foreground border border-border">
                          {exp.type}
                        </span>
                        <span className="text-muted-foreground text-sm">{exp.dateRange}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
