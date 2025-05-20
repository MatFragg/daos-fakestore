import { Component,Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Bundle } from '../../model/bundle.entity';
import { Product } from '../../model/product.entity';
import {CurrencyPipe, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-bundle-card',
  imports: [MatCardModule, MatSnackBarModule, NgIf, NgOptimizedImage, CurrencyPipe],
  templateUrl: './bundle-card.component.html',
  styleUrl: './bundle-card.component.css'
})

export class BundleCardComponent {
  @Input() bundle!: any;

  constructor() {}
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/img/defaultImage.webp';
  }


}
