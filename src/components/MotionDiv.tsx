"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv = motion.div as React.FC<Props>;
export const MotionSection = motion.section as React.FC<Props>;
export const MotionSpan = motion.span as React.FC<Props>;
export const MotionButton = motion.button as React.FC<Props>;
export const MotionH1 = motion.h1 as React.FC<Props>;
export const MotionH2 = motion.h2 as React.FC<Props>;
export const MotionH3 = motion.h3 as React.FC<Props>;
export const MotionH4 = motion.h4 as React.FC<Props>;
export const MotionH5 = motion.h5 as React.FC<Props>;
export const MotionH6 = motion.h6 as React.FC<Props>;
export const MotionP = motion.p as React.FC<Props>;
export const MotionUl = motion.ul as React.FC<Props>;
export const MotionLi = motion.li as React.FC<Props>;
export const MotionA = motion.a as React.FC<Props>;
export const MotionImg = motion.img as React.FC<Props>;
export const MotionSvg = motion.svg as React.FC<Props>;
export const MotionPath = motion.path as React.FC<Props>;
export const MotionG = motion.g as React.FC<Props>;
export const MotionCircle = motion.circle as React.FC<Props>;
export const MotionRect = motion.rect as React.FC<Props>;
export const MotionPolygon = motion.polygon as React.FC<Props>;
export const MotionLine = motion.line as React.FC<Props>;
export const MotionDefs = motion.defs as React.FC<Props>;
export const MotionUse = motion.use as React.FC<Props>;
export const MotionSymbol = motion.symbol as React.FC<Props>;
export const MotionText = motion.text as React.FC<Props>;
export const MotionTSpan = motion.tspan as React.FC<Props>;