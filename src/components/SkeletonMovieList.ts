class SkeletonMovieList {
  #target;
  constructor(target: HTMLElement) {
    this.#target = target;

    this.render();
  }

  render() {
    this.#target.innerHTML = this.template()
  }
  removeSkeleton(){
    this.#target.innerHTML = ''
  }

  template():string {
    return Array.from({length: 20}, ()=>`<li>
    <a href="#">
      <div class="item-card skeleton">
        <div class="item-thumbnail skeleton">
        <div class="item-title skeleton"></div>
        <div class="item-score skeleton"></div>
        </div>
        </div>
    </a>
  </li>`).join('')
  }
}


export default SkeletonMovieList;