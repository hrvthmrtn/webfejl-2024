import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class DiktalasService {

  collectionName='Diktalasok';

  constructor(private afs: AngularFirestore) { }

  create(diktalas: Comment) {
    diktalas.id = this.afs.createId();
    return this.afs.collection<Comment>(this.collectionName).doc(diktalas.id).set(diktalas);
    
  }

  getAll(){
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  update(diktalas: Comment){
    return this.afs.collection<Comment>(this.collectionName).doc(diktalas.id).set(diktalas);
  }

  delete(id: string){
    return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }
}
