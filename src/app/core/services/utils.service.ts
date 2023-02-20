import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public getChargerTypeName(typeNum: number): string {
    switch (typeNum) {
      case 0:
        return 'J1772';
      case 1:
        return 'CCS_Combo_1';
      case 2:
        return 'Type_2';
      case 3:
        return 'CCS_Combo_2';
      case 4:
        return 'CHAdeMO';
      case 5:
        return 'Tesla';
      case 6:
        return 'Muur stekker';
      default:
        return 'No type found';
    }
  }
}
