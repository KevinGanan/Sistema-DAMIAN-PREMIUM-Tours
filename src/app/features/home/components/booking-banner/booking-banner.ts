import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-banner',
  standalone: true,
  imports: [],
  templateUrl: './booking-banner.html',
  styleUrl: './booking-banner.scss'
})
export class BookingBanner {

  whatsappNumber = '593984638664';

  message = 
    'Hola, deseo realizar una reserva de transporte privado.';

  get whatsappLink(){

    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.message)}`;

  }

}