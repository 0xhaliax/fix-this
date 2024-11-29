class Lib {
  constructor(options) {
    this.any = true;
    Object.assign(this, options);
  }

  get() {
    return this.any;
  }

  getMessage() {
    return 'Hi, this is a Publ1c L1br4ry! (=';
  }
}

module.exports = Lib;
