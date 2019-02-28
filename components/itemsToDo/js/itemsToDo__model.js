class itemsToDo__model extends EventEmmiter {
  constructor(items) {
    super();
    this._items = items || {};
    this._itemsObj = {};
    Object.keys(this._items).forEach((e,i) => {
      let obj = this._items[e];
      this._itemsObj[e] = {};

      this._itemsObj[e].model = new itemToDo__model(obj.text, obj.title, obj.date, obj.dead_date); 
      this._itemsObj[e].view = new itemToDo__view(this._itemsObj[e].model);
      this._itemsObj[e].controller = new itemToDo__controller(this._itemsObj[e].view, this._itemsObj[e].model);
    });
  }

  getItemsObj() {
    return this._itemsObj;
  }

  getcurItem(n) {
    return this._itemsObj[n];
  }

  addItemToItemsObj() {
    let e = incr();
    let obj = {
      text: `Text ${e}`,
      title: `Title ${e}`,
      date: new Date()
    };
    obj.dead_date = new Date(`${obj.date.getFullYear()}-${obj.date.getMonth()+2}-${obj.date.getDate()}`)
    this._itemsObj[e] = {};
    this._itemsObj[e].model = new itemToDo__model(obj.text, obj.title, obj.date, obj.dead_date); 
    this._itemsObj[e].view = new itemToDo__view(this._itemsObj[e].model);
    this._itemsObj[e].controller = new itemToDo__controller(this._itemsObj[e].view, this._itemsObj[e].model);
    return e;
  }

}