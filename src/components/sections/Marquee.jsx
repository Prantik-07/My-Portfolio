import { useMemo } from "react";
import LogoLoop from "@/components/LogoLoop";
import { profile } from "@/data/profile";

const TECH_ICON_SLUGS = {
  Python: "python",
  JavaScript: "javascript",
  Java: "openjdk",
  SQL: "postgresql",
  React: "react",
  Vite: "vite",
  HTML: "html5",
  CSS: "css",
  "Node.js": "nodedotjs",
  Express: "express",
  FastAPI: "fastapi",
  PyTorch: "pytorch",
  "scikit-learn": "scikitlearn",
  Pandas: "pandas",
  NumPy: "numpy",
  Git: "git",
  GitHub: "github",
  Docker: "docker",
  WandB: "weightsandbiases",
  HuggingFace: "huggingface",
  Kaggle: "kaggle",
  Postman: "postman",
  Vercel: "vercel",
};

export default function Marquee() {
  const logos = useMemo(
    () =>
      profile.techStack
        .filter((item) => TECH_ICON_SLUGS[item])
        .map((item) => ({
          src: `https://cdn.simpleicons.org/${TECH_ICON_SLUGS[item]}`,
          alt: item,
          title: item,
        })),
    [],
  );

  return (
    <div
      className="mx-auto w-[80%] h-[100px] flex items-center justify-center overflow-hidden rounded-2xl border py-4 backdrop-blur-xl backdrop-saturate-150 border-none"
      style={{
        borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
        background: "color-mix(in srgb, var(--card) 45%, transparent)",
        boxShadow: "inset 0 1px 0 color-mix(in srgb, var(--bg) 70%, transparent), 0 8px 30px rgba(35, 40, 26, 0.08)",
      }}
    >
      <LogoLoop
        logos={logos}
        speed={60}
        logoHeight={50}
        gap={40}
        pauseOnHover
        fadeOut
        fadeOutColor="color-mix(in srgb, var(--card) 45%, transparent)"
        scaleOnHover
        ariaLabel="Technology stack"
      />
    </div>
  );
}
