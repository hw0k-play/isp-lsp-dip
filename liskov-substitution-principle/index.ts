console.log('liskov');

namespace lsp1 {
  class Rectangle {
    protected _width: number = -1;
    protected _height: number = -1;

    public get width() {
      return this._width;
    }
    public set width(w: number) {
      this._width = w;
    }

    public get height() {
      return this._height;
    }
    public set height(h: number) {
      this._height = h;
    }

    public get area() {
      return this._width * this._height;
    }
  }

  class Square extends Rectangle {
    public set width(w: number) {
      this._width = w;
      this._height = w;
    }

    public set height(h: number) {
      this._width = h;
      this._height = h;
    }
  }

  const rec: Rectangle = new Square();
  rec.width = 3;
  rec.height = 4;

  console.log(rec.area === 12);
}

namespace lsp2 {
  interface Shape {
    readonly area: number;
  }

  class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    public get area() {
      return this.width * this.height;
    }
  }

  class Square implements Shape {
    constructor(public width: number) {}

    public get area() {
      return this.width ** 2;
    }
  }

  const rec: Shape = new Rectangle(3, 4);
  console.log(rec.area);

  const sq: Shape = new Square(4);
  console.log(sq.area);
}
