import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Table } from '../../../../projects/css-fusion/src/public-api';

// import { Table } from '@dev.spot/css-fusion';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  themeClr: string = '';
  tableSm: any = [];
  tableMd: any = [];
  tableLg: any = [];
  tableMini: any = [];
  originalTableLg: any = [];
  getInBuildClr: string = 'blue';
  tableService!: Table;
  sortStatus: string = 'No sort';

  constructor(private service: SharedService) {
    this.tableSm = this.service.tableSm;
    this.tableMd = this.service.tableMd;
    this.tableLg = this.service.tableLg;
    this.originalTableLg = [...this.tableLg];
    this.tableMini = this.service.tableMini;
    this.tableService = new Table();
  }

  ngOnInit(): void {}

  inBuildClrs(param: string) {
    this.getInBuildClr = param;
  }

  sortTable(columnIndex: number) {
    this.tableLg = this.tableService.sortData(this.tableLg, columnIndex);
    this.sortStatus = this.tableService.isAscending ? 'A-Z' : 'Z-A';
  }

  clearSort() {
    this.tableService.clearSort();
    this.tableLg = [...this.originalTableLg];
    this.sortStatus = 'No sort';
  }
}
