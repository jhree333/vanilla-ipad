export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  return new IntersectionObserver(callback, options)
}

export function observeElements(
  observer: IntersectionObserver,
  elements: NodeListOf<HTMLElement>
): void {
  elements.forEach((el: HTMLElement) => observer.observe(el))
}
