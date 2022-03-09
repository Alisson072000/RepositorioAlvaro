import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';
import { DialogService } from 'primeng/dynamicdialog';
import { CareerComponent } from './modals/career/career.component';
import { CategoryComponent } from './modals/category/category.component';
import { ManagerComponent } from './modals/manager/manager.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService],
})
export class AppComponent implements OnInit {
  title = 'Responsables';
  assigned: boolean = false;
  carriers: any[] = [];
  selectedCarrieres: any[] = [];
  loading: boolean = true;

  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {
    this.loading = true;
    this.carriers = data.options?.['carriers'];
    this.loading = false;
  }

  filterGlobal(dt: any, event: Event) {
    console.log(this.selectedCarrieres);
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  deleteSelectedOption() {
    // Eliminar opción elegida del form
  }

  showCareerComponent() {
    const ref = this.dialogService.open(CareerComponent, {
      header: 'Choose A Career',
      width: '90%',
    });
  }
  showCategoryComponent() {
    const ref = this.dialogService.open(CategoryComponent, {
      header: `Choose A Category`,
      width: '90%',
    });
  }
  showManagerComponent() {
    const ref = this.dialogService.open(ManagerComponent, {
      header: 'Choose A Manager',
      width: '90%',
    });
  }
}

// https://www.primefaces.org/primeng/#/dynamicdialog
