import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  ViewformequipService {
  constructor(private http: HttpClient ){ }

  viewequipForm(id:any)
 {
  return this.http.get("http://localhost:3000/incidentreport/" +id)

  

}
  }

