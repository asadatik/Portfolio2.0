"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"
import { Hero3DVisual } from "@/components/hero-3d-visual"
import { BentoHighlights } from "@/components/bento-highlights"
import { FeaturedProjects } from "@/components/featured-projects"
import { useRef } from "react"
import { HeroSection } from "@/components/home/hero-section"

export default function HomePage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref}>

      {/* Hero Section */}
       <HeroSection></HeroSection>  

      {/* Bento Highlights */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What I Bring</h2>
            <p className="text-muted-foreground">A quick overview of my expertise and current focus</p>
          </motion.div>
          <BentoHighlights />
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you need a full-stack
              developer or want to collaborate on something exciting, let's connect.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-cyan-500 text-background hover:shadow-lg hover:shadow-primary/30 glow-lg"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent border-glow"
                >
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
