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

    /* 
      README: Explicit Casting
    */

    this.inputDate = <HTMLInputElement> document.querySelector("#date") ;
    this.inputAmount = document.querySelector("#amount") as HTMLInputElement;
    this.inputValue =  document.querySelector("#value") as HTMLInputElement;
    this.negotiationsView.update(this.negotiations);
  }

  private workingDay(date: Date) {
    return (
      date.getDay() > daysOfTheWeek.SUNDAY &&
      date.getDay() < daysOfTheWeek.SATURDAY
    );
  }

  public add(): void {
    const negotiation = Negotiation.createOf(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value
    );
    if (!this.workingDay(negotiation.date)) {
      this.messageView.update("Apenas negociações em dias úteis são aceitas");
      return;
    }
    this.negotiations.add(negotiation);
    this.cleanForm();
    this.updateView();
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
