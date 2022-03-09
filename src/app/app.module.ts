import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CareerComponent } from './modals/career/career.component';
import { CategoryComponent } from './modals/category/category.component';
import { ManagerComponent } from './modals/manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    CategoryComponent,
    ManagerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    MultiSelectModule,
    DropdownModule,
    InputTextModule,
    DynamicDialogModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
