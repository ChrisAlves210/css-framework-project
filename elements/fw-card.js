const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      overflow: hidden;
    }

    :host([variant="elevated"]) {
      border-color: transparent;
      box-shadow: var(--shadow-md);
    }

    header,
    .body,
    footer {
      padding: var(--space-4) var(--space-5);
    }

    footer {
      border-top: 1px solid var(--color-border);
      color: var(--color-fg-muted);
    }
  </style>
  <div class="card">
    <header><slot name="header"></slot></header>
    <div class="body"><slot></slot></div>
    <footer><slot name="footer"></slot></footer>
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