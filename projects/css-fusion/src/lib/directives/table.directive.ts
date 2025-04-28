import { Directive } from '@angular/core';

@Directive({
  selector: '[cssFusionTable]',
})
export class TableDirective {
  private currentSortColumn: number | null = null;
  public isAscending: boolean = true;

  constructor() {}

  sortData(data: any[], columnIndex: number): any[] {
    if (this.currentSortColumn === columnIndex) {
      this.isAscending = !this.isAscending;
    } else {
      this.currentSortColumn = columnIndex;
      this.isAscending = true;
    }

    return data.sort((a, b) => {
      const valA = a.tr[columnIndex];
      const valB = b.tr[columnIndex];
      return this.isAscending
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
  }

  clearSort() {
    this.currentSortColumn = null;
    this.isAscending = true;
  }
}
