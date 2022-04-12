import { Component, Element, Listen, State, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

import i18n from '../../stores/i18n.store';
@Component({
  tag: 'site-header',
  styleUrl: 'site-header.css',
})
export class SiteHeader {
  @Element() el!: Element;

  @State() isMobileMenuShown: boolean = false;

  private shadow = 0.2;

  @Listen('resize', { target: 'window' })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768) {
        const menu = this.el.querySelector('.header-menu') as HTMLElement;
        menu.style.display = '';
        this.el.classList.remove('show-mobile-menu');
        document.body.classList.remove('no-scroll');
        this.isMobileMenuShown = false;
      }
    });
  }

  componentDidLoad() {
    this.isMobileMenuShown = false;
  }

  showNav() {
    if (this.isMobileMenuShown) return;
    this.isMobileMenuShown = true;

    const menu = this.el.querySelector('.header-menu') as HTMLElement;

    menu.style.display = 'flex';
    setTimeout(() => {
      this.el.classList.add('show-mobile-menu');
      document.body.classList.add('no-scroll');
    }, 1);
  }

  hideNav() {
    if (!this.isMobileMenuShown) return;
    this.isMobileMenuShown = false;

    const menu = this.el.querySelector('.header-menu') as HTMLElement;

    this.el.classList.remove('show-mobile-menu');
    setTimeout(() => {
      menu.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }, 300);
  }

  render() {
    return (
      <div class="header-skew">
        <div class="bar">
          <ResponsiveContainer>
            {/* <stencil-route class="burger-menu" url="/docs" component="app-burger" /> */}
            <stencil-route-link url="/" class="logo-link" anchorTitle="bitflower®">
              <app-icon name="logo" />
            </stencil-route-link>

            <div class="header-menu">
              <stencil-route-link
                url={`/${i18n.global.whatIsCaseLink}`}
                onClick={() => {
                  this.hideNav();
                }}
              >
                {i18n.global.whatIsCase}
              </stencil-route-link>

              <stencil-route-link
                url={`/${i18n.global.valueLink}`}
                onClick={() => {
                  this.hideNav();
                }}
              >
                {i18n.global.value}
              </stencil-route-link>

              <stencil-route-link
                url={`/${i18n.global.caseStudiesLink}`}
                onClick={() => {
                  this.hideNav();
                }}
              >
                {i18n.global.caseStudies}
              </stencil-route-link>

              <stencil-route-link
                class="say-hello"
                url={`/${i18n.contact.link}`}
                onClick={() => {
                  this.hideNav();
                }}
              >
                {i18n.global.sayHello}
              </stencil-route-link>

              {/* <stencil-route-link
            url="/blog"
            onClick={() => {
              this.hideNav();
            }}
            >
            Blog
          </stencil-route-link> */}

              <ul class="external-links list--unstyled">
                <li>
                  <a rel="noopener" class="link--external" target="_blank" href="https://twitter.com/bitflowertweets" aria-label="Twitter">
                    <app-icon name="twitter"></app-icon>
                  </a>
                </li>
                <li>
                  <a rel="noopener" class="link--external" target="_blank" href="https://www.linkedin.com/company/bitflower" aria-label="LinkedIn">
                    <app-icon name="linkedin"></app-icon>
                  </a>
                </li>
              </ul>

              <button
                class="header-close"
                onClick={() => {
                  this.hideNav();
                }}
              >
                <app-icon name="close"></app-icon>
              </button>
            </div>

            <button
              class="header-overflow"
              onClick={() => {
                this.showNav();
              }}
              aria-label="Open menu"
            >
              <app-icon name="more"></app-icon>
            </button>
          </ResponsiveContainer>
        </div>
        <div class="skew">
          <svg width="100%" viewBox="0 0 100 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <polygon id="path-1" points="0 0 100 0 0 2.0846494"></polygon>
              <filter x="-5.0%" y="-335.8%" width="114.0%" height="771.6%" filterUnits="objectBoundingBox" id="filter-2">
                <feOffset dx="2" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values={`0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 ${this.shadow} 0`} type="matrix" in="shadowBlurOuter1"></feColorMatrix>
              </filter>
            </defs>
            <g id="skew-1" stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">
              <g id="skew-left" fill-rule="nonzero">
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                <use fill="#FFFFFF" xlinkHref="#path-1"></use>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
