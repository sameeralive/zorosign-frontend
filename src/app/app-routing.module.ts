import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentCreateComponent} from "./student/student-create/student-create.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student/student-create',
    pathMatch: 'full',
  },
  {
      path: 'student/student-create',
      component: StudentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
