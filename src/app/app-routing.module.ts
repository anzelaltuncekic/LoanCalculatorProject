import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'IKHesaplama',
    loadChildren: () =>
      import('./ikhesaplama/ikhesaplama.module').then(
        (m) => m.IKHesaplamaModule
      ),
  },
  {
    path: 'TKHesaplama',
    loadChildren: () =>
      import('./tkhesaplama/tkhesaplama.module').then(
        (m) => m.TKHesaplamaModule
      ),
  },
  {
    path: 'EKHesaplama',
    loadChildren: () =>
      import('./ekhesaplama/ekhesaplama.module').then(
        (m) => m.EKHesaplamaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
