class itemToDo__model extends EventEmmiter {
  constructor(text, title, date, dead_date) {
    super();
    this._title = title || 'Item Title';
    this._text = text || 'New ToDo item';
    this._date = (date) ? date : new Date();
    this._dead_date = (dead_date) ? dead_date : new Date();
  }

  getTitle() {
    return this._title;
  }

  setTitle(title) {
    this._title = title;
  }

  getText() {
    return this._text;
  }

  setText(text) {
    this._text = text;
  }

  getDate() {
    return this._date;
  }

  // По хорошему нужно принимать объект но так же можно и массив
  setDate(date) {
    if (classof(date) === 'Date') {
      this._date = date;
    } else {
      console.error('Используйте для установки даты объект класса Date');
    }
  }

  getDeadLine() {
    return this._dead_date;
  }

  setDeadLine(date) {
    if (classof(date) === 'Date') {
      this._dead_date = date;
    } else {
      console.error('Используйте для установки даты объект класса Date');
    }
  }
}


