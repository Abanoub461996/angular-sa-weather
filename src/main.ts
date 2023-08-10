import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(RootComponent, {
  providers: [provideRouter(routes), provideAnimations()],
});
