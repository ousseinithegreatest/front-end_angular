import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiBaseUrl } from 'src/environments/environment';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.form)
    this.http.post("http://localhost:8080/api/auth/login", this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
