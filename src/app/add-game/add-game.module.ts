import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddGameComponent } from './add-game.component';

@NgModule({
  declarations: [AddGameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{ path: "", component: AddGameComponent }]
    )
  ],
})
export class AddGameModule {}
