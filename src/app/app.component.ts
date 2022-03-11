import { Component, OnInit } from '@angular/core';
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
  loading: boolean = true;
  selectedOption: selectedOption = {};
  selectedCategory: any[] = [];
  selectedManagers: any[] = [];

  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {
    this.loading = true;
    this.loading = false;
  }

  toAssign(): string {
    // código para assignar
    return 'envio de datos a la db';
  }

  showCareerComponent() {
    const ref = this.dialogService.open(CareerComponent, {
      header: 'Choose A Career',
      width: '90%',
    });
    ref.onClose.subscribe((career: any) => {
      if (career) {
        this.selectedOption.selectedCarrier = career;
      }
    });
  }

  showCategoryComponent() {
    const ref = this.dialogService.open(CategoryComponent, {
      header: `Choose A Category`,
      width: '90%',
    });
    ref.onClose.subscribe((category) => {
      this.selectedOption.selectedCategory = category;
    });
  }
  showManagerComponent() {
    const ref = this.dialogService.open(ManagerComponent, {
      header: 'Choose A Manager',
      width: '90%',
    });
    ref.onClose.subscribe((managers) => {
      this.selectedOption.selectedManagers = managers;
    });
  }
}

interface selectedOption {
  selectedCarrier?: { id: number; name: string };
  selectedCategory?: { id: number; name: string };
  selectedManagers?: [{ id: number; name: string }];
}
