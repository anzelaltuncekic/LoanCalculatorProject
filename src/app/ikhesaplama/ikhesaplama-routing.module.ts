import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IKHesaplamaComponent } from './ikhesaplama.component';

const routes: Routes = [{ path: '', component: IKHesaplamaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IKHesaplamaRoutingModule {}
