import { Negotiation } from "./negotiation.js";

export class Negotiations {
  
  // private negotiations: Array<Negotiation> = [];
  private negotiations: Negotiation[] = [];

  add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  // list(): ReadonlyArray<Negotiation> {
  list(): readonly Negotiation[] {
    return this.negotiations;
  }
}
