import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { WhatsappButton } from '../../shared/components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    WhatsappButton
  ],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {}