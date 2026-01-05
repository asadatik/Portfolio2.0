// "use client"

// import React from "react"
// import { motion, type HTMLMotionProps } from "framer-motion"
// import { cn } from "@/lib/utils"

// interface AnimatedCardProps
//   extends Omit<HTMLMotionProps<"div">, "ref"> {
//   children?: React.ReactNode
//   delay?: number
//   asChild?: boolean
// }

// export const AnimatedCard = React.forwardRef<
//   HTMLDivElement,
//   AnimatedCardProps
// >(
//   (
//     {
//       className,
//       delay = 0,
//       asChild = false,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const cardBaseClasses = cn(
//       "group relative rounded-2xl overflow-hidden transition-all duration-300",
//       "bg-gradient-to-br from-card/80 via-card to-background/80",
//       "backdrop-blur-md border border-primary/20",
//       "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20",
//       className
//     )

//     const cardInner = (
//       <>
//         {/* Animated glow background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         {/* Border glow animation */}
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

//         {/* Content */}
//         <div className="relative z-10 p-6">
//           {children}
//         </div>
//       </>
//     )

//     if (asChild) {
//       return (
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{
//             delay,
//             duration: 0.6,
//             ease: [0.33, 1, 0.68, 1],
//           }}
//           whileHover={{ y: -8 }}
//           className={cardBaseClasses}
//           {...props}
//         >
//           {cardInner}
//         </motion.div>
//       )
//     }

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{
//           delay,
//           duration: 0.6,
//           ease: [0.33, 1, 0.68, 1],
//         }}
//         whileHover={{ y: -8 }}
//       >
//         <div ref={ref} className={cardBaseClasses} {...props}>
//           {cardInner}
//         </div>
//       </motion.div>
//     )
//   }
// )

// AnimatedCard.displayName = "AnimatedCard"
