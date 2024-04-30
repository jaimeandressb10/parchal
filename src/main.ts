import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './productos/productos.config';
import { AppComponent } from './productos/productos.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
