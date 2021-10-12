import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public form: FormGroup;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      email:    new FormControl('test@example.com', [Validators.required, Validators.email]),
      password: new FormControl('1111', [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
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
