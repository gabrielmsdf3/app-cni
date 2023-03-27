import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  formulario: FormGroup;

  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{11}'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.usersService.addUser(this.formulario.value);
    console.log(response);
  }
}
