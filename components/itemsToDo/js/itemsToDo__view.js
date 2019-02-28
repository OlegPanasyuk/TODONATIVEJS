class itemsToDo__view extends  EventEmmiter {
  constructor(model) {
    super();
    this._model = model;
    this._target = null;
  }

  renderControls() {
    let buttonAdd = document.createElement('button');
    let tr = document.body;

    buttonAdd.innerHTML = '+';
    buttonAdd.classList.add('button_accent');
    buttonAdd.classList.add('button_addItem');

    buttonAdd.addEventListener('click', () => {
      this.emit('buttonAddClicked');
    })
    tr.appendChild(buttonAdd);
  }


  render(target) {
    this.renderControls();
    this._target = target;
    let items = this._model.getItemsObj();
    Object.keys(items).forEach((el, i) => {
      items[el].view.render(target);
    });
  }
}