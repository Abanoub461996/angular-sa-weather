import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[CommonModule, RouterOutlet ,MatToolbarModule,HttpClientModule ],
  providers:[HttpClient,HttpClientModule]
})
export class RootComponent {
  title = 'ng14';
}
