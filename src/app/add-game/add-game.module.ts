import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../shared/components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddGameComponent } from './add-game.component';

@NgModule({
  declarations: [AddGameComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AddGameComponent }]),
  ],
})
export class AddGameModule {}
