import { Routes } from '@angular/router';
import {LayoutComponent} from './ui/layout/layout.component'
import {HomeComponent} from './pages/home/home.component'
import {BlogComponent} from './pages/blog/blog.component'
import {ContactComponent} from './pages/contact/contact.component'

export const routes: Routes = [
  {
    path: '',
    // If this path is the 'full' match...
    pathMatch: 'full',
    // ...redirect to this route.
    redirectTo: 'home',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];
