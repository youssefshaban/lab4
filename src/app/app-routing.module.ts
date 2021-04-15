import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './courses/guards/auth.guard';
import { LoadGuard } from './courses/guards/load.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'courses',
    loadChildren:
      () => import('./courses/courses.module').then(m => m.CoursesModule),
    canLoad: [LoadGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
