// src/components/MotionDiv.tsx
"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv = motion.div as React.FC<Props>;
export const MotionSection = motion.section as React.FC<Props>;
