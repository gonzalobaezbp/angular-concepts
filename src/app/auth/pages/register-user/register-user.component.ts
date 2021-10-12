import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public formRegister: FormGroup;

  constructor(private authService: AuthService) {
    this.formRegister = new FormGroup({
      email:         new FormControl(''),
      password:      new FormControl(''),
      passwordAgain: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  registerUser() {
    const user: User = {
      email: this.formRegister.value.email,
      password: this.formRegister.value.password
    };
    this.authService.createUser(user)
      .subscribe(res => {
        console.log(res)
      });
  }

}
