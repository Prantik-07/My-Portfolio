import { profile } from "@/data/profile";

export default function Marquee() {
  const items = [...profile.techStack, ...profile.techStack];

  return (
    <div
      className="overflow-hidden border-y py-4"
      style={{ borderColor: "var(--border)", background: "var(--olive)" }}
    >
      <div className="no-scrollbar flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center gap-10">
            {items.map((item, i) => (
              <span
                key={`${group}-${item}-${i}`}
                className="flex items-center gap-10 text-sm font-medium uppercase tracking-widest"
                style={{ color: "var(--bg)" }}
              >
                {item}
                <span aria-hidden="true" style={{ color: "var(--olive-light)" }}>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
