export const scrollAnimation = () => {
  const $scrollAnimationEls = document.querySelectorAll(".js-scroll-animation");
  const ACTIVE_CLASS = "is-active";

  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // 画面内
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(ACTIVE_CLASS);
      }
      // 画面外
      else {
        entry.target.classList.remove(ACTIVE_CLASS);
      }
    });
  });

  $scrollAnimationEls.forEach((el) => {
    intersectionObserver.observe(el);
  });
};
