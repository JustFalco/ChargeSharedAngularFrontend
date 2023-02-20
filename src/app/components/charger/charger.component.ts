import { HttpClient } from '@angular/common/http';
import {
  Component
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Charger } from '../charger-list/charger-list.component';
import Map from 'ol/Map';
import { BehaviorSubject } from 'rxjs';
import { MapService } from 'src/app/core/services/map.service';


@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css'],
})
export class ChargerComponent {
  public charger?: Charger;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public utils: UtilsService,
    private mapService: MapService
  ) {
    http
      .get<Charger>(`/api/chargers/${this.route.snapshot.paramMap.get('id')}`)
      .subscribe(
        (result) => {
          this.charger = result;
          
          this.mapService.setLongLat(this.charger.adres.longitude, this.charger.adres.latitude)
          
          console.log(result);
        },
        (error) => console.error(error)
      );
  }
}
