import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('eve.holt@reqres.in', [Validators.required]),
      password: new FormControl('cityslicka', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  logIn(): void {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.authService.sendData(user)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        alert(res.token);
      });
  }

}
