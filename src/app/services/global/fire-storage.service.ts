import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

   ref!: AngularFireStorageReference;
  task!: AngularFireUploadTask;
  downloadURL!: Observable<string>;
  uploadProgress!: Observable<number>;
private imageSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  image$: Observable<any> = this.imageSubject.asObservable();
  bio: any;
  constructor(
    private afStorage: AngularFireStorage,
    public afDB: AngularFireDatabase,
    public router: Router
  ) {

  }


  async upload(event:any , path: string) {
		//const path = `profiles/${user?.id}/profile.webp`;
    const task = this.afStorage.upload(path, event.target.files[0]);
    const ref = this.afStorage.ref(path);

    // upload image, save url
    await task;
     ref.getDownloadURL().subscribe(url=>{
        this.imageSubject.next(url);

    });


  }






}
