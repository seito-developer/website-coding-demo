export const scrollAnimation = () => {
  const $headlines = document.querySelectorAll(".js-scroll-animation");
  const ACTIVE_CLASS = "is-active";

  const addActiveClass = (target) => {
    target.classList.add(ACTIVE_CLASS);
  };

  const removeActiveClass = (target) => {
    target.classList.remove(ACTIVE_CLASS);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        addActiveClass(entry.target);
      } else {
        removeActiveClass(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // 監視を開始
  $headlines.forEach($headline => observer.observe($headline));
};