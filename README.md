# TypeScript Project
---
## Notes

`tsc`  is a compiler that comes integrated with TypeScript

`ts-node-dev`  is an executor to be called at the "start"

---
## Protected class

A class with the `protected` modifier allow access to its properties in its child classes

---
## Abstract class

An abstract class not allow a direct instance of it, it can only br instantiated after being inherited by the child class

---
## Static method

Every `static` method is a method that I can call from class, without the need for a instance

---
## Explicit Casting


Enable in
[tsconfig.json](//tsconfig.json)  
```JSON
"strictNullChecks": true
```


Error in
[negotiation-controller.ts](//app/controllers/negotiation-controller.ts)
```typescript

  (property) NegotiationController.inputDate: HTMLInputElement
  Type 'HTMLInputElement | null' is not assignable to type 'HTMLInputElement'.
  Type 'null' is not assignable to type 'HTMLInputElement'.ts(2322) 
    
  this.inputDate = document.querySelector("#date");
```

Solution
```typescript
  this.inputDate = document.querySelector("#date") as HTMLInputElement;
```
Or
```typescript
this.inputDate = <HTMLInputElement> document.querySelector("#date");
```