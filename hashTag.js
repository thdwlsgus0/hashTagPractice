class HashTag extends HTMLElement{
  constructor(){
    super();
    this._value = '';
    this._ENTER = 13;
  }
  
}
customElements.define('hash-tag', HashTag);