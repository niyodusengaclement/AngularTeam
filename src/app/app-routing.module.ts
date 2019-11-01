import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import { ListComponent} from './list/list.component';
import { DetailsComponent} from './details/details.component';
import { LoginComponent} from './login/login.component'


const routes: Routes = [
  {path:'', redirectTo:'register',pathMatch:'full'},
  {path:'register', component:RegistrationComponent},
  {path:'details', component:DetailsComponent},
  {path:'list', component:ListComponent},
  {path:'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
