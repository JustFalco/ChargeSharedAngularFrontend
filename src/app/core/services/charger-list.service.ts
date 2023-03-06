import { Time } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Charger } from 'src/app/components/charger-list/charger-list.component';

@Injectable({
  providedIn: 'root'
})
export class ChargerListService {

  private chargerListSubj = new Subject<Charger[]>();

  chargerListObs = this.chargerListSubj.asObservable();

  getChargers(){
    let params = new HttpParams()
      .set("useFilters", false)

    this.http.get<Charger[]>('https://chargesharedapitest.azurewebsites.net/api/chargers', {params}).subscribe(
      (result) => {
        this.chargerListSubj.next(result)
      },
      (error) => console.error(error)
    );
  }

  filterChargers(filter: Filters){
    let params = new HttpParams()
      .set("useFilters", true)
      .set("adresPostalCity", filter.adresPostalCity)
      .set("maxPrice", filter.maxPrice)
      .set("chargerType", filter.chargerType)
      // .set("availibleDate", filter.availibleDate.toString())
      // .set("availibleTime", `${filter.availibleTime.hours}:${filter.availibleTime.minutes}`)

    this.http.get<Charger[]>('https://chargesharedapitest.azurewebsites.net/api/chargers', {params}).subscribe(
      (result) => {
        this.chargerListSubj.next(result)
      },
      (error) => console.error(error)
    );
  }

  constructor(public http: HttpClient) {
    this.getChargers()
  }
  
}

export interface Filters{
  adresPostalCity: string,
  maxPrice: number,
  chargerType: number,
  // availibleDate: Date,
  // availibleTime: Time
}