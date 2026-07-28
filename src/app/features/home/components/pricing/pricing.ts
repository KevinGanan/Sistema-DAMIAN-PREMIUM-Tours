import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {


  @ViewChild('slider')
  slider!: ElementRef;


  // Número de WhatsApp de la empresa
  whatsappNumber = '593984638664';

  sharedTrips = [

    {
      route:'Quito Norte → Latacunga',
      price:16,
      description:'Viaje compartido'
    },

    {
      route:'Quito Norte → Salcedo',
      price:16,
      description:'Viaje compartido'
    },

    {
      route:'Quito Norte → Ambato',
      price:16,
      description:'Viaje compartido'
    },

    {
      route:'Quito Norte → Riobamba',
      price:30,
      description:'Viaje compartido'
    },

    {
      route:'Quito Norte → Baños',
      price:30,
      description:'Viaje compartido'
    }

  ];



  parcels=[

    {
      route:'Quito → Latacunga',
      price:10
    },

    {
      route:'Quito → Salcedo',
      price:10
    },

    {
      route:'Quito → Ambato',
      price:10
    },

    {
      route:'Quito → Riobamba',
      price:20
    },

    {
      route:'Quito → Baños',
      price:20
    }

  ];





  transfers=[

    {
      route:'Quito → Aeropuerto',
      price:25
    },

    {
      route:'Aeropuerto → Quito',
      price:25
    }

  ];





  express=[

    {
      route:'Tababela → Latacunga',
      price:50
    },

    {
      route:'Tababela → Salcedo',
      price:55
    },

    {
      route:'Tababela → Ambato',
      price:60
    },

    {
      route:'Tababela → Riobamba',
      price:75
    },

    {
      route:'Tababela → Baños',
      price:75
    }

  ];






  consultarWhatsapp(
    servicio:string,
    ruta:string,
    precio:number
  ){


    let mensaje = '';



    switch(servicio){


      case 'Viaje Compartido':

        mensaje =
        `Hola, estoy interesado en el viaje compartido ${ruta}, con una tarifa de $${precio}. ¿Podrían indicarme la disponibilidad, horarios y cómo puedo reservar?`;

      break;



      case 'Encomienda':

        mensaje =
        `Hola, deseo enviar una encomienda en la ruta ${ruta}. Vi que la tarifa referencial es de $${precio}. ¿Podrían brindarme más información sobre el envío?`;

      break;



      case 'Transfer':

        mensaje =
        `Hola, estoy interesado en el servicio de Transfer ${ruta} con una tarifa de $${precio}. ¿Podrían indicarme la disponibilidad?`;

      break;



      case 'Viaje Privado':

        mensaje =
        `Hola, estoy interesado en un viaje privado desde ${ruta}. Vi que la tarifa publicada es de $${precio}. ¿Podrían indicarme disponibilidad y cómo reservar?`;

      break;


    }




    const whatsappUrl =
    `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;



    window.open(
      whatsappUrl,
      '_blank'
    );


  }



}