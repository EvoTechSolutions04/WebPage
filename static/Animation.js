document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h2", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
  gsap.from("p", { duration: 1.2, y: 30, opacity: 0, delay: 0.3, ease: "power3.out" });
  gsap.from("a", { duration: 1, opacity: 0, delay: 0.8, stagger: 0.2 });
});
