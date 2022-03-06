import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  template: `<button [disabled]="disabled" [ngClass]="buttonClass"><ng-content></ng-content></button>`,
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {

  @Input()
  public disabled = false;

  @Input()
  public buttonStyle: "primary" | "outlined" = "primary";

  public get buttonClass(): string {
    return `button button--${this.buttonStyle}`;
  }

}
