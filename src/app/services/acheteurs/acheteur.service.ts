import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../global/auth.service';
import { RtdbService } from '../global/rtdb.service';

@Injectable({
  providedIn: 'root'
})
export class AcheteurService {
  private acheteurSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  acheteur$: Observable<any> = this.acheteurSubject.asObservable();

  constructor(
    public authService: AuthService,
    public rtdbService: RtdbService
  ) {}

  getUserById(): void {
    this.authService.getAuthState('home', 'login').then((user) => {
      this.rtdbService.getDataById(user.uid, 'clients').subscribe(data => {
        this.acheteurSubject.next(data);
      });
    }).catch((error) => {
      console.error(error);
    });
  }
}
