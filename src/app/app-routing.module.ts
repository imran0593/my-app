import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { interval } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GmailComponent } from './gmail/gmail.component';
import { GpayComponent } from './gpay/gpay.component';
import { InetrpolationComponent } from './interpolation/inetrpolation.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { SchoolComponent } from './school/school.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { WeekendComponent } from './weekend/weekend.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  {path: 'dashboard', component: DashboardComponent, canActivate:[],children:[
    {path: 'calculator', component: CalculatorComponent},
    {path:'interpolation', component:InetrpolationComponent},
    {path: 'event-binding',component:EventbindingComponent},
    {path: 'two-way-binding',component:TwowaybindingComponent},
    {path: 'rectangle',component:RectangleComponent},
    {path: 'square',component:SquareComponent},
    {path: 'power',component:PowerComponent},
    {path: 'eventRegistration',component:EventRegistrationComponent},
    {path: 'employeeregistration',component:EmployeeregistrationComponent},
    {path: 'cart',component:CartComponent},
    {path: 'pipes',component:PipesComponent},
    {path: 'cars',component:CarsComponent},
    {path: 'star',component:StarComponent},
    {path: 'weekend',component:WeekendComponent},
    {path: 'gpay',component:GpayComponent},
    {path: 'bank',component:BankComponent},
    {path: 'vehicle',component:VehicleComponent},
    {path: 'school',component:SchoolComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'gmail',component:GmailComponent},
    {path:'boredom',component:GmailComponent},
    {path:'bank-details/:id',component:BankDetailsComponent},
    {path:'create-account',component:CreateAccountComponent, canDeactivate:[NotifyGuard]},
    {path:'restaurent',component:RestaurentComponent}
    
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
  
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
