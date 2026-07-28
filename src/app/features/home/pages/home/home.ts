import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { Pricing } from '../../components/pricing/pricing';
import { Gallery } from '../../components/gallery/gallery';
import { WhyChooseUs } from '../../components/why-choose-us/why-choose-us';
import { BookingBanner } from '../../components/booking-banner/booking-banner';
import { AboutUs } from '../../components/about-us/about-us';
import { Destinations } from '../../components/destinations/destinations';
import { LocationMap } from '../../components/location-map/location-map';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Services,
    Pricing,
    Gallery,
    WhyChooseUs,
    BookingBanner,
    AboutUs,
    Destinations,
    LocationMap
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}