import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import data from '../../../assets/data.json';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  title = 'Category';
  categories: any[] = [];
  selectedCarrieres: any[] = [];
  loading: boolean = true;

  constructor(
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.categories = data.options?.['categories'];
    this.loading = false;
  }

  filterGlobal(dt: any, event: Event) {
    console.log(this.selectedCarrieres);
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
