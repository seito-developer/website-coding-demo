import anime from "animejs/lib/anime.es.js";

export const heroAnimation = () => {
  anime({
    targets: "#js-hero-animation path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
};
