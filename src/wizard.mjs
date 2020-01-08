import {html, define} from 'https://unpkg.com/hybrids@4.0.4/src';

export function increaseCount(host){
  host.count += 1;
}

export const SimpleCounter = {
  count: 0,
  render: ({count}) => html`<button onclick="${increaseCount}">Count: ${count}</button>`
};

const Wizard = function(className, props) {
  const classes = {
    [className]: class {
    constructor() {
      this._state = (props.state) ? props.state : null;
    }

    static get observedAttributes() {return [...props.state]}

    attributeChangedCallback(name, oldValue, newValue){
      this._state = newValue;
      this._updateRendering();
    }
    connectedCallback(){ this._updateRendering() }

    get state(){
      return this._state;
    }
    set state(newState){
      this.setAttribute('state', newState)
    }

    _updateRendering(){

    }
  }};
  return new classes[className];
};

const sample = new Wizard('superspan', {state: {clicked: false}});

define('simple-counter', SimpleCounter);
console.log(sample);

