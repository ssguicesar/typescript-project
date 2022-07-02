export class Negotiation {
  // Example 1

  // private _date: Date;
  // private _amount: number;
  // private _value: number;

  // constructor( date: Date, amount: number, value: number) {
  //     this._date = date;
  //     this._amount = amount;
  //     this._value = value;
  // }

  // ---------------------------------------------------

  // Example 2

  // constructor(
  //     private _date: Date,
  //     private _amount: number,
  //     private _value: number
  // ) {}

  // get date(): Date {
  //     return this._date;
  // }

  // get amount(): number {
  //     return this._amount;
  // }

  // get value(): number {
  //     return this._value;
  // }

  // ---------------------------------------------------

  constructor(
    private _date: Date,
    public readonly amount: number,
    public readonly value: number
  ) {}

  get volume(): number {
    return this.amount * this.value;
  }

  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }

  public static createOf(
    dateString: string,
    amountString: string,
    valueString: string
  ): Negotiation {
    const regex = /-/g;
    const date = new Date(dateString.replace(regex, ","));
    const amount = parseInt(amountString);
    const value = parseFloat(valueString);
    return new Negotiation(date, amount, value);
  }
}
