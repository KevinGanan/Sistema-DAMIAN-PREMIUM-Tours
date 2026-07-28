import { Component } from '@angular/core';

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [],
  templateUrl: './location-map.html',
  styleUrl: './location-map.scss'
})
export class LocationMap {


  // Cambiar cuando el cliente entregue la ubicación exacta
  mapUrl = 
  'https://www.google.com/maps/embed';


  googleMapsLink =
  'https://maps.google.com';


}