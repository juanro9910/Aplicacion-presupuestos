class Ingreso extends Dato {
    static contradorIngreso = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contradorEgreso;
    }
    get id() {
        return this._id;
    }
}