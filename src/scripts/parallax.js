// ParallaxLayer constructor using object creation
function ParallaxLayer(selector, speed) {
  const element = document.querySelector(selector);
  return {
    update(scrollY) {
      if (element) {
        const offset = scrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      }
    }
  };
}

// ParallaxManager using closure to encapsulate state
const ParallaxManager = (function () {
  const layers = [];

  return {
    register(selector, speed = 0.5) {
      const layer = ParallaxLayer(selector, speed);
      layers.push(layer);
    },
    updateAll(scrollY) {
      layers.forEach(layer => layer.update(scrollY));
    },
    init() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        this.updateAll(scrollY);
      });
    }
  };
})();

export function setupParallax() {
  ParallaxManager.register('.header', 0.2);
  ParallaxManager.init();
}