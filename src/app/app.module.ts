import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { DashboardPartComponent } from './dashboard-part/dashboard-part.component';
import { SettingPartComponent } from './setting-part/setting-part.component';
import { FormsModule } from '@angular/forms';
import { ProductTypePartComponent } from './product-type-part/product-type-part.component';
import { ModifyProductTypePartComponent } from './modify-product-type-part/modify-product-type-part.component';
import { ProductPartComponent } from './product-part/product-part.component';
import { ModifyProductPartComponent } from './modify-product-part/modify-product-part.component';
import { OrderPartComponent } from './order-part/order-part.component';

import { MatTableModule } from '@angular/material/table';
import { OrderDetailPartComponent } from './order-detail-part/order-detail-part.component';
import { MemberPartComponent } from './member-part/member-part.component';
import { ModifyMemberPartComponent } from './modify-member-part/modify-member-part.component';
import { PaymentPartComponent } from './payment-part/payment-part.component';

import { FusionChartsModule } from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent, 
    DashboardPartComponent,
    SettingPartComponent,
    ProductTypePartComponent,
    ModifyProductTypePartComponent,
    ProductPartComponent,
    ModifyProductPartComponent,
    OrderPartComponent,
    OrderDetailPartComponent,
    MemberPartComponent,
    ModifyMemberPartComponent,
    PaymentPartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DndModule,
    MatTableModule,
    FusionChartsModule,
    RouterModule.forRoot([
      { 
        path: 'dashboard-part',
        component: DashboardPartComponent
      },
      {
        path: 'setting-part',
        component: SettingPartComponent
      },
      {
        path: 'product-type-part',
        component: ProductTypePartComponent
      },
      {
        path: 'modify-product-type-part',
        component: ModifyProductTypePartComponent
      },
      {
        path: 'product-part',
        component: ProductPartComponent
      },
      {
        path: 'modify-product-part',
        component: ModifyProductPartComponent
      },
      {
        path: 'order-part',
        component: OrderPartComponent
      },
      {
        path: 'order-detail-part',
        component: OrderDetailPartComponent
      },
      {
        path: 'member-part',
        component: MemberPartComponent
      },
      {
        path: 'modify-member-part',
        component: ModifyMemberPartComponent  
      },
      {
        path: 'payment-part',
        component: PaymentPartComponent  
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
