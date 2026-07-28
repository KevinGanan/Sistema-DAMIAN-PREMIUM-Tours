import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.scss'
})
export class GalleryPage {

  // ==========================
  // GALERÍA
  // ==========================

  images = [
    'Publicidad 1.png',
    'Publicidad 2.png',
    'Publicidad 3.png',
    'Publicidad 4.png',
    'Publicidad 5.png',
    'Publicidad 6.png',
    'Publicidad 7.png',
    'Publicidad 8.png',
    'Publicidad 9.png',
    'Publicidad 10.png',
    'Publicidad 11.png',
    'Publicidad 12.png',
    'Publicidad 13.png',
    'Publicidad 14.png',
    'Publicidad 15.png',
    'Publicidad 16.png',
    'Publicidad 17.png',
    'Publicidad 18.png'
  ];

  // ==========================
  // NUESTRA FLOTA
  // ==========================

  showFleet = false;

  vehicles = [

    {
      image: 'carro1.png',
      name: 'SWM G01',
      description: 'Ideal para viajes familiares y grupos pequeños.',
      capacity: '4 pasajeros'
    },

    {
      image: 'carro2.png',
      name: 'GAC GS3',
      description: 'Vehículo ejecutivo cómodo y moderno.',
      capacity: '4 pasajeros'
    },

    {
      image: 'carro3.png',
      name: 'KYC F3 CAMIONETA BLANCA',
      description: 'Perfecto para rutas largas y equipaje.',
      capacity: '5 pasajeros'
    },

    {
      image: 'carro4.png',
      name: 'KYC F3 CAMIONETA PLOMA',
      description: 'Perfecto para rutas largas y equipaje.',
      capacity: '5 pasajeros'
    },

    {
      image: 'carro5.png',
      name: 'ARRIZO 5 PRO',
      description: 'Vehículo ejecutivo cómodo y moderno.',
      capacity: '4 pasajeros'
    },

    {
      image: 'carro6.png',
      name: 'FURGONETA Hyundai H350',
      description: 'Perfecto para rutas largas y equipaje.',
      capacity: '7-11 pasajeros'
    }

  ];

  // ==========================
  // MODAL
  // ==========================

  selectedImage: string | null = null;

  // Carpeta de la imagen que se mostrará
  selectedFolder = 'gallery';

  currentIndex = 0;

  zoom = 1;

  // ==========================
  // ABRIR IMAGEN GALERÍA
  // ==========================

  openImage(index: number) {

    this.selectedFolder = 'gallery';

    this.currentIndex = index;

    this.selectedImage = this.images[index];

    this.zoom = 1;

  }

  // ==========================
  // ABRIR VEHÍCULO
  // ==========================

  openVehicle(image: string) {

    this.selectedFolder = 'fleet';

    this.selectedImage = image;

    this.zoom = 1;

  }

  // ==========================
  // CERRAR MODAL
  // ==========================

  closeImage() {

    this.selectedImage = null;

    this.zoom = 1;

  }

  // ==========================
  // SIGUIENTE
  // ==========================

  nextImage() {

    // Solo navegar si es una imagen de la galería
    if (this.selectedFolder !== 'gallery') return;

    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;

    this.selectedImage =
      this.images[this.currentIndex];

    this.zoom = 1;

  }

  // ==========================
  // ANTERIOR
  // ==========================

  previousImage() {

    // Solo navegar si es una imagen de la galería
    if (this.selectedFolder !== 'gallery') return;

    if (this.currentIndex === 0) {

      this.currentIndex = this.images.length - 1;

    } else {

      this.currentIndex--;

    }

    this.selectedImage =
      this.images[this.currentIndex];

    this.zoom = 1;

  }

  // ==========================
  // ZOOM
  // ==========================

  zoomIn() {

    if (this.zoom < 3) {

      this.zoom += 0.25;

    }

  }

  zoomOut() {

    if (this.zoom > 1) {

      this.zoom -= 0.25;

    }

  }

}