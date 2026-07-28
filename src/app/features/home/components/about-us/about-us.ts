import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {

  features = [

    'Transporte ejecutivo seguro',

    'Conductores responsables y profesionales',

    'Atención personalizada por WhatsApp',

    'Puntualidad y compromiso',

    'Viajes privados y compartidos',

    'Traslados al aeropuerto y encomiendas'

  ];

}