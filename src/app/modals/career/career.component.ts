import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import data from '../../../assets/data.json';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  title = 'Careers';
  carriers: any[] = [];
  selectedCarrieres: any[] = [];
  loading: boolean = true;

  constructor(
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.carriers = data.options?.['carriers'];
    this.loading = false;
  }

  filterGlobal(dt: any, event: Event) {
    console.log(this.selectedCarrieres);
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
