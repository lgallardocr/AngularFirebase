import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public success(content: any) {
    this.snackBar.open(`Welcome ${content.displayName}`, `OK`, {
      duration: 5000
    });
    this.router.navigate(['/weather']);
  }

}
