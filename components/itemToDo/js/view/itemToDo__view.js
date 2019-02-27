class itemToDo__view extends EventEmmiter {
  constructor(model, target) {
    super();
    this._model = model;
    this._target = (target) ? target : undefined;
    this._main_div = document.createElement('div');
    this.on('changeModeActive', () => {
      this.changeMode();
    });
    this.on('rebuild', () => {
      this.render();
    })
  }
  
  changeMode() {
    let main_div = this._main_div;
    let form = document.createElement('form');
    let title = document.createElement('input');
    let text = document.createElement('textarea');
    let deadLine = document.createElement('input');
    let dateDeadLine = this._model.getDeadLine();
    let labelDeadLine = document.createElement('label');
    let labelDate = document.createElement('label');
    let dateInput = document.createElement('input');
    let dateCreat = this._model.getDate();
    let cancleButton = document.createElement('button');
    let okButton = document.createElement('button');
    
    cancleButton.classList.add('button');
    cancleButton.classList.add('button_accent');
    cancleButton.addEventListener('click', () => {
      this.emit('rebuild');
    });
    cancleButton.innerHTML = 'CANCLE';

    okButton.classList.add('button');
    okButton.classList.add('button_accent');
    okButton.innerHTML = 'SAVE';
    okButton.addEventListener('click', ()=> {
      // alert('rebuild');
      // this.emit('rebuild');
      this.emit('saveChanges', form);
    })

    deadLine.setAttribute('type', 'date');
    deadLine.setAttribute('name', 'deadLine');
    deadLine.value = `${dateDeadLine.getFullYear()}-${(dateDeadLine.getMonth()<9) ? '0' +(dateDeadLine.getMonth()+1):dateDeadLine.getMonth()+1}-${(dateDeadLine.getDate()<=9) ? '0' + dateDeadLine.getDate() : dateDeadLine.getDate() }`;

    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'dateInput');
    dateInput.value = `${dateCreat.getFullYear()}-${(dateCreat.getMonth()<9) ? '0' +(dateCreat.getMonth()+1):dateCreat.getMonth()+1}-${(dateCreat.getDate()<=9) ? '0' + dateCreat.getDate() : dateCreat.getDate() }`;
    dateInput.addEventListener('change', (e)=>{
      console.log(e.target.value);
    });

    text.value = `${this._model.getText()}`;
    text.setAttribute('name', 'text');

    title.value = `${this._model.getTitle()}`;
    title.setAttribute('name', 'title');

    labelDate.innerHTML = 'Date of creation: '
    labelDeadLine.innerHTML = 'Date of DEADLINE: ';

    labelDate.appendChild(dateInput);
    labelDeadLine.appendChild(deadLine);


    
    form.setAttribute('onsubmit', 'return false;');
    form.classList.add('itemToDo__form-change');

    form.appendChild(title);
    form.appendChild(text);
    form.appendChild(labelDate)
    form.appendChild(labelDeadLine);
    form.appendChild(okButton);
    form.appendChild(cancleButton);

    main_div.innerHTML = '';
    main_div.appendChild(form);
  }

  render(target) {
   
    let main_div = this._main_div;
    let title = document.createElement('h3');
    let text_conteiner = document.createElement('p');
    let date_conteiner = document.createElement('div');
    let deadLine = document.createElement('div');
    let buttonChange = document.createElement('button');
    let date = this._model.getDate();
    let deadLineDate = this._model.getDeadLine();
    
    if (!target) main_div.innerHTML = '';

    title.innerHTML = `${this._model.getTitle()}`;
    title.classList.add('itemToDo__title');
    text_conteiner.innerHTML = `${this._model.getText()}`;
    text_conteiner.classList.add('itemToDo__text');

    date_conteiner.innerHTML = `Date of creation: ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    date_conteiner.classList.add('itemToDo__date');
    deadLine.innerHTML = `Date of DeadLine: ${deadLineDate.getFullYear()}-${deadLineDate.getMonth()+1}-${deadLineDate.getDate()}`;
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
    
    
     if (target) {
      this._target = target; 
      target.appendChild(main_div)
     } 
  }


}