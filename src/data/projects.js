export const projects = [
  {
    name: "zero-trust-onboarding",
    title: "Zero-Trust Onboarding",
    description:
      "A multi-agent IT onboarding orchestrator demonstrating hard-enforced, zero-trust permission boundaries, built on Google ADK and Gemini 3.5 Flash.",
    url: "https://github.com/Prantik-07/zero-trust-onboarding",
    homepage: null,
    language: "Python",
    topics: ["multi-agent", "zero-trust", "gemini", "google-adk"],
    featured: true,
  },
  {
    name: "bio-synthetica",
    title: "Bio Synthetica",
    description:
      "A reinforcement learning environment for physically-grounded lab protocol design.",
    url: "https://github.com/Prantik-07/bio-synthetica",
    homepage: "https://huggingface.co/spaces/Luffy0610/bio-synthetica-pro",
    language: "Python",
    topics: ["reinforcement-learning", "simulation"],
    featured: true,
  },
  {
    name: "bitcoin-predictor",
    title: "Bitcoin Predictor",
    description:
      "BTC/USDT next-hour 95% confidence interval predictor using GBM + Student-t, built for the AlphaI × Polaris Challenge.",
    url: "https://github.com/Prantik-07/bitcoin-predictor",
    homepage: "https://bitcoin-predictor07.streamlit.app",
    language: "Python",
    topics: ["bitcoin", "forecasting", "streamlit", "time-series"],
    featured: true,
  },
  {
    name: "fraud-detection-system",
    title: "Fraud Detection System",
    description:
      "A machine learning pipeline for flagging fraudulent transaction patterns.",
    url: "https://github.com/Prantik-07/fraud-detection-system",
    homepage: "https://huggingface.co/spaces/Prantik-07/fraud-detection-dashboard",
    language: "Python",
    topics: [],
    featured: false,
  },
  {
    name: "URBAN-TAXI-DEMAND-PATTERN-F",
    title: "Urban Taxi Demand Pattern",
    description:
      "An interactive analysis of urban taxi demand patterns, deployed as a live web app.",
    url: "https://github.com/Prantik-07/URBAN-TAXI-DEMAND-PATTERN-F",
    homepage: "https://urban-taxi-demand-pattern-f.vercel.app",
    language: "JavaScript",
    topics: [],
    featured: false,
  },
  {
    name: "accessibility-cms-wagtail",
    title: "Accessibility CMS (Wagtail)",
    description: "An accessibility audit tool built with Wagtail CMS and pa11y.",
    url: "https://github.com/Prantik-07/accessibility-cms-wagtail",
    homepage: null,
    language: "Python",
    topics: [],
    featured: false,
  },
  {
    name: "accesibility-audit-tool-ojt",
    title: "Accessibility Audit Tool",
    description:
      "An on-the-job training project focused on automated accessibility auditing.",
    url: "https://github.com/Prantik-07/accesibility-audit-tool-ojt",
    homepage: null,
    language: "Python",
    topics: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
