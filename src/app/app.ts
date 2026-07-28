import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {

  ngAfterViewInit(): void {

    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

  }

}