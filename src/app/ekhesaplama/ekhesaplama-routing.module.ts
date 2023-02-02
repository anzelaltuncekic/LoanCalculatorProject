import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EKHesaplamaComponent } from './ekhesaplama.component';

const routes: Routes = [{ path: '', component: EKHesaplamaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EKHesaplamaRoutingModule { }
