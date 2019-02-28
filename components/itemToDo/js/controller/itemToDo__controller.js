class itemToDo__controller extends EventEmmiter {
  constructor(view, model) {
    super();
    this._view = view;
    this._model = model;
    view.on('clickButtonChange', () => {
      this.changeItem();
    })

    view.on('saveChanges', (form) => {
      let model = this._model;
      let view = this._view;
      let title = form.title.value;
      let text = form.text.value;
      let date = form.dateInput.value;
      let deadLine = form.deadLine.value;

      model.setTitle(title);
      model.setText(text);
      model.setDate(new Date(date));
      model.setDeadLine(new Date(deadLine));      

      view.emit('rebuild');
    });
  }

  changeItem() {
    let view = this._view;
    view.emit('changeModeActive');
  }
}