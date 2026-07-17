export const fadeUp = (delay = 0) => ({
  opacity: 0,
  animation: "fadeUp 0.8s ease forwards",
  animationDelay: `${delay}s`,
  "@keyframes fadeUp": {
    from: { opacity: 0, transform: "translateY(18px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
});