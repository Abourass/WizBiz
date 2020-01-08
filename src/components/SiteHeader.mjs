import {html, define} from 'https://unpkg.com/hybrids@4.0.4/src';

export const SiteHeader = {
  title: '',
  render: ({title}) => html`
  <div>
    <span class="siteHeader">${title}</span>
  </div>
  `
};
define('site-header', SiteHeader);
