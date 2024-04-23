import anime from 'animejs/lib/anime.es.js';

export const hero = () => {
  const svgEl = document.querySelector("#js-hero-animation");
  const pathEls = svgEl.querySelectorAll(".anim-path");
  svgEl.style.opacity = 1;
  
  for (let i = 0; i < pathEls.length; i++) {
    const pathEl = pathEls[i];
    const offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
    anime
      .timeline({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: 1,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      })
      .add({ targets: pathEls, stroke: "transparent" }, 0);
  }
};
