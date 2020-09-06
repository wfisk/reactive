export default class Store {
  constructor(value) {
    this.value = value;
    this.listeners = [];
  }

  set(value) {
    this.value = value;
    this._notifyListeners();
  }

  subscribe(callback) {
    this.listeners.push(callback);
    this._notifyListeners();
    return () => {};
  }

  update(callback) {
    this.value = callback(this.value);
    this._notifyListeners();
  }

  // private
  _notifyListeners() {
    this.listeners.forEach((listener) => {
      listener(this.value);
    });
  }
}
