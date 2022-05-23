import { Negotiation } from "./negotiation.js";

export class Negotiations {
  // private negotiations: Array<Negotiation> = [];
  private negotiations: Negotiation[] = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  // list(): ReadonlyArray<Negotiation> {
  public list(): readonly Negotiation[] {
    return this.negotiations;
  }
}
