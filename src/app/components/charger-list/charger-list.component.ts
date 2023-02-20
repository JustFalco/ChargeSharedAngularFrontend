import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-charger-list',
  templateUrl: './charger-list.component.html',
  styleUrls: ['./charger-list.component.css'],
})
export class ChargerListComponent {
  public chargers?: Charger[];

  constructor(http: HttpClient, public utils: UtilsService) {
    http.get<Charger[]>('/api/chargers').subscribe(
      (result) => {
        this.chargers = result;
        console.log(result);
      },
      (error) => console.error(error)
    );
  }

  public goToChargerPage(id: number) {
    alert(`test ${id}`);
  }
}

export interface Charger {
  id: number;
  name: string;
  chargerType: number;
  pricePerHour: number;
  quickCharge: boolean;
  adres: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    province: string;
    houseNumber: string;
    houseAddition: string;
    latitude: number;
    longitude: number;
  };
}

export enum ChargerType {
  J1772 = 'J1772',
  CCS_Combo_1 = 'CCS_Combo_1',
  Type_2 = 'Type_2',
  CCS_Combo_2 = 'CCS_Combo_2',
  CHAdeMO = 'CHAdeMO',
  Tesla = 'Tesla',
  Wall_Outlet = 'Wall_Outlet',
}
