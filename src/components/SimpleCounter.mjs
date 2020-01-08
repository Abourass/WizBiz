import {html, define} from 'https://unpkg.com/hybrids@4.0.4/src';

export function increaseCount(host){ host.count += 1; }
const texty = () => html`<span>Hello</span>`
export const SimpleCounter = {
  count: 0,
  render: ({count}) => html`<button onclick="${increaseCount}">Count: ${count} ${texty()}</button>`
};

define('simple-counter', SimpleCounter);
