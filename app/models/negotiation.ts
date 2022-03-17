export class Negotiation {
    private _date;
    private _amount;
    private _value;

    constructor(date, amount, value) {
        this._date = date;
        this._amount = amount;
        this._value = value;
    }

    get data() {
        return this._date;
    }

    get quantidade() {
        return this._amount;
    }

    get valor() {
        return this._value;
    }

    get volume() {
        return this._amount * this._value;
    }
}