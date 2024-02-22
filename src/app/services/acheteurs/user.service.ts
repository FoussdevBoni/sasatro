import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../global/auth.service';
import { RtdbService } from '../global/rtdb.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private vendeurSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  vendeur$: Observable<any> = this.vendeurSubject.asObservable();

  constructor(
    public authService: AuthService,
    public rtdbService: RtdbService
  ) {}

  getUserById(): void {
    this.authService.getAuthState('home', 'login').then((user) => {
      this.rtdbService.getDataById(user.uid, 'clients').subscribe(data => {
        this.vendeurSubject.next(data);
      });
    }).catch((error) => {
      console.error(error);
    });
  }
}
