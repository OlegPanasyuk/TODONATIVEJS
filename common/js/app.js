document.addEventListener('DOMContentLoaded', (e) => {
  const model = new itemToDo__model('заметка','Title 1',new Date());
  const view = new itemToDo__view(model);
  const controller = new itemToDo__controller(view, model);
  const model2 = new itemToDo__model('заметка 2', 'Title 2', new Date());
  const view2 = new itemToDo__view(model2);
  const controller2 = new itemToDo__controller(view2, model2);
  const test = document.getElementById('test');

  view.render(test);
  view2.render(test);
});