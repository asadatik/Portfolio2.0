"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Send, Check, Facebook } from "lucide-react"
import { profile } from "@/data/profile"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BrowserLoader } from "@/components/browser-loader"
import { PremiumButton } from "@/components/premium-button"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: profile.social.github,
    username: "asadatik",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: profile.social.linkedin,
    username: "in/asadujjaman-atik",
  },

  {
    name: "Facebook",
    icon: Facebook,
    href: profile.social.facebook,
    username: "codewithatik",
  },

]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setStatus("success")
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => {
      setStatus("idle")
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <BrowserLoader isVisible={status === "loading"} />

      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-background to-card animate-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Let's Work Together</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <motion.div
                      animate={{
                        boxShadow:
                          focusedField === "name"
                            ? "0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 10px rgba(34, 211, 238, 0.05)"
                            : "0 0 0px rgba(34, 211, 238, 0)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="rounded-md overflow-hidden"
                    >
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your name"
                        className="bg-card border-primary text-foreground placeholder:text-muted-foreground transition-all"
                      />
                    </motion.div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <motion.div
                      animate={{
                        boxShadow:
                          focusedField === "email"
                            ? "0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 10px rgba(34, 211, 238, 0.05)"
                            : "0 0 0px rgba(34, 211, 238, 0)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="rounded-md overflow-hidden"
                    >
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your@email.com"
                        className="bg-card border-primary text-foreground placeholder:text-muted-foreground transition-all"
                      />
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <motion.div
                      animate={{
                        boxShadow:
                          focusedField === "message"
                            ? "0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 10px rgba(34, 211, 238, 0.05)"
                            : "0 0 0px rgba(34, 211, 238, 0)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="rounded-md overflow-hidden"
                    >
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="bg-card border-primary text-foreground placeholder:text-muted-foreground transition-all resize-none"
                      />
                    </motion.div>
                  </div>


                   {/* Submit Button */}  
                  <div className="flex justify-center"  >
                         <PremiumButton
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    size="large"
                    variant={status === "success" ? "success" : "primary"}
                    className="flex items-center "
                  >
                    <Send className="w-5 h-5" />
                    {status === "idle" ? "Send Message" : status === "loading" ? "Sending..." : "Message Sent!"}
                  </PremiumButton>
                  </div>
                 



                  {/* Success message */}
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm text-green-500 text-center font-medium flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Thank you! I'll get back to you soon.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Direct Contact */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Direct Contact</h2>
                  <motion.a
                    href={`mailto:${profile.email}`}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass border-glow transition-all group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center glow"
                    >
                      <Mail className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email me at</div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {profile.email}
                      </div>
                    </div>
                  </motion.a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Connect on Social</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="flex items-center gap-4 p-4 rounded-xl glass border-glow transition-all group cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 12 }}
                          className="w-10 h-10 rounded-lg bg-background flex items-center justify-center border border-border group-hover:border-primary group-hover:glow transition-all"
                        >
                          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.div>
                        <div>
                          <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {social.name}
                          </div>
                          <div className="text-sm text-muted-foreground">{social.username}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-xl glass border-glow border-glow animate-glow-pulse"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">Availability</h3>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm currently{" "}
                      <motion.span
                        animate={{ color: ["hsl(var(--primary))", "hsl(var(--primary) / 0.8)", "hsl(var(--primary))"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="font-medium"
                      >
                        available for freelance projects
                      </motion.span>{" "}
                      and open to full-time opportunities. I typically respond within 24-48 hours.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
