import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule} from '@angular/material/stepper';
import { MatGridListModule} from '@angular/material/grid-list';


const MODULES = [MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatStepperModule,
  MatGridListModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...MODULES
  ],
  exports: [...MODULES],
})
export class CustomMaterialModule { }
