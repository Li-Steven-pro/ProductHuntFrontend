// Angular Module
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { TopicChartComponent } from './component/topic-chart/topic-chart.component';
import { ProductHuntDateComponent } from './view/product-hunt-date/product-hunt-date.component';
import { ProductItemComponent } from './component/product-item/product-item.component';

// Material Module
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatChipsModule} from "@angular/material/chips"
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar'
// FxLayout Module
import { FlexLayoutModule } from "@angular/flex-layout";

// ApexCharts Module
import { NgApexchartsModule } from "ng-apexcharts";
@NgModule({
  declarations: [
    AppComponent,
    ProductHuntDateComponent,
    ProductItemComponent,
    TopicChartComponent,
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
    MatChipsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    NgApexchartsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
