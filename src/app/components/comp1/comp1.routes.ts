import { Route } from '@angular/router';
import { Comp101Component } from './comp101/comp101.component';
import { Comp102Component } from './comp102/comp102.component';
     
export const comp1Routes: Route[] = [
  {
    path: '',
    children: [
        {
          path: '', pathMatch: 'full', component: Comp101Component
        },
        {
          path:'child-b', component: Comp102Component
        }
      ]
  },
  {path:'ss',component:Comp101Component}
];