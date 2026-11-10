"use client";

/*
 * Gooey Nav adapted from Rare UI:
 * https://github.com/swamimalode07/rare-ui
 *
 * Copyright (c) 2026 Swami Malode
 *
 * MIT + Commons Clause License Condition v1.0 + Attribution
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * Any project that ships this component must visibly credit Rare UI with a
 * link to https://rareui.com. The component may not be sold, sublicensed, or
 * redistributed by itself or in a bundle.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

const SPRING = { type: "spring", stiffness: 200, damping: 28, mass: 1 };
const NECK_BREAK = 0.22;
const NECK_HEIGHT = 100;
const ACTIVE_TRANSITION = "transition-colors duration-[400ms]";
const INACTIVE_TRANSITION = "transition-colors duration-0";
const BAR = "bg-white/10";
const BAR_TEXT = "text-white/10";

const SIZES = {
  xs: {
    label: "gap-1 px-2 py-1.5 text-[11px] leading-4 [&_svg]:size-[11px]",
    radius: 8,
    separation: 14,
  },
  sm: {
    label: "gap-1.5 px-3.5 py-2 text-xs leading-4 [&_svg]:size-3",
    radius: 10,
    separation: 16,
  },
  md: {
    label: "gap-2 px-5 py-2.5 text-sm leading-5 [&_svg]:size-3.5",
    radius: 12,
    separation: 20,
  },
  lg: {
    label: "gap-2.5 px-6 py-3 text-base leading-6 [&_svg]:size-4",
    radius: 14,
    separation: 24,
  },
};

function toItem(item) {
  return typeof item === "string" ? { label: item } : item;
}

function neckPath(gap, span) {
  if (!Number.isFinite(gap) || !Number.isFinite(span) || gap <= 0 || span <= 0) {
    return "";
  }

  const waist = NECK_HEIGHT * (1 - gap / (span * NECK_BREAK));
  if (waist <= 0) return "";

  const start = span - gap;
  const middle = start + gap / 2;
  return `M${start} 0 Q${middle} ${NECK_HEIGHT - waist} ${span} 0 L${span} ${NECK_HEIGHT} Q${middle} ${waist} ${start} ${NECK_HEIGHT} Z`;
}

function Segment({
  gap,
  span,
  hasSeam,
  leftFill,
  rightFill,
  reduced,
  radii,
  className,
  style,
  children,
}) {
  const marginLeft = useSpring(gap, SPRING);
  const gradientId = `gooey-neck-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    if (reduced) marginLeft.jump(gap);
    else marginLeft.set(gap);
  }, [gap, marginLeft, reduced]);

  const path = useTransform(marginLeft, (value) => neckPath(value, span));

  return (
    <motion.li
      data-slot="gooey-nav-segment"
      className={cn("relative", className)}
      style={{ ...style, marginLeft }}
      initial={false}
      animate={radii}
      transition={reduced ? { duration: 0 } : SPRING}
    >
      {hasSeam && (
        <svg
          aria-hidden="true"
          width={span}
          viewBox={`0 0 ${span} ${NECK_HEIGHT}`}
          preserveAspectRatio="none"
          className={cn(
            "pointer-events-none absolute top-0 right-full h-full",
            BAR_TEXT,
          )}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" x2="1">
              <stop offset="0" stopColor={leftFill} />
              <stop offset="1" stopColor={rightFill} />
            </linearGradient>
          </defs>
          <motion.path d={path} fill={`url(#${gradientId})`} />
        </svg>
      )}
      {children}
    </motion.li>
  );
}

function NavLabel({
  label,
  href,
  icon,
  isActive,
  size,
  activeLabelColor,
  onSelect,
}) {
  const className = cn(
    "flex cursor-pointer items-center whitespace-nowrap font-medium [&_svg]:shrink-0 focus-visible:z-10 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    isActive ? ACTIVE_TRANSITION : INACTIVE_TRANSITION,
    SIZES[size].label,
    !isActive && "text-slate-400 hover:text-white",
  );
  const sharedProps = {
    "data-slot": "gooey-nav-item",
    "data-active": isActive,
    "aria-current": isActive ? (href ? "location" : true) : undefined,
    className,
    style: isActive ? { color: activeLabelColor } : undefined,
    onClick: onSelect,
  };

  return href ? (
    <Link href={href} {...sharedProps}>
      {icon}
      {label}
    </Link>
  ) : (
    <button type="button" {...sharedProps}>
      {icon}
      {label}
    </button>
  );
}

export function GooeyNav({
  items,
  value,
  defaultValue = 0,
  onChange,
  size = "md",
  activeColor = "#8b9cfb",
  activeLabelColor = "#0b1220",
  separation,
  radius,
  className,
  ...props
}) {
  const pathname = usePathname();
  const reduced = useReducedMotion() ?? false;
  const routeIndex = items.findIndex(
    (item) => toItem(item).href === pathname,
  );
  const [uncontrolled, setUncontrolled] = useState(() =>
    routeIndex === -1 ? defaultValue : routeIndex,
  );
  const [seenRoute, setSeenRoute] = useState(routeIndex);

  if (routeIndex !== seenRoute) {
    setSeenRoute(routeIndex);
    if (routeIndex !== -1 && value === undefined) {
      setUncontrolled(routeIndex);
    }
  }

  const active = value ?? uncontrolled;
  const span = separation ?? SIZES[size].separation;
  const corner = radius ?? SIZES[size].radius;
  const isSeamOpen = (seam) =>
    seam === 0 ||
    seam === items.length ||
    seam - 1 === active ||
    seam === active;
  const fill = (index) => (index === active ? activeColor : "currentColor");

  return (
    <nav
      data-slot="gooey-nav"
      aria-label="Portfolio sections"
      className={cn("inline-block", className)}
      {...props}
    >
      <ul className="flex items-center">
        {items.map((item, index) => {
          const navItem = toItem(item);
          const isActive = index === active;

          return (
            <Segment
              key={`${index}-${navItem.label}`}
              gap={
                index === 0 ? 0 : isSeamOpen(index) ? span : -1
              }
              span={span}
              hasSeam={index > 0}
              leftFill={fill(index - 1)}
              rightFill={fill(index)}
              reduced={reduced}
              radii={{
                borderTopLeftRadius: isSeamOpen(index) ? corner : 0,
                borderBottomLeftRadius: isSeamOpen(index) ? corner : 0,
                borderTopRightRadius: isSeamOpen(index + 1) ? corner : 0,
                borderBottomRightRadius: isSeamOpen(index + 1) ? corner : 0,
              }}
              className={cn(
                BAR,
                isActive ? ACTIVE_TRANSITION : INACTIVE_TRANSITION,
              )}
              style={{ backgroundColor: isActive ? activeColor : undefined }}
            >
              <NavLabel
                {...navItem}
                isActive={isActive}
                size={size}
                activeLabelColor={activeLabelColor}
                onSelect={() => {
                  if (value === undefined) setUncontrolled(index);
                  onChange?.(index);
                }}
              />
            </Segment>
          );
        })}
      </ul>
    </nav>
  );
}
