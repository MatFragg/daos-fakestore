import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Bundle} from '../model/bundle.entity';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BundlesService extends BaseService<Bundle> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/bundles';
  }
}
