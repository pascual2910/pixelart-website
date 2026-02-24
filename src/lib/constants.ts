export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://pixel-art-eta-ashy.vercel.app";

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
      "Choose from Square, Circle, Hexagon, Diamond, Triangle, Split, or upload a Custom SVG shape.",
    icon: "shapes" as const,
    badges: ["Square", "Circle", "Hexagon", "Diamond", "Triangle", "Split", "Custom SVG"],
  },
  {
    title: "Styles & View Modes",
    description:
      "10 example styles like Retro 8-bit, Cross-stitch, and Pop Art. Plus view modes for Paint by Number, Cross-Stitch Guide, and Bead Art Guide.",
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
      "Generate a view-only or editable link and send it via WhatsApp, Twitter, email, or any platform.",
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
  {
    name: "Girl with a Pearl Earring",
    subtitle: "Hexagon variant",
    shape: "Hexagon",
    colorMode: "Posterized",
    colors: 8,
    before: "/examples/pearl-earring.jpg",
    after: "/examples/pearl-earring-hex-pixel.png",
  },
  {
    name: "Statue of Liberty",
    subtitle: "Triangle grid",
    shape: "Triangle",
    colorMode: "Full color",
    colors: 12,
    before: "/examples/statue-of-liberty.jpg",
    after: "/examples/statue-of-liberty-tri-pixel.png",
  },
];

export const STEPS = [
  {
    number: 1,
    title: "Upload",
    description: "Drop or paste any photo to pixelate",
  },
  {
    number: 2,
    title: "Customize",
    description: "Pick shapes, colors, grid size, and craft palettes",
  },
  {
    number: 3,
    title: "Export",
    description: "Save in 6+ formats for crafts, murals, or digital use",
  },
];

export const TESTIMONIALS = [
  // Column 1
  {
    name: "Sarah M.",
    role: "Cross-Stitch Hobbyist",
    text: "I used to spend hours drawing patterns on graph paper. Now I just upload a photo and get a perfect cross-stitch grid in seconds. The DMC color matching is unbelievably accurate.",
    color: "#6366f1",
  },
  {
    name: "David R.",
    role: "Indie Game Developer",
    text: "This tool cut my sprite creation time in half. I drop in concept art and get clean pixel assets that I can tweak in my editor. The SVG export is a lifesaver.",
    color: "#f59e0b",
  },
  {
    name: "Priya K.",
    role: "Elementary Art Teacher",
    text: "My students love seeing their drawings turned into pixel art. The different grid shapes make it feel like a new activity every time. It's become a weekly favorite.",
    color: "#10b981",
  },
  // Column 2
  {
    name: "Marcus T.",
    role: "Bead Art Crafter",
    text: "Finally a converter that understands Perler bead palettes. I can match colors exactly to what's on the pegboard. Went from guessing to precision overnight.",
    color: "#ef4444",
  },
  {
    name: "Leah J.",
    role: "Graphic Designer",
    text: "The posterized color mode gives such a cool retro feel. I've been using it to create pixel art posters for clients and they can't get enough of the style.",
    color: "#8b5cf6",
  },
  {
    name: "Tom W.",
    role: "Mosaic Artist",
    text: "Planning a mosaic mural used to take weeks of manual calculations. Now I export a PDF grid and hand it straight to my team. The hexagon shape option is genius.",
    color: "#06b6d4",
  },
  // Column 3
  {
    name: "Nina L.",
    role: "Etsy Shop Owner",
    text: "I sell cross-stitch kits and this tool has transformed my workflow. I can create new patterns in minutes instead of days. My shop inventory has tripled.",
    color: "#ec4899",
  },
  {
    name: "Jake P.",
    role: "Retro Gaming Fan",
    text: "Turning my photos into 8-bit style pixel art is just pure fun. I've made pixel portraits of my whole family and they're now framed on the wall.",
    color: "#f97316",
  },
  {
    name: "Rachel B.",
    role: "DIY & Crafts Blogger",
    text: "I've recommended this to my entire audience. The multi-format export means my readers can use whatever tool they prefer. PDF for print, CSV for spreadsheets, PNG for social.",
    color: "#14b8a6",
  },
];

export const GALLERY_ROW_1 = [
  { label: "Landscape", color: "#6366f1" },
  { label: "Pet Portrait", color: "#f59e0b" },
  { label: "Game Sprite", color: "#10b981" },
  { label: "Cross-Stitch Pattern", color: "#ec4899" },
  { label: "Mosaic Plan", color: "#06b6d4" },
  { label: "Album Cover", color: "#8b5cf6" },
];

export const GALLERY_ROW_2 = [
  { label: "Family Photo", color: "#ef4444" },
  { label: "Anime Character", color: "#f97316" },
  { label: "City Skyline", color: "#14b8a6" },
  { label: "Bead Art Design", color: "#6366f1" },
  { label: "Retro Poster", color: "#f59e0b" },
  { label: "Nature Scene", color: "#10b981" },
];

export const FAQ = [
  {
    question: "Is it really free?",
    answer:
      "Yes, during our launch everything is completely free. Sign up now and you keep free access forever — even when we introduce paid plans later.",
  },
  {
    question: "What image formats can I upload?",
    answer:
      "You can upload JPG, PNG, WebP, and most common image formats. Just drop or paste any image and it will be converted instantly.",
  },
  {
    question: "What grid shapes are available?",
    answer:
      "Square, Circle, Hexagon, Diamond, Triangle, Split, and Custom SVG. Each shape creates a unique pixel art style you can preview in real time.",
  },
  {
    question: "Can I use the pixel art for cross-stitch or bead art?",
    answer:
      "Absolutely. We have dedicated view modes for Cross-Stitch Guide and Bead Art Guide with DMC thread and Perler bead palette matching built in.",
  },
  {
    question: "What export formats do you support?",
    answer:
      "PNG, SVG, PDF, JSON, CSV, and Markdown. You can also generate shareable links that are either view-only or fully editable.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "You can use the editor without an account, but signing up lets you save your work and share creations with a link.",
  },
  {
    question: "Can I share my creations?",
    answer:
      "Yes! Generate a view-only or editable link and share it via WhatsApp, Twitter, email, or any platform you like.",
  },
  {
    question: "Is there a limit on conversions?",
    answer:
      "No. You can convert as many images as you want with no daily or monthly limits.",
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
