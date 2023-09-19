import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorRegistrationComponent } from './components/mentor-registration/mentor-registration.component';
import { MentorViewComponent } from './components/mentor-view/mentor-view.component';
import { MentorUpdateComponent } from './components/mentor-update/mentor-update.component';
import { MentorDeleteComponent } from './components/mentor-delete/mentor-delete.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenteeLoginComponent } from './components/mentee-login/mentee-login.component';
import { MentorLoginComponent } from './components/mentor-login/mentor-login.component';
import { RegisterComponent } from './components/mentee-registration/register.component';
import { SearchMentorComponent } from './components/search-mentor/search-mentor.component';
import { ListOfMentorsComponent } from './components/list-of-mentors/list-of-mentors.component';
import { MentorLoginGuard } from './guard/mentor-login.guard';
import { mentorGuard } from './guard/mentor.guard';
import { MenteeLoginGuard } from './guard/mentee-login.guard';
import { MenteeGuard } from './guard/mentee.guard';
import { LoginGuard } from './guard/login.guard';



const routes : Routes =[
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'mentor/search',
    component: SearchMentorComponent ,canActivate:[MenteeGuard]
  },
  {
    path: 'mentor/browse',
    component: ListOfMentorsComponent,canActivate:[MenteeGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoginGuard],
    
    
    children: [
      {
        path: '',
        component: MenteeLoginComponent
      },
      {
        path: 'mentee-login',
        component: MenteeLoginComponent,
        canActivate:[MenteeLoginGuard]
        
      },

      {
        path: 'mentor-login',
        component: MentorLoginComponent,
        canActivate:[MentorLoginGuard]
      },
    
    ]
  },
  { 
    path: 'registerMentee', component: RegisterComponent },
  {
    path:'mentor-registration', component: MentorRegistrationComponent 
  },
  {
    path:'mentor-view/:id', component: MentorViewComponent,canActivate:[mentorGuard]
  },
  {
    path:'mentor-update/:id', component: MentorUpdateComponent,canActivate:[mentorGuard]
  },
  {
    path:'mentor-delete/:id', component: MentorDeleteComponent,canActivate:[mentorGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
