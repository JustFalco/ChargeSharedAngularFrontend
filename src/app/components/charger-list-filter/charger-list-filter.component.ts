import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChargerListService, Filters } from 'src/app/core/services/charger-list.service';

@Component({
  selector: 'app-charger-list-filter',
  templateUrl: './charger-list-filter.component.html',
  styleUrls: ['./charger-list-filter.component.css']
})
export class ChargerListFilterComponent {
  filterForm = new FormGroup({
    adresPostalCity: new FormControl(""),
    maxPrice: new FormControl(0),
    chargerType: new FormControl(10),
    startDate: new FormControl(),
    startTime: new FormControl()
  });

  constructor(public chargerService: ChargerListService){}

  public filter(){
    let filters: Filters = {
      adresPostalCity: this.filterForm.value.adresPostalCity!,
      maxPrice: this.filterForm.value.maxPrice!,
      chargerType: this.filterForm.value.chargerType!
    }

    this.chargerService.filterChargers(filters)
  }

  removeFilters(){
    this.filterForm.reset({maxPrice: 0, chargerType: 10})
    this.chargerService.getChargers()
  }
}
