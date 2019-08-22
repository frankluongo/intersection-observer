export default class Observer {
  constructor() {
    this.observeElements();
  }

  observeElements() {
    this.elementsToObserve.forEach(this.observeElement.bind(this));
  }

  observeElement(element) {
    this.observer.observe(element);
  }

  handleIntersection(entries) {
    entries.forEach(this.setElementStatus.bind(this));
  }

  setElementStatus(entry) {
    const ratio = entry.intersectionRatio > 0;
    const target = entry.target;

    target.setAttribute('data-in-view', ratio);
  }

  get observer() {
    return new IntersectionObserver(this.handleIntersection.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: [1, 0],
    });
  }

  get elementsToObserve() {
    return Array.from(document.querySelectorAll('[data-js="ObserveMe"]'));
  }
}
