import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charger-register-form',
  templateUrl: './charger-register-form.component.html',
  styleUrls: ['./charger-register-form.component.css'],
})
export class ChargerRegisterFormComponent implements OnInit {
  newChargerForm = new FormGroup({
    chargerName: new FormControl(),
    chargerType: new FormControl(),
    pricePerHour: new FormControl(),
    quickcharge: new FormControl(false),
    postalCode: new FormControl(),
    province: new FormControl(),
    houseNumber: new FormControl(),
    houseAddition: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(),
    country: new FormControl(),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newChargerForm.controls['postalCode'].valueChanges.subscribe(
      (value) => {
        this.completeForm(value);
      }
    );
  }

  completeForm(postal: string) {
    console.log(postal);
    console.log(postal.match(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i));
    if (postal.match(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i)) {
      console.log('Getting form data!');

      fetch(`https://localhost:7234/api/adress/${postal}`)
        .then((x) => x.json())
        .then((x) => {
          console.log(x);
          this.newChargerForm.controls['city'].setValue(x.city);
          this.newChargerForm.controls['city'].disable({ onlySelf: true });
          this.newChargerForm.controls['province'].setValue(x.province);
          this.newChargerForm.controls['province'].disable({
            onlySelf: true,
          });
          this.newChargerForm.controls['country'].setValue(x.country);
          this.newChargerForm.controls['country'].disable({
            onlySelf: true,
          });
          this.newChargerForm.controls['street'].setValue(x.street);
          this.newChargerForm.controls['street'].disable({
            onlySelf: true,
          });
        });
    } else {
      this.newChargerForm.controls['city'].reset();
      this.newChargerForm.controls['province'].reset();
      this.newChargerForm.controls['country'].reset();
      this.newChargerForm.controls['street'].reset();
      this.newChargerForm.enable({ onlySelf: true });
    }
  }

  submitCharger() {
    if (this.newChargerForm.invalid) {
      alert('Form is invalid!');
      this.newChargerForm.reset();
      return;
    }
    console.log(this.newChargerForm.getRawValue());

    fetch('https://localhost:7234/api/chargers', {
      method: 'POST',
      body: JSON.stringify(this.newChargerForm.getRawValue()),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((x) => {
        if (x.ok) {
          return x.json();
        }

        return null;
      })
      .then((game) => {
        if (game == null) {
          return;
        }
        this.newChargerForm.reset();
        this.router.navigateByUrl(`/chargers`);
      });
  }
}

// fetch(
//   `https://api.mapbox.com/geocoding/v5/mapbox.places/${postal}.json?limit=10&types=place%2Cpostcode%2Caddress%2Ccountry&access_token=pk.eyJ1IjoianVzdGZhbGNvIiwiYSI6ImNrZTAwMTh5ZTR4aHQyc3JvdDRxcDl4c3MifQ.Wkvtsel5K0rl3ksLkOt_Yg`
// )
//   .then((x) => x.json())
//   .then((x) => {
//     x.features[0].context.forEach((element: any) => {
//       console.log(element);
//       if (element.id.includes('place')) {
//         this.newChargerForm.controls['city'].setValue(element.text);
//         this.newChargerForm.controls['city'].disable({ onlySelf: true });
//       } else if (element.id.includes('region')) {
//         this.newChargerForm.controls['province'].setValue(element.text);
//         this.newChargerForm.controls['province'].disable({
//           onlySelf: true,
//         });
//       } else if (element.id.includes('country')) {
//         this.newChargerForm.controls['country'].setValue(element.text);
//         this.newChargerForm.controls['country'].disable({
//           onlySelf: true,
//         });
//       }
//     });

//     console.log(x.features[0].center);
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${x.features[0].center[0]},${x.features[0].center[1]}.json?limit=1&types=place%2Cpostcode%2Caddress%2Ccountry&access_token=pk.eyJ1IjoianVzdGZhbGNvIiwiYSI6ImNrZTAwMTh5ZTR4aHQyc3JvdDRxcDl4c3MifQ.Wkvtsel5K0rl3ksLkOt_Yg`
//     )
//       .then((x) => x.json())
//       .then((x) => {
//         this.newChargerForm.controls['street'].setValue(
//           x.features[0].text
//         );
//         this.newChargerForm.controls['street'].disable({
//           onlySelf: true,
//         });
//       });
//   });
