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

console.log(sample);

