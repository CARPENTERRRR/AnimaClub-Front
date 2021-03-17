import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SignupFormService} from '../services/signup-form.service';
import {User} from '../User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  formSignUp: FormGroup;
  user: User;
  router: Router;

  errorMessages = {
    'pseudo': [
      {type: 'required', message: 'Le pseudonyme est requis'}
    ],
    'mail': [
      {type: 'required', message: 'L\'adresse mail est requise'},
      {type: 'required', message: 'Veuillez entrez une adresse mail valide'}
    ],
    'password': [
      {type: 'required', message: 'Le mot de passe est requis'}
    ],
    'confirmPassword': [
      {type: 'required', message: 'La mot de passe est requis'}
    ],
  };

  constructor(public formBuilder: FormBuilder, private signupService: SignupFormService) {
    this.formSignUp = this.formBuilder.group({
      pseudo: new FormControl('', Validators.compose([Validators.required])),
      mail: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
      confirmPassword: new FormControl('', Validators.compose([Validators.required])),
    }, {
      validators: this.passwordCheck.bind(this)
    });
  }

  ngOnInit(){
  }

  passwordCheck(validatePassword: FormGroup) {
    const { value: password } = validatePassword.get('password');
    const { value: confirmPassword } = validatePassword.get('confirmPassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }

  createAccount() {
    this.user = this.formSignUp.value;
    this.signupService.createAccount(this.user).subscribe((data: User) => {
    });
  }

  onSignUp(){
    this.router.navigate(['']);
  }

}





