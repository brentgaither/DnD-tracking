import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
   MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatRippleModule,
    MatCheckboxModule, MatButtonModule, MatChipsModule, MatOptionModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MaterialModule { }
