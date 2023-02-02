import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TKHesaplamaRoutingModule } from './tkhesaplama-routing.module';
import { TKHesaplamaComponent } from './tkhesaplama.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
@NgModule({
  declarations: [TKHesaplamaComponent],
  imports: [
    CommonModule,
    TKHesaplamaRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
  ],
})
export class TKHesaplamaModule {}
