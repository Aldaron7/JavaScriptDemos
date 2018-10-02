import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PepperoniComponent } from './pepperoni/pepperoni.component';
import { EverythingComponent } from './everything/everything.component';
import { OtherComponent } from './other/other.component';
import { PastaComponent } from './other/pasta.component';
import { CalzoneComponent } from './other/calzone.component';
import { PleaseSelectComponent } from './customer/please-select.component';
import { DetailComponent } from './customer/detail.component';
import { Component1Component } from './component/component1.component';
import { Component2Component } from './component/component2.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { ActivateService } from './authenticated/activate.service';
import { NonAuthenticatedComponent } from './authenticated/non-authenticated.component';
import { UserService } from './authenticated/user.service';

const routes: Routes = [
  {
    path: '',
    component: PleaseSelectComponent,
    pathMatch: 'full'
  },
  {
    path: 'detail',
    component: DetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'component1',
    component: Component1Component
  },
  {
    path: 'component2',
    component: Component2Component
  },
  {
    path: 'authenticated',
    component: AuthenticatedComponent,
    canActivate: [ActivateService]
  },
  {
    path: 'pepperoni',
    component: PepperoniComponent
  },
  {
    path: 'everything/:size',
    component: EverythingComponent
  },
  {
    path: 'other',
    component: OtherComponent,
    children: [
      {
        path: '',
        redirectTo: 'pasta',
        pathMatch: 'full'
      },
      {
        path: 'pasta',
        component: PastaComponent
      },
      {
        path: 'calzone',
        component: CalzoneComponent
      }
    ]
  },
  {
    path: '**',
    component: NonAuthenticatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService, ActivateService]
})
export class AppRoutingModule {}
