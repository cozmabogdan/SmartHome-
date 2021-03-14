import {Routes} from '@angular/router';
import { SectionDormitorComponent } from './app/sections/section-dormitor/section-dormitor.component';
import { SectionSufragerieComponent } from './app/sections/section-sufragerie/section-sufragerie.component';
import { LoginComponent } from './app/sections/login/login.component';
import { SectionRegisterComponent } from './app/sections/section-register/section-register.component';

export const appRoutes: Routes = [
    {path: 'dormitor', component: SectionDormitorComponent},
    {path: 'sufragerie', component: SectionSufragerieComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: SectionRegisterComponent},
    
    {path: '', redirectTo:'/dormitor', pathMatch: 'full'}
];