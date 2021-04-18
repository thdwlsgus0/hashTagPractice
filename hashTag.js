class HashTag extends HTMLElement{
  constructor(){
    super();
    this._value = '';
    this._ENTER = 13;
    this.tagSection = document.querySelector('.inp');
    this.outTagSection = document.querySelector('.placeholder');
    this.editor = document.querySelector('.editor_body');
    this.tagSection.addEventListener('input', this.update.bind(this));
    this.tagSection.addEventListener('keydown', this.keydown.bind(this));
   }
  
  update(e){
    let str = e.target.innerText;
    
    this.checkvalue();
    str = str.replace(/^(@\S+)/g, "<span class='mention'>$1</span>")
    .replace(/\n/g, "&nbsp;\n<br />")
    .replace(/^(@\S+)/g, "<span class='mention'>$1</span>")
    .replace(/([^\&])(@\S+)/g, "$1<span class='mention'>$2</span>");

    let range, sel;
    
    sel = window.getSelection();
    range = sel.getRangeAt(0);
    
    sel.removeAllRanges();
    sel.addRange(range);

    this.tagSection.innerHTML = str;

   
  }

  checkvalue() {
    if(this.tagSection.value !== '') {
      this.outTagSection.style.display = 'none';
    }
  }

  putAtCaret(content){
    let sel, range;
    if(document.getSelection){
      sel = document.getSelection();
      
    }
  }

  keydown(e){
    if(e.keyCode === this._ENTER){
      e.preventDefault();
      this.putAtCaret('\n<br>\u200B');

    }
  }

}

customElements.define('hash-tag', HashTag);