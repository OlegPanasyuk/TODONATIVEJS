class itemsToDo__controller extends EventEmmiter {
  constructor(view, model) {
    super();
    this._view = view;
    this._model = model;
    this._view.on('buttonAddClicked', () => {
      let e = this._model.addItemToItemsObj();
     this._model.getcurItem(e).view.render(this._view._target);

    });
    
  }


}