import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellistComponent } from './marvel-list/marvel-list.component';
import { MarvelCardComponent } from './marvel-card/marvel-card.component';
import { HeaderComponent } from '../marvel/header/header.component';
@NgModule({
  declarations: [MarvellistComponent, MarvelCardComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [MarvellistComponent],
})
export class MarvelModule {}
