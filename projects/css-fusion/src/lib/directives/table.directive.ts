import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[cssFusionTable]',
})
export class TableDirective {
  @Input() tableData: any[] = [];
  @Input() columnIndex: number = 0;

  @Output() sortChanged = new EventEmitter<any[]>();
  @Output() sortStatus = new EventEmitter<string>();

  private currentSortColumn: number | null = null;
  private isAscending = true;

  constructor() {}

  @HostListener('click')
  onClick() {
    if (!this.tableData?.length) return;

    if (this.currentSortColumn === this.columnIndex) {
      this.isAscending = !this.isAscending;
    } else {
      this.currentSortColumn = this.columnIndex;
      this.isAscending = true;
    }

    const sorted = [...this.tableData].sort((a, b) => {
      const valA = a.tr[this.columnIndex];
      const valB = b.tr[this.columnIndex];
      return this.isAscending
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });

    const statusText = this.isAscending ? 'Ascending' : 'Descending';
    this.sortStatus.emit(statusText);
    this.sortChanged.emit(sorted);
  }

  // Allow clearing from outside
  clearSort(originalData: any[]) {
    this.currentSortColumn = null;
    this.isAscending = true;
    this.sortChanged.emit([...originalData]);
    this.sortStatus.emit('No sort');
  }
}
