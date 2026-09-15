"use client";

import { motion } from "framer-motion";

/** Enter animation for every route — pairs with the page wipe without breaking sticky/transform contexts. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
