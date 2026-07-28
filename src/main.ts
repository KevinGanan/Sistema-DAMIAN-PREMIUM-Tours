import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import AOS from 'aos';


AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
});


bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));