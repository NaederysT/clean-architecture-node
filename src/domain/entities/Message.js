class Message {
  constructor(text) {
    if (!text) {
      throw new Error("El mensaje no puede estar vacío");
    }

    this.text = text;
  }

  getText() {
    return this.text;
  }
}

export default Message;