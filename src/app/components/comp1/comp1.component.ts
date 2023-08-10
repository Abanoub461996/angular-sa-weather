import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp102Component } from './comp102/comp102.component';
import { Comp101Component } from './comp101/comp101.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule ,Comp101Component , Comp102Component ],
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

}
