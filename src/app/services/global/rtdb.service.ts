import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RtdbService {

  constructor(
    public afdb: AngularFireDatabase
  ) {}

  // La fonction pour enregister une donnée dans Realtime database en utilisant la méthode list
  pushData(data: any, path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afdb.list(path).push(data)
        .then((res) => {
          console.log("Donnée enregistrée avec succès");
          data.id = res.key
          resolve(res);
        })
        .catch(error => {
          console.error("Erreur lors de l'enregistrement de la donnée :", error);
          reject(error);
        });
    });
  }

  // La fonction pour enregister une donnée dans Realtime database en utilisant la méthode  objet

  setData(data: any, path: string , dataKey: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afdb.object(path).set(data)
       .then((res) => {
          console.log("Donnée enregistrée avec succès");
           data.id = dataKey
          resolve(res);
        })
        .catch(error => {
          console.error("Erreur lors de l'enregistrement de la donnée :", error);
          reject(error);
        });
    });
  }


  // Fonction pour récupérer les données dans rtdb

 getData(path: string): Observable<any[]> {
    return  this.afdb.list(path, ref => ref.orderByChild('date')).snapshotChanges(['child_added'])
  }


  getDataById(id: any, originPath: string): Observable<any> {
    const path = originPath+'/' + id;
    return this.afdb.object(path).valueChanges();
  }

}
