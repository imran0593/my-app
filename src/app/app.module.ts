import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { InetrpolationComponent } from './interpolation/inetrpolation.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorngComponent } from './calculatorng/calculatorng.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SquareComponent } from './square/square.component';
import { PowerComponent } from './power/power.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { CartComponent } from './cart/cart.component';
import { PractiseComponent } from './practise/practise.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { WeekendComponent } from './weekend/weekend.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SchoolComponent } from './school/school.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GmailComponent } from './gmail/gmail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InetrpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    CalculatorComponent,
    CalculatorngComponent,
    RectangleComponent,
    PageNotFoundComponent,
    SquareComponent,
    PowerComponent,
    EventRegistrationComponent,
    EmployeeregistrationComponent,
    CartComponent,
    PractiseComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    StarComponent,
    WeekendComponent,
    GpayComponent,
    BankComponent,
    VehicleComponent,
    SchoolComponent,
    FlipkartComponent,
    GmailComponent,
    BoredomComponent,
    BankDetailsComponent,
    CreateAccountComponent,
    RestaurentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
