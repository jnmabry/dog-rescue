import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavComponent } from './home-screen/nav/nav.component';
import { FooterComponent } from './home-screen/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AdoptComponent } from './adopt/adopt.component';
import { EventsComponent } from './events/events.component';
import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    AdoptComponent,
    EventsComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
