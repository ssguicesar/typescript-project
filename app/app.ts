import { NegotiationController } from "./controllers/negotiation-controller.js";

const controller = new NegotiationController;

const form =  document.querySelector('.form');

if(form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
  })
} else {
  throw Error('The application could not br started. Check if the exist')
}