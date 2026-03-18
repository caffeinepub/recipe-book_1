import React from "react";

export function VegIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vegetarian"
      role="img"
    >
      <rect
        x="1"
        y="1"
        width="16"
        height="16"
        rx="2"
        stroke="#00A550"
        strokeWidth="2"
        fill="white"
      />
      <circle cx="9" cy="9" r="5" fill="#00A550" />
    </svg>
  );
}

export function NonVegIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Non-Vegetarian"
      role="img"
    >
      <rect
        x="1"
        y="1"
        width="16"
        height="16"
        rx="2"
        stroke="#963B21"
        strokeWidth="2"
        fill="white"
      />
      <polygon points="9,4 15,14 3,14" fill="#963B21" />
    </svg>
  );
}

export function FssaiIcon({
  isVeg,
  size = 18,
}: { isVeg: boolean; size?: number }) {
  return isVeg ? <VegIcon size={size} /> : <NonVegIcon size={size} />;
}
