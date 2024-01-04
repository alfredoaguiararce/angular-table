import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableModule],
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
      // ... more products
    ];
  }
}
