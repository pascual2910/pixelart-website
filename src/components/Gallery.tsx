import { GALLERY_ROW_1, GALLERY_ROW_2 } from "@/lib/constants";

function GalleryCard({
  item,
}: {
  item: { label: string; color: string };
}) {
  return (
    <div className="w-48 shrink-0 sm:w-56">
      <div
        className="flex aspect-square items-center justify-center rounded-2xl border border-border p-4"
        style={{ backgroundColor: `${item.color}15` }}
      >
        <span
          className="text-center text-sm font-semibold"
          style={{ color: item.color }}
        >
          {item.label}
        </span>
      </div>
    </div>
  );
}

function GalleryRow({
  items,
  direction,
  duration,
}: {
  items: { label: string; color: string }[];
  direction: "left" | "right";
  duration: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 ${direction === "left" ? "gallery-scroll-left" : "gallery-scroll-right"}`}
        style={{ animationDuration: `${duration}s`, width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <GalleryCard key={`${item.label}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Made by the community
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            See what creators around the world are making.
          </p>
        </div>
      </div>

      <div className="gallery-rows relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="flex flex-col gap-4">
          <GalleryRow items={GALLERY_ROW_1} direction="left" duration={25} />
          <GalleryRow items={GALLERY_ROW_2} direction="right" duration={30} />
        </div>
      </div>
    </section>
  );
}
