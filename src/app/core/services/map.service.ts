import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private longtitudeSource = new Subject<number>();
  private latitudeSource = new Subject<number>();

  lontitude$ = this.longtitudeSource.asObservable()
  latitiude$ = this.latitudeSource.asObservable()

  setLongLat(lon:number, lat:number){
    this.longtitudeSource.next(lon)
    this.latitudeSource.next(lat)
  }

}
