import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM, Vector } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import * as proj from 'ol/proj';
import { BehaviorSubject } from 'rxjs';
import { MapService } from 'src/app/core/services/map.service';
import Layer from 'ol/layer/Layer';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import * as source from 'ol/source';
import * as olLayer from 'ol/layer';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  public map!: Map;
  public long = 0;
  public lat = 0;
  public zoom = 17;
  view: View | undefined;

  constructor(private mapService: MapService) {}

  updateView() {
    this.view?.setCenter(proj.fromLonLat([this.long, this.lat]));

    const layer = new olLayer.Vector({
      source: new source.Vector({
        features: [
          new Feature({
            geometry: new Point(proj.fromLonLat([this.long, this.lat])),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'https://openlayers.org/en/latest/examples/data/icon.png',
        }),
      }),
    });

    this.map.addLayer(layer);
  }

  createMap() {
    this.view = new View({
      center: proj.fromLonLat([this.long, this.lat]),
      zoom: this.zoom,
      maxZoom: 18,
    });

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: this.view,
    });
  }

  ngOnInit(): void {
    this.createMap();

    this.mapService.latitiude$.subscribe((lat) => {
      this.lat = lat;
      this.updateView();
    });

    this.mapService.lontitude$.subscribe((lon) => {
      this.long = lon;
      this.updateView();
    });
  }
}
