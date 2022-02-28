import { NgModule } from '@angular/core';
import { CardModule } from '../shared/components/card/card.module';
import { CommonModule } from '@angular/common';
import { ListItemModule } from '../shared/components/list-item/list-item.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CardModule,
    CommonModule,
    ListItemModule,
    RouterModule.forChild(
      [{ path: "", component: HomeComponent }]
    ),
  ],
})
export class HomeModule {}
