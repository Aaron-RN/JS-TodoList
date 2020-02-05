class Event {
  constructor(sender) {
    this.sender = sender;
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  notify(args) {
    this.listeners.forEach((listener) => {
      listener(this.sender, args);
    });
  }
}

export default Event;
