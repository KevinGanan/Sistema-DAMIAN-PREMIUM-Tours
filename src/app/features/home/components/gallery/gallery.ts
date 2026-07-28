import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {

  images = [
    'Publicidad 1.png',
    'Publicidad 2.png',
    'Publicidad 3.png',
    'Publicidad 4.png',
    'Publicidad 5.png',
    'Publicidad 6.png'
  ];

  selectedImage: string | null = null;

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

}