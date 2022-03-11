import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import data from '../../../assets/data.json';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit, OnDestroy {
  title = 'Careers';
  carriers: any[] = [];
  selectedCarrier: any = {};
  loading: boolean = true;

  constructor(private dynamicDialogRef: DynamicDialogRef) {}

  ngOnInit(): void {
    this.loading = true;
    this.carriers = data.options?.['carriers'];
    this.loading = false;
  }

  filterGlobal(dt: any, event: Event) {
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  selectOption(id: number) {
    this.carriers.find(
      (carrier) => (this.selectedCarrier = carrier.id === id ? carrier : null)
    );
    this.dynamicDialogRef.close(this.selectedCarrier);
    this.ngOnDestroy();
  }

  ngOnDestroy() {}
}
