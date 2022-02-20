import { Component } from "@angular/core";

@Component({
  selector: "app-button",
  template: "<button><ng-content></ng-content></button>",
  styles: [
    `
      button {
        background: var(--primary);
        color: var(--secondary);
        border: 1px solid var(--secondary);
        border-radius: 4px;
        padding: 6px 12px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }

      button:hover {
        background: var(--secondary);
        color: var(--primary);
      }
    `,
  ],
})
export class ButtonComponent {}
