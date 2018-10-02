import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { NotfoundComponent } from './core/notfound.component';
import { ProductcountComponent } from './core/productcount.component';
import { CategorycountComponent } from './core/categorycount.component';
import { ModelResolver } from './model/model.resolver';
import { TermsGuard } from './terms.guard';
import { UnsavedGuard } from './core/unsaved.guard';

const childRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'products', component: ProductcountComponent },
      { path: 'categories', component: CategorycountComponent },
      { path: '', component: ProductcountComponent }
    ],
    resolve: { model: ModelResolver },
    canActivateChild: [TermsGuard]
  }
];

const routes: Routes = [
  {
    path: 'form/:mode/:id',
    component: FormComponent,
    resolve: { model: ModelResolver },
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'form/:mode',
    component: FormComponent,
    resolve: { model: ModelResolver },
    canActivate: [TermsGuard]
  },
  { path: 'table', component: TableComponent, children: childRoutes },
  { path: 'table/:category', component: TableComponent, children: childRoutes },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];
export const routing = RouterModule.forRoot(routes);
