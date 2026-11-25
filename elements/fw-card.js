const template = document.createElement('template');
template.innerHTML = `
  <div class="card">
    <p>This text is inside the shadow DOM.</p>
    <slot></slot>
  </div>
`;

class FwCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define('fw-card', FwCard);