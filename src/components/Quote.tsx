interface QuoteProps {
  text: string;
  attribution: string;
  source?: string;
}

export default function Quote({ text, attribution, source }: QuoteProps) {
  return (
    <figure className="my-6 pl-6 pr-4 py-4 border-l-4 border-amber-400 bg-amber-50/50 rounded-r">
      <blockquote className="italic text-stone-800 text-[1.05em] leading-relaxed">
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption className="mt-2 text-sm text-stone-600 not-italic">
        — {attribution}
        {source && <span className="text-stone-500">, <em>{source}</em></span>}
      </figcaption>
    </figure>
  );
}
