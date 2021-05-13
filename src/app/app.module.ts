import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductHuntDateComponent } from './view/product-hunt-date/product-hunt-date.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatChipsModule} from "@angular/material/chips"


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductHuntDateComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatChipsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
