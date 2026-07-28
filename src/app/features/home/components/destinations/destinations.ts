import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [],
  templateUrl: './destinations.html',
  styleUrl: './destinations.scss'
})
export class Destinations {

  whatsappNumber = '593984638664';

  consultarDestino(destino: string): void {

    const mensaje =
      `Hola, estoy interesado en viajar hacia ${destino}. ¿Podrían brindarme información sobre horarios, disponibilidad y tarifas?`;

    const url =
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');

  }

  destinations = [

    {
      image: 'quito.jpg',
      icon: 'fa-solid fa-city',
      name: 'Quito',
      description: 'Viajes privados y compartidos desde cualquier sector de Quito.'
    },

    {
      image: 'aeropuerto.png',
      icon: 'fa-solid fa-plane',
      name: 'Aeropuerto',
      description: 'Traslados seguros desde y hacia el Aeropuerto Mariscal Sucre.'
    },

    {
      image: 'latacunga.jpg',
      icon: 'fa-solid fa-location-dot',
      name: 'Latacunga',
      description: 'Servicio ejecutivo con puntualidad y comodidad.'
    },

    {
      image: 'ambato.jpg',
      icon: 'fa-solid fa-road',
      name: 'Ambato',
      description: 'Viajes cómodos para trabajo, turismo y familia.'
    },

    {
      image: 'riobamba.jpg',
      icon: 'fa-solid fa-map-location-dot',
      name: 'Riobamba',
      description: 'Movilidad privada con atención personalizada.'
    },

    {
      image: 'baños.png',
      icon: 'fa-solid fa-mountain-sun',
      name: 'Baños',
      description: 'Uno de los destinos turísticos más visitados del Ecuador.'
    }

  ];

}