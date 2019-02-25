class itemToDo__view extends EventEmmiter {
  constructor(model) {
    super();
    this._model = model;
    
  }

  render(target) {
    let main_div = document.createElement('div');
    let title = document.createElement('h3');
    let text_conteiner = document.createElement('p');
    let date_conteiner = document.createElement('div');
    let deadLine = document.createElement('div');
    let date = this._model.getDate();
    let deadLineDate = this._model.getDeadLine();
    let buttonChange = document.createElement('button');
    title.innerHTML = `${this._model.getTitle()}`;
    title.classList.add('itemToDo__title');
    text_conteiner.innerHTML = `${this._model.getText()}`;
    text_conteiner.classList.add('itemToDo__text');

    date_conteiner.innerHTML = `Date of creation: ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    date_conteiner.classList.add('itemToDo__date');
    deadLine.innerHTML = `Date of creation: ${deadLineDate.getFullYear()}-${deadLineDate.getMonth()+1}-${deadLineDate.getDate()}`;
    deadLine.classList.add('itemToDo__deadline');
    buttonChange.innerHTML = 'Change';
    buttonChange.classList.add('button');
    buttonChange.classList.add('button_accent');
    buttonChange.classList.add('itemToDo__button');
    buttonChange.addEventListener('click',() => {
      this.emit('clickButtonChange');
    });
    main_div.appendChild(title);
    main_div.appendChild(text_conteiner);
    main_div.appendChild(date_conteiner);
    main_div.appendChild(deadLine);
    main_div.appendChild(buttonChange);
    main_div.classList.add('itemToDo');
    target.appendChild(main_div);
  }


}