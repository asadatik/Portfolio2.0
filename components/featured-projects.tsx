// components/home/featured-projects.tsx
"use client"

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { projects, type Project } from "@/data/projects"
import { PremiumButton } from "./premium-button"

export function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Get featured projects
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  if (featuredProjects.length === 0) {
    return null
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
    setIsAutoPlay(false)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlay || isHovered) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, isHovered, featuredProjects.length])

  // Resume autoplay after 8 seconds of inactivity
  useEffect(() => {
    if (isAutoPlay) return

    const timeout = setTimeout(() => {
      setIsAutoPlay(true)
    }, 8000)

    return () => clearTimeout(timeout)
  }, [isAutoPlay])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const currentProject = featuredProjects[currentIndex]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* ============================================
          ANIMATED BACKGROUND ELEMENTS
          ============================================ */}

      {/* Top right glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Bottom left glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/15 to-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Parallax moving gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(6, 249, 241, 0.1), rgba(147, 51, 234, 0.1), transparent 70%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(6, 249, 241, 0.1), rgba(147, 51, 234, 0.1), transparent 70%)",
            "radial-gradient(circle at 80% 70%, rgba(6, 249, 241, 0.1), rgba(147, 51, 234, 0.1), transparent 70%)",
            "radial-gradient(circle at 20% 30%, rgba(6, 249, 241, 0.1), rgba(147, 51, 234, 0.1), transparent 70%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================
            SECTION HEADER
            ============================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-cyan-400">Featured Work</span>
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Latest <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated selection of my recent work building full-stack applications, SaaS platforms, and interactive web experiences
          </p>
        </motion.div>

        {/* ============================================
            3D CAROUSEL CONTAINER
            ============================================ */}

        <div
          className="relative max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
            mouseX.set(0)
            mouseY.set(0)
          }}
        >
          {/* Background cards stack effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[2, 1].map((offset) => (
              <motion.div
                key={offset}
                className="absolute w-[90%] h-[95%] rounded-2xl bg-gradient-to-br from-cyan-900/40 via-blue-400 to-cyan-900/40 backdrop-blur-sm border border-cyan-500/10"
                style={{
                  zIndex: -offset,
                  transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.04})`,
                }}
                animate={{
                  opacity: isHovered ? [0.4, 0.5, 0.4] : [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: offset * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main carousel content */}
          <div className="relative h-[650px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.5 },
                }}
                style={{
                  rotateX: isHovered ? rotateX : 0,
                  rotateY: isHovered ? rotateY : 0,
                  transformStyle: "preserve-3d",
                }}
                className="w-full max-w-3xl px-4 md:px-0"
              >
                {/* Project Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden relative group h-full"
                >
                  {/* ============================================
                      ROTATING GRADIENT BORDER
                      ============================================ */}

                  {/* Outer glow layer */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10"
                    animate={{
                      opacity: isHovered ? [0.6, 0.9, 0.6] : [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Border container */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl p-px pointer-events-none"
                    animate={{
                      opacity: isHovered ? [0.8, 1, 0.8] : [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Soft glow behind border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      style={{
                        background:
                          "conic-gradient(from 0deg, rgba(6, 249, 241, 0.6), rgba(59, 130, 246, 0.6), rgba(6, 249, 241, 0.6))",
                        opacity: 0.3,
                      }}
                    />

                    {/* Actual border gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      style={{
                        background:
                          "conic-gradient(from 0deg, rgba(6, 249, 241, 0.6), rgba(59, 130, 246, 0.6), rgba(6, 249, 241, 0.6))",
                        borderRadius: "16px",
                      }}
                    />
                  </motion.div>

                  {/* Inner card background */}
                  <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-cyan-900/95 to-slate-800/90 backdrop-blur-xl pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Image section */}
                    <div className="relative h-80 overflow-hidden group/image">
                      {/* Placeholder gradient or image */}
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Image with fallback - FIXED: using thumbnail instead of image */}
                        {currentProject.thumbnail && (
                          <motion.img
                            src={currentProject.thumbnail}
                            alt={currentProject.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                      </motion.div>

                      {/* Gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover/image:opacity-100"
                        style={{
                          background:
                            "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                          backgroundSize: "200% 200%",
                        }}
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>

                    {/* Content section */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      {/* Top content */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                      >
                        {/* Type badge */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30">
                            {currentProject.type}
                          </span>
                          {currentProject.featured && (
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30"
                            >
                              Featured
                            </motion.span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                          {currentProject.title}
                        </h3>

                        {/* Description - FIXED: using description or tagline */}
                        <p className="text-gray-300 text-base leading-relaxed">
                          {currentProject.description || currentProject.tagline}
                        </p>

                        {/* Tech stack */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          variants={{
                            hidden: { opacity: 0 },
                            show: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.05,
                              },
                            },
                          }}
                          initial="hidden"
                          animate="show"
                        >
                          {currentProject.techStack.frontend &&
                            currentProject.techStack.frontend.slice(0, 2).map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 font-medium"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          {currentProject.techStack.backend &&
                            currentProject.techStack.backend.slice(0, 1).map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (i + 2) * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 font-medium"
                              >
                                {tech}
                              </motion.span>
                            ))}
                        </motion.div>
                      </motion.div>

                      {/* Links section - FIXED: using links.demo and links.github */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 pt-6 border-t border-cyan-500/20"
                      >
                        <Link
                          href={`/projects/${currentProject.slug}`}
                          className="text-sm text-cyan-400 flex items-center gap-2 hover:text-cyan-300 transition-colors font-medium group/link"
                        >
                          View Case Study
                          <motion.div whileHover={{ x: 4 }} className="group-hover/link:text-cyan-300">
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Link>

                        {currentProject.links.demo && (
                          <motion.a
                            href={currentProject.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
                            title="View Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}

                        {currentProject.links.github && (
                          <motion.a
                            href={currentProject.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 12 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
                            title="View GitHub Repository"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* ============================================
                NAVIGATION ARROWS
                ============================================ */}

            <motion.button
              whileHover={{ scale: 1.12, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/20 backdrop-blur-md border border-cyan-500/40 hover:border-cyan-500/60 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.12, x: 4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/20 backdrop-blur-md border border-cyan-500/40 hover:border-cyan-500/60 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* ============================================
              DOT NAVIGATION
              ============================================ */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-1"
              >
                <motion.div
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  animate={index === currentIndex ? { scale: 1 } : { scale: 0.8 }}
                />

                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full border-2 border-cyan-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

       {/*  */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-16 md:mt-20"
        >
                    <Link href="/projects">
                                    <PremiumButton
                                        text="More Projects"
                                        icon="→"
                                        variant="success"
                                        size="large"
                                     
                                    />
                                </Link>
        </motion.div>
      </div>
    </section>
  )
}