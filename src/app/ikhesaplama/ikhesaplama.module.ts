import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IKHesaplamaRoutingModule } from './ikhesaplama-routing.module';
import { IKHesaplamaComponent } from './ikhesaplama.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [IKHesaplamaComponent],
  imports: [
    CommonModule,
    IKHesaplamaRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    ScrollingModule,
    MatCardModule,
  ],
})
export class IKHesaplamaModule {}
