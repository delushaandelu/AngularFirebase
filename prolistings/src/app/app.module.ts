import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddlistingComponent } from './components/addlisting/addlisting.component';
import { EditlistingComponent } from './components/editlisting/editlisting.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDivf6GA-81eDGTncMeroft1tyr21FvmVo",
    authDomain: "proplisting-c1fd8.firebaseapp.com",
    databaseURL: "https://proplisting-c1fd8.firebaseio.com",
    projectId: "proplisting-c1fd8",
    storageBucket: "proplisting-c1fd8.appspot.com",
    messagingSenderId: "1024686953683"
  }
};

const appRoutes: Routes =[
  {path:'', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path: 'addlisting', component:AddlistingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddlistingComponent,
    EditlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
