import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "./shared/components/button/button.module";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
  { path: "add-game", loadChildren: () => import("./add-game/add-game.module").then(m => m.AddGameModule)  }
];

@NgModule({
  imports: [BrowserModule, ButtonModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
