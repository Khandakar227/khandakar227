
  let io;

  function ensureIntersectionObserver() {
    if (io) return;

    io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const eventName = entry.isIntersecting
          ? "enterViewport"
          : "exitViewport";
        entry.target.dispatchEvent(new CustomEvent(eventName));
      });
    });
  }

  export default function viewport(element) {
    ensureIntersectionObserver();
    io.observe(element);

    return {
      destroy() {
        io.unobserve(element);
      },
    };
  }
