function classof(o) {
  if (o === null) return "Null";
  if (o === undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8,-1);
}

function increment(i) {
  let incr = i || 0;
  return function() {
    return incr++;
  }
}

let incr = increment();

function getObjcts() {
  let obj = {};
  for(let i=0; i<=2; i++) {
    let k = {};
    k.title =`Title ${i}`;
    k.text =`There is must be text ${i}`;
    k.date = new Date();
    k.dead_date = new Date(`${k.date.getFullYear()}-${k.date.getMonth()+2}-${k.date.getDate()}`);
    obj[incr()] = k;
  }
  return obj;
}