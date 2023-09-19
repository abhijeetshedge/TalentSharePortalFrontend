import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorRegistrationComponent } from './components/mentor-registration/mentor-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MentorViewComponent } from './components/mentor-view/mentor-view.component';
import { MentorUpdateComponent } from './components/mentor-update/mentor-update.component';
import { MentorDeleteComponent } from './components/mentor-delete/mentor-delete.component';
import { LoginComponent } from './components/login/login.component';
import { MenteeLoginComponent } from './components/mentee-login/mentee-login.component';
import { MentorLoginComponent } from './components/mentor-login/mentor-login.component';
import { RegisterComponent } from './components/mentee-registration/register.component';
import { HomeComponent } from './components/home/home.component';
import { SearchMentorComponent } from './components/search-mentor/search-mentor.component';
import { ListOfMentorsComponent } from './components/list-of-mentors/list-of-mentors.component';
import { TalentSharePortalMentorService } from './services/talent-share-portal-mentor.service';
import { TalentSharePortalCategoryService } from './services/talent-share-portal-category.service';
import { TalentSharePortalSkillService } from './services/talent-share-portal-skill.service';
import { MentorService } from './components/search-mentor/search-mentor.service';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MentorRegistrationComponent,
    MentorViewComponent,
    MentorUpdateComponent,
    MentorDeleteComponent,
    LoginComponent,
    MenteeLoginComponent,
    MentorLoginComponent,
    RegisterComponent,
    HomeComponent,
    SearchMentorComponent, 
    ListOfMentorsComponent

  ],
  imports: [
    NgMultiSelectDropDownModule,
    MatFormFieldModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule
  ],
  providers: [TalentSharePortalMentorService,
              TalentSharePortalCategoryService,
              TalentSharePortalSkillService,
              MentorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
