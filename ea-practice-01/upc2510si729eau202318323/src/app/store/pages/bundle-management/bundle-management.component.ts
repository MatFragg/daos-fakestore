import { Component,AfterViewInit, OnInit, ViewChild,Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from "@ngx-translate/core";
import { Bundle} from '../../model/bundle.entity';
import {BundlesService} from '../../services/bundles.service';
import {BundleCardComponent} from '../../components/bundle-card/bundle-card.component';
import {forkJoin, map} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-bundle-management',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, TranslateModule, BundleCardComponent, NgIf],
  templateUrl: './bundle-management.component.html',
  styleUrl: './bundle-management.component.css'
})
export class BundleManagementComponent {
  constructor(private bundlesService: BundlesService) { }
  bundlesWithSavings: any[] = [];


  ngOnInit() {
    this.bundlesService.getAll().subscribe((bundles: Bundle[]) => {
      const bundleRequests = bundles.map(bundle =>
        this.bundlesService.getProductsForBundle(bundle.id).pipe(
          map(products => {
            const totalProductPrice = products.reduce((acc, prod) => acc + prod.price, 0);
            const youSave = +(totalProductPrice - bundle.price).toFixed(2);
            return {
              ...bundle,
              products,
              youSave: youSave > 0 ? youSave : 0,
            };
          })
        )
      );

      forkJoin(bundleRequests).subscribe((bundlesWithSavings) => {
        this.bundlesWithSavings = bundlesWithSavings;
        console.log(this.bundlesWithSavings);
      });
    });
  }
}
