export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://pixel-art-delta-smoky.vercel.app";

export const SITE = {
  name: "Pixel Art Converter",
  shortName: "PixelArt",
  tagline: "Turn images into pixel art",
  description:
    "Upload any photo and transform it into stunning grid-based designs with customizable shapes, colors, and export options. Free online pixel art maker.",
  url: "https://pixelart-website.vercel.app",
};

export const FEATURES = [
  {
    title: "Instant Conversion",
    description:
      "Transform any image into pixel art in seconds. Drop a photo and watch it come alive as a grid-based design.",
    icon: "transform" as const,
  },
  {
    title: "Unique Grid Shapes",
    description:
      "Choose from Square, Circle, Hexagon, Diamond, Triangle, or upload a Custom SVG shape.",
    icon: "shapes" as const,
    badges: ["Square", "Circle", "Hexagon", "Diamond", "Triangle", "Custom SVG"],
  },
  {
    title: "Color Modes & Palettes",
    description:
      "Full color, Posterized, Grayscale, or Black & White. Plus DMC thread and Perler bead palettes for crafters.",
    icon: "palette" as const,
  },
  {
    title: "Multi-Format Export",
    description:
      "Download your creation as PNG, SVG, PDF, JSON, CSV, or Markdown. Perfect for any workflow.",
    icon: "export" as const,
    badges: ["PNG", "SVG", "PDF", "JSON", "CSV", "Markdown"],
  },
  {
    title: "Share With Anyone",
    description:
      "Generate a shareable link and send it via WhatsApp, Twitter, email, or any platform.",
    icon: "share" as const,
  },
  {
    title: "Craft-Ready Guides",
    description:
      "Use your pixel art as patterns for cross-stitch, bead art, mosaics, and large-scale murals.",
    icon: "craft" as const,
  },
];

export const EXAMPLES = [
  {
    name: "Girl with a Pearl Earring",
    subtitle: "Vermeer, 1665",
    shape: "Circle",
    colorMode: "Full color",
    colors: 16,
    before: "/examples/pearl-earring.jpg",
    after: "/examples/pearl-earring-pixel.png",
  },
  {
    name: "Statue of Liberty",
    subtitle: "Iconic landmark",
    shape: "Square",
    colorMode: "Grayscale",
    colors: 16,
    before: "/examples/statue-of-liberty.jpg",
    after: "/examples/statue-of-liberty-pixel.png",
  },
  {
    name: "Marilyn Monroe",
    subtitle: "Pop art icon",
    shape: "Diamond",
    colorMode: "Posterized",
    colors: 6,
    before: "/examples/marilyn-monroe.webp",
    after: "/examples/marilyn-monroe-pixel.png",
  },
  {
    name: "Anime",
    subtitle: "Illustrated style",
    shape: "Square",
    colorMode: "Full color",
    colors: 20,
    before: "/examples/anime.webp",
    after: "/examples/anime-pixel.png",
  },
];

export const STEPS = [
  {
    number: 1,
    title: "Upload",
    description: "Drop any image or paste a URL",
  },
  {
    number: 2,
    title: "Customize",
    description: "Choose shapes, colors, and grid size",
  },
  {
    number: 3,
    title: "Export",
    description: "Download PNG, SVG, PDF, or share a link",
  },
];

export const AUDIENCES = [
  {
    title: "Digital Artists",
    description:
      "Create pixel art from any photo with fine-grained control over shapes and colors.",
    icon: "artist" as const,
  },
  {
    title: "Cross-Stitch & Embroidery",
    description:
      "Generate stitch-ready grid patterns with DMC thread color mapping.",
    icon: "stitch" as const,
  },
  {
    title: "Bead Art Crafters",
    description:
      "Map designs to Perler bead palettes with exact color codes for each cell.",
    icon: "beads" as const,
  },
  {
    title: "Mosaic & Mural Planners",
    description:
      "Plan large-scale grid art projects with exportable guides and measurements.",
    icon: "mosaic" as const,
  },
];
