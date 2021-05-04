import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Fade({ children, isActive = false }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}>
          {children}
        </motion.div>)}
    </AnimatePresence >
  )
}