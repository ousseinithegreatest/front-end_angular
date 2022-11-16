import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from 'src/environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: any;

  constructor(
    /*private userService: UserService*/ private httpClient: HttpClient
  ) {}

  ngOnInit(): void {}

  register(data: any) {
    this.httpClient
      .post(`${apiBaseUrl}api/auth/signup`, data)
      .subscribe((result) => {
        console.log(result);
      });
    console.log(data);
    /*     this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.user);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    ) */
  }
}
