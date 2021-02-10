import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { LazyImageComponent } from './lazy-image/lazy-image.component';

@NgModule({
  declarations: [LazyImageComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    LazyImageComponent,
  ]
})
export class CommonComponentsModule { }
