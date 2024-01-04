import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import * as XLSX from 'xlsx';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableModule, 
    ButtonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SampleUI';
  products!: any[];

  constructor() {
    this.products = [
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      // ... more products
    ];
  }

  exportExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.products);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');
    XLSX.writeFile(wb, 'ProductsData.xlsx');
  }
}
