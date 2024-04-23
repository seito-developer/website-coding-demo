export class Tab {
  constructor(obj) {
    this.ACTIVE_CLASS = "is-active";
    this.$tabTrigger = document.querySelector(obj.trigger);
    this.$tabContent = document.querySelector(obj.content);
    this.$inputList = this.$tabTrigger.getElementsByTagName("input");
    
    this.$prevContent = null;

    for (let i = 0; i < this.$inputList.length; i++) {
      this.$inputList[i].addEventListener("click", (e) => this.clickHandler(e));
    }
  }

  clickHandler(e) {
    this.toggleContent(e);
  }

  toggleContent(e){
    if(this.$prevContent) this.$prevContent.classList.remove(this.ACTIVE_CLASS);
    const contentId = `#js-${e.target.value}`;
    const $target = this.$tabContent.querySelector(contentId);
    $target.classList.add(this.ACTIVE_CLASS);
    this.$prevContent = $target;
  }
}
