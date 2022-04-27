import { Component, Element, h, Host } from '@stencil/core';

import i18n from '../../stores/i18n.store';

@Component({
  tag: 'focus-topics',
  styleUrl: 'focus-topics.css',
})
export class FocusTopics {
  @Element() el!: Element;

  constructor() {
    document.title = i18n.contact.title;
  }

  render() {
    return (
      <Host>
        <h1 class="no-print-font">
          <span class="color-dodger-blue">Hyper Automation.</span>
        </h1>
        <h1 class="no-print-font">
          <span>Manuellen Aufwand maximal reduzieren.</span>
        </h1>
      </Host>
    );
  }
}
