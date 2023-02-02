import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EKHesaplamaRoutingModule } from './ekhesaplama-routing.module';
import { EKHesaplamaComponent } from './ekhesaplama.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EKHesaplamaComponent],
  imports: [
    CommonModule,
    EKHesaplamaRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EKHesaplamaModule {}
