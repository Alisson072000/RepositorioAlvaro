import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import data from '../../../assets/data.json';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  title = 'Category';
  categories: any[] = [];
  selectedCategory: any[] = [];
  loading: boolean = true;

  constructor(private dynamicDialogRef: DynamicDialogRef) {}

  ngOnInit(): void {
    this.loading = true;
    this.categories = data.options?.['categories'];
    this.loading = false;
  }

  filterGlobal(dt: any, event: Event) {
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  selectOption(id: number) {
    this.categories.find(
      (category) =>
        (this.selectedCategory = category.id === id ? category : null)
    );
    this.dynamicDialogRef.close(this.selectedCategory);
    this.ngOnDestroy();
  }

  ngOnDestroy() {}
}
