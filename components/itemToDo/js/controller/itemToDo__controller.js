class itemToDo__controller extends EventEmmiter {
  constructor(view, model) {
    super();
    this._view = view;
    this._model = model;
    view.on('clickButtonChange', () => {
      this.changeItem();
    })
  }

  changeItem() {
    
  }
}