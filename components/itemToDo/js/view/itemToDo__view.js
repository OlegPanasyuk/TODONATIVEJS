class itemToDo__view extends EventEmmiter {
  constructor(model) {
    super();
    this._model = model;
  }

  render(target) {
    let main_div = document.createElement('div');
    let text_conteiner = document.createElement('div');
    let date_conteiner = document.createElement('div');
    let deadLine = document.createElement('div');
    text_conteiner.innerHTML = `${this._model.getText()}`;
    date_conteiner.innerHTML = `${this._model.getDate()}`;
    deadLine.innerHTML = `${this._model.getDeadLine()}`;
    main_div.appendChild(text_conteiner);
    main_div.appendChild(date_conteiner);
    main_div.appendChild(deadLine);
    main_div.classList.add('itemToDo');
    target.appendChild(main_div);
  }
}