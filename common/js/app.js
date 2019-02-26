document.addEventListener('DOMContentLoaded', (e) => {
  const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
                Expedita atque autem praesentium, assumenda tempora quasi eaque asperiores voluptatum, \
                magnam nemo nostrum officiis, inventore consequuntur nesciunt quidem iusto. \
                Dignissimos delectus vitae molestias eveniet, suscipit nostrum error sed reprehenderit \
                quidem distinctio, similique placeat facilis consequuntur culpa esse.';
  const model = new itemToDo__model(text,'Title 1',new Date());
  const view = new itemToDo__view(model);
  const controller = new itemToDo__controller(view, model);
  const text2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                Temporibus maiores officia, blanditiis assumenda nisi iusto nostrum impedit at, \
                perferendis repellendus, placeat nam. Doloribus!';
  const model2 = new itemToDo__model(text2, 'Title 2', new Date());
  const view2 = new itemToDo__view(model2);
  const controller2 = new itemToDo__controller(view2, model2);
  const test = document.getElementById('test');

  view.render(test);
  view2.render(test);
});