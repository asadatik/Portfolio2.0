"use client"

import Link from "next/link"
import { profile } from "@/data/profile"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: profile.social.github, label: "GitHub" },
  { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
  // { icon: Twitter, href: profile.social.twitter, label: "Twitter" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center font-bold text-background">
                {profile.initials}
              </div>
              <div className="font-semibold text-foreground">{profile.name}</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-background border border-primary/30 flex items-center justify-center text-primary hover:glow transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-float" />
                </motion.a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
