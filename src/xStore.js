class Store {
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

  // private
  _notifyListeners() {
    this.listeners.forEach((listener) => {
      listener(this.value);
    });
  }
}

export default new Store(5);
