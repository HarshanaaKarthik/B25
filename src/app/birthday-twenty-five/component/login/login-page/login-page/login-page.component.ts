import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public showError: string;
  public imageUrl: any;
  public loginPage: boolean = false;
  private count: number = 0;
  constructor(private router: Router) {
    this.imageUrl = "../../assets/images/BVI.jpg";
  }

  ngOnInit() {
    this.loginPage = true;
    this.loginForm = new FormGroup({
      username: new FormControl("Karthik"),
      password: new FormControl()
    });
  }

  public onClickSubmit() {
    if (this.loginForm.value.password == "Ammu") {
      this.loginPage = false;
      this.router.navigate(["/birthday"]);
    } else {
      this.count++;
      if (this.count < 2) {
        this.showError = "Give another try!!!";
      } else if (this.count < 3) {
        this.showError = "Thappuuuuu !!!";
      } else if (this.count < 4) {
        this.showError = "Dei ! Its a four letter word";
      } else if (this.count < 5) {
        this.showError = "Better not to login! Tata";
      }
    }
  }

}
