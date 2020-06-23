import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

const MaterialComponents = [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatCardModule,
];

@NgModule({
  imports: [...MaterialComponents],
  exports: [...MaterialComponents]
})
export class AngularMaterialModule { }
