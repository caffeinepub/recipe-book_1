/**
 * Official Indian FSSAI food labeling icons.
 * Veg: Green square with a green filled circle.
 * Non-veg: Brown/maroon square with a brown filled triangle (downward).
 */

export function VegIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vegetarian"
      role="img"
    >
      {/* Green square border */}
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="3"
        ry="3"
        stroke="#1a7a1a"
        strokeWidth="2.2"
        fill="white"
      />
      {/* Green filled circle */}
      <circle cx="12" cy="12" r="6" fill="#1a7a1a" />
    </svg>
  );
}

export function NonVegIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Non-Vegetarian"
      role="img"
    >
      {/* Brown square border */}
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="3"
        ry="3"
        stroke="#8B1A1A"
        strokeWidth="2.2"
        fill="white"
      />
      {/* Brown filled downward triangle */}
      <polygon points="12,17.5 5.5,7 18.5,7" fill="#8B1A1A" />
    </svg>
  );
}

/**
 * Strips the leading veg/non-veg emoji (🟢 or 🔴) from a recipe title.
 */
export function stripVegEmoji(title: string): string {
  return title.replace(/^[🟢🔴]\s*/u, "");
}

/**
 * Returns "veg" | "nonveg" | null based on leading emoji in the title.
 */
export function getVegType(title: string): "veg" | "nonveg" | null {
  if (title.startsWith("🟢")) return "veg";
  if (title.startsWith("🔴")) return "nonveg";
  return null;
}
