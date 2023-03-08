import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ChargerListService,
  Filters,
} from 'src/app/core/services/charger-list.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-charger-list-filter',
  templateUrl: './charger-list-filter.component.html',
  styleUrls: ['./charger-list-filter.component.css'],
})
export class ChargerListFilterComponent {
  filterShown: boolean = true;
  filtersUsed: string[];


  filterForm = new FormGroup({
    adresPostalCity: new FormControl(''),
    minPrice: new FormControl(0),
    maxPrice: new FormControl(100),
    chargerType: new FormControl(10),
    startDate: new FormControl(),
    startTime: new FormControl(),
  });

  constructor(public chargerService: ChargerListService, public utils: UtilsService) {
    this.filtersUsed = []
  }

  public filter() {
    this.filtersUsed = []
    let filters: Filters = {
      adresPostalCity: this.filterForm.value.adresPostalCity!,
      minPrice: this.filterForm.value.minPrice!,
      maxPrice: this.filterForm.value.maxPrice!,
      chargerType: this.filterForm.value.chargerType!,
    };

    console.log(filters)

    if(typeof this.filterForm.value.adresPostalCity!='undefined' && this.filterForm.value.adresPostalCity){
      this.filtersUsed.push(`Locatie: ${this.filterForm.value.adresPostalCity!}`)
    }

    this.filtersUsed.push(`Minimale prijs: ${this.filterForm.value.minPrice!}`)
    this.filtersUsed.push(`Maximale prijs: ${this.filterForm.value.maxPrice!}`)
    

    if(this.filterForm.value.chargerType !== 10){
      this.filtersUsed.push(`Type oplaadpunt: ${this.utils.getChargerTypeName(Number.parseInt(this.filterForm.value.chargerType!.toString()))}`)
    }

    this.chargerService.filterChargers(filters);

    this.filterShown = !this.filterShown;
  }

  removeFilters() {
    this.filterForm.reset({adresPostalCity: '', minPrice: 0, maxPrice: 100, chargerType: 10 });
    this.chargerService.getChargers();
    this.filterShown = !this.filterShown;
    this.filtersUsed = []
  }
}
