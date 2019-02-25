class EventEmmiter {
  constructor() {
    this._evnts = {};
  }
  
  on(evnt, listener) {
    (this._evnts[evnt] || (this._evnts[evnt] = [])).push(listener);
    return this;
  }

  emit(evnt, arg) {
    (this._evnts[evnt] || []).slice().forEach(element => {
      element(arg);
    });
  }
}