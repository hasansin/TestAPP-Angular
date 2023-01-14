import { SignInComponent } from './sign-in/sign-in.component';
import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component:ServerComponent  },
  { path: 'signin', component: SignInComponent },
  {path:'',redirectTo:"/home",pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
