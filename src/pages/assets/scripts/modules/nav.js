const nav = () => {
  const $nav = document.querySelector("#js-nav");
  const $navTrigger = document.querySelector("#js-nav-trigger");
  const ACTIVE_CLASS = "is-active";

  const toggleNav = () => {
    $nav.classList.toggle(ACTIVE_CLASS);
    $navTrigger.classList.toggle(ACTIVE_CLASS);
  };

  $navTrigger.addEventListener("click", toggleNav);
}

export default nav;