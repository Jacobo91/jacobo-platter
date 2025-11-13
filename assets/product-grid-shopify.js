class ProductGridShopify extends HTMLElement {
  constructor() {
    super();
    this.wrapper = null;
    this.button = null;
    this.grid = null;
    this.expanded = false;
  }

  connectedCallback() {
    this.wrapper = this.querySelector('#product-grid-wrapper');
    this.grid = this.querySelector('#product-grid');
    this.button = this.querySelector('#show-more-button');

    if (!this.wrapper || !this.grid || !this.button) return;

    this.wrapper.style.height = `227px`;

    window.addEventListener('load', () => this.setupInitialState());

    this.button.addEventListener('click', () => this.toggleShowMore());

    window.addEventListener('resize', () => this.handleResize());
  }

  setupInitialState() {
    const isMobile = window.matchMedia('(max-width: 496px)').matches;
    if (!isMobile) {
      this.wrapper.style.height = 'auto';
      return;
    }

    const visibleHeight = this.grid.children[0]?.offsetHeight || 0;
    this.wrapper.style.height = `${visibleHeight}px`;
    this.expanded = false;
    this.button.textContent = 'Show More';
  }

  toggleShowMore() {
    this.expanded = !this.expanded;

    if (this.expanded) {
      this.wrapper.style.height = `${this.grid.scrollHeight}px`;
      this.button.textContent = 'Show Less';
    } else {
      this.setupInitialState();
    }
  }

  handleResize() {
    if (window.innerWidth > 496) {
      this.wrapper.style.height = 'auto';
      this.button.style.display = 'none';
    } else {
      this.button.style.display = 'block';
      if (!this.expanded) this.setupInitialState();
    }
  }
}

customElements.define("product-grid-shopify", ProductGridShopify);