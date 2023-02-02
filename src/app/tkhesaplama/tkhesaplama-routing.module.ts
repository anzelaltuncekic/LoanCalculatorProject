import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TKHesaplamaComponent } from './tkhesaplama.component';

const routes: Routes = [{ path: '', component: TKHesaplamaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TKHesaplamaRoutingModule { }
