"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { animationVariants } from "./animations";
import {
  BackIcon,
  LogoIcon,
  ProgressBarIcon,
  GraphIcon,
  NextIcon,
} from "./svgs";

export default function Home() {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    setCurrentAnimation(Math.floor(Math.random() * animationVariants.length));
  }, []);

  const currentVariant = animationVariants[currentAnimation];

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #B39FFE 0%, #725EBD 100%)",
        padding: "32px 24px",
        gap: "32px",
        minHeight: "100dvh",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAnimation}
          initial={currentVariant.initial}
          animate={currentVariant.in}
          transition={currentVariant.transition}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "480px",
            gap: "32px",
          }}
        >
          {/* Header */}
          <motion.div
            initial={currentVariant.initial}
            animate={currentVariant.in}
            transition={{
              ...currentVariant.transition,
              delay: 0.1,
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "480px",
              width: "100%",
            }}
          >
            <button className="cursor-pointer">
              <BackIcon />
            </button>

            <div className="w-full flex-auto flex justify-center items-center">
              <LogoIcon />
            </div>
          </motion.div>

          <motion.div
            initial={currentVariant.initial}
            animate={currentVariant.in}
            transition={{
              ...currentVariant.transition,
              delay: 0.2,
            }}
          >
            <ProgressBarIcon />
          </motion.div>

          <motion.p
            initial={currentVariant.initial}
            animate={currentVariant.in}
            transition={{
              ...currentVariant.transition,
              delay: 0.3,
            }}
            style={{
              color: "#FFF",
              fontFamily: "Syne",
              fontSize: 32,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "36px",
              letterSpacing: -0.96,
              maxWidth: "480px",
            }}
          >
            Perfect! With your prescribed program, we will help you reach your
            goal weight!
          </motion.p>

          <motion.p
            initial={currentVariant.initial}
            animate={currentVariant.in}
            transition={{
              ...currentVariant.transition,
              delay: 0.4,
            }}
            style={{
              color: "#FFF",
              fontFamily: "Syne",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              maxWidth: "480px",
              opacity: 0.7,
            }}
          >
            Don&apos;t worry if you&apos;re unsure about how to answer a
            question. We&apos;ll go over everything with you.
          </motion.p>

          <motion.div
            initial={currentVariant.initial}
            animate={currentVariant.in}
            transition={{
              ...currentVariant.transition,
              delay: 0.5,
            }}
            style={{
              width: "100%",
            }}
          >
            <GraphIcon />
          </motion.div>

          <motion.div
            initial={currentVariant.initial}
            animate={currentVariant.in}
            transition={{
              ...currentVariant.transition,
              delay: 0.6,
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                fontFamily: "Syne",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                opacity: 0.7,
              }}
            >
              On average, GLP-1 patients lost
            </p>
            <p
              style={{
                color: "#FFF",
                fontFamily: "Syne",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              18% of their body weight
            </p>
          </motion.div>

          <motion.button
            initial={currentVariant.initial}
            animate={currentVariant.in}
            transition={{
              ...currentVariant.transition,
              delay: 0.7,
            }}
            style={{
              display: "flex",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "white",
              maxWidth: "480px",
              width: "100%",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Next
            <NextIcon />
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
