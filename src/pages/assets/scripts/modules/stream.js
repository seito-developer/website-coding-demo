export const stream = () => {
  let scrollAmountNum = 0;
  const $stream = document.querySelector("#js-stream");

  const loadItemsOnScroll = () => {
    scrollAmountNum += -2;
    $stream.style.left = `${scrollAmountNum}px`;
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      window.addEventListener("scroll", loadItemsOnScroll);
    } else {
      scrollAmountNum = 0;
      window.removeEventListener("scroll", loadItemsOnScroll);
    }
  });
  // 監視を開始
  observer.observe($stream);

}