import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) { }

  getListings(){
    this.listings = this.af.database.('/listings') as FirebaseListObservable<Listing[]>
    return this.listings;
  }

}
interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
