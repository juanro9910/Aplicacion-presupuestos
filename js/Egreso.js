class Egreso extends Dato {
    static contradorEgreso = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Egreso.contradorEgreso;
    }
    get id() {
        return this._id;
    }
}