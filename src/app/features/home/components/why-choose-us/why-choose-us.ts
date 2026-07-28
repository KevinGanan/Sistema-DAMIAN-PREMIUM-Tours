import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss'
})
export class WhyChooseUs {

  reasons = [

    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Seguridad Garantizada',
      description:
        'Priorizamos tu bienestar con un servicio responsable, confiable y enfocado en que llegues a tu destino con total tranquilidad.'
    },

    {
      icon: 'fa-solid fa-clock',
      title: 'Puntualidad',
      description:
        'Respetamos tu tiempo. Cumplimos los horarios establecidos para que siempre llegues a tiempo a tu destino.'
    },

    {
      icon: 'fa-solid fa-route',
      title: 'Amplia Cobertura',
      description:
        'Realizamos viajes desde y hacia Quito, Aeropuerto, Latacunga, Salcedo, Ambato, Riobamba y Baños.'
    },

    {
      icon: 'fa-solid fa-car-side',
      title: 'Comodidad Premium',
      description:
        'Viaja en vehículos cómodos, limpios y preparados para ofrecerte una experiencia agradable durante todo el recorrido.'
    },

    {
      icon: 'fa-solid fa-headset',
      title: 'Atención Personalizada',
      description:
        'Te brindamos asesoría antes, durante y después del viaje mediante una atención cercana y rápida por WhatsApp.'
    },

    {
      icon: 'fa-solid fa-hand-holding-dollar',
      title: 'Precios Transparentes',
      description:
        'Nuestras tarifas son claras, competitivas y sin costos ocultos. Siempre conocerás el valor de tu viaje desde el inicio.'
    }

  ];

}