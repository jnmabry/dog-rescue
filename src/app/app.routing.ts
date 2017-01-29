import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';

import {AboutComponent} from "./about/about.component";
import {EventsComponent} from "./events/events.component";
import {AdoptComponent} from "./adopt/adopt.component";
import {ProgramsComponent} from "./programs/programs.component";

const APP_ROUTES: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent },
  {path: 'events', component: EventsComponent },
  {path: 'adopt', component: AdoptComponent },
  {path: 'programs', component: ProgramsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
