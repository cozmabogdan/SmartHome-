import {Routes} from '@angular/router';
import { SectionDormitorComponent } from './app/sections/section-dormitor/section-dormitor.component';
import { SectionSufragerieComponent } from './app/sections/section-sufragerie/section-sufragerie.component';

export const appRoutes: Routes = [
    {path: 'dormitor', component: SectionDormitorComponent},
    {path: 'sufragerie', component: SectionSufragerieComponent},
    
    {path: '', redirectTo:'/dormitor', pathMatch: 'full'}
];