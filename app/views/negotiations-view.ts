import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotitationsView extends View<Negotiations> {
  template(model: Negotiations): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model
            .list()
            .map((negotiation) => {
              return `
            <tr>
              <td>${new Intl.DateTimeFormat("pt-BR").format(
                negotiation.date
              )}</td>
              <td>${negotiation.amount}</td>
              <td>${negotiation.value}</td>
            </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    `;
  }
}
