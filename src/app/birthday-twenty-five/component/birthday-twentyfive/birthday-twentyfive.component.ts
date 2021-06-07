import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday-twentyfive',
  templateUrl: './birthday-twentyfive.component.html',
  styleUrls: ['./birthday-twentyfive.component.css']
})
export class BirthdayTwentyfiveComponent implements OnInit {
  public imageUrl: any;
  public showGif: boolean = true;

  constructor(private cdRef: ChangeDetectorRef,
    private router: Router) {
    this.imageUrl = "../../assets/images/countdown.gif";
  }

  ngOnInit() {

  }
  public stopLooping() {
    setTimeout(() => {
      this.router.navigate(["/view-birthday"]);
    }, 3000);
  }
}
