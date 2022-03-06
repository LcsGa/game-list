import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "./shared/components/button/button.module";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RestdbioInterceptor } from "./shared/interceptors/restdbio.interceptor";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
  { path: "add-game", loadChildren: () => import("./add-game/add-game.module").then(m => m.AddGameModule)  }
];

@NgModule({
  imports: [BrowserModule, ButtonModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RestdbioInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
