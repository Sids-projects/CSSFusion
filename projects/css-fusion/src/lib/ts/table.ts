export class Table {
  private currentSortColumn: string | null = null;
  public isAscending: boolean = true;

  sortData(data: any[], columnIndex: number): any[] {
    if (this.currentSortColumn === columnIndex.toString()) {
      this.isAscending = !this.isAscending;
    } else {
      this.currentSortColumn = columnIndex.toString();
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
