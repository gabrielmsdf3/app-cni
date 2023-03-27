import { Component, OnInit } from '@angular/core';
import User from '../interface/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {
    this.users = [
      {
        name: 'john lennon',
        phone: '61 991554439',
        cpf: '98765432102',
        email: 'upchh@example.com',
        age: 36,
      },
    ];
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  async onClickDelete(user: User) {
    const response = await this.usersService.deleteUser(user);
    console.log(response);
  }
}
