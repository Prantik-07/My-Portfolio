import { forwardRef, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function renderBold(text, boldColor) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold" style={{ color: boldColor }}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const RollInText = forwardRef(function RollInText(
  { paragraphs, side = "left", tone = "dark", className = "" },
  forwardedRef
) {
  const containerRef = useRef(null);
  const fromX = side === "left" ? -60 : 60;

  const textColor = tone === "light" ? "color-mix(in srgb, var(--bg) 75%, transparent)" : "var(--text)";
  const boldColor = tone === "light" ? "var(--bg)" : "var(--ink)";

  useLayoutEffect(() => {
    const paragraphEls = containerRef.current?.querySelectorAll("p");
    if (!paragraphEls?.length) return;
    gsap.set(paragraphEls, { opacity: 0, x: fromX });
  }, [fromX, paragraphs]);

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      className={className}
    >
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className="mb-4 text-sm leading-relaxed last:mb-0 sm:text-base"
          style={{ color: textColor }}
        >
          {renderBold(text, boldColor)}
        </p>
      ))}
    </div>
  );
});

export default RollInText;
