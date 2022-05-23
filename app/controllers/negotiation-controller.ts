import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotitationsView } from "../views/negotiations-view.js";
import { MessageView } from "../views/message-view.js";
import { daysOfTheWeek } from "../enums/days-of-the-week.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotitationsView("#negotiationsView");
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#value");
    this.negotiationsView.update(this.negotiations);
  }

  private workingDay(date: Date) {
    return (
      date.getDay() > daysOfTheWeek.SUNDAY &&
      date.getDay() < daysOfTheWeek.SATURDAY
    );
  }

  public add(): void {
    const negotiation = this.createNegotiation();
    if (!this.workingDay(negotiation.date)) {
      this.messageView.update("Apenas negociações em dias úteis são aceitas");
      return;
    }
    this.negotiations.add(negotiation);
    this.cleanForm();
    this.updateView();
  }

  private createNegotiation(): Negotiation {
    const regex = /-/g;
    const date = new Date(this.inputDate.value.replace(regex, ","));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, amount, value);
  }

  private cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Negociação adicionada com sucesso");
  }
}
