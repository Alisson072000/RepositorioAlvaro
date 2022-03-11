import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import data from '../../../assets/data.json';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  title = 'Managers';
  managers: any[] = [];
  selectedManagers: any[] = [];
  loading: boolean = true;

  constructor(private dynamicDialogRef: DynamicDialogRef) {}

  ngOnInit(): void {
    this.loading = true;
    this.managers = data.options?.['managers'];
    this.loading = false;
  }

  filterGlobal(dt: any, event: Event) {
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  ngOnDestroy() {
    this.dynamicDialogRef.close(this.selectedManagers);
  }
}
