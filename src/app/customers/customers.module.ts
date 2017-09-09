import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, AddComponent, IndexComponent]
})
export class CustomersModule { }
