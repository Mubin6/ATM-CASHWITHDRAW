import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AtmService } from '../atm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  public cardNumber = '';
  public pin = '';
  public verifiedUser = [];
  public isUserVerified = undefined;
  public userList: any;
  @ViewChild('alertscrn1', {static: false}) alert: ElementRef;

  constructor(
    private atmService: AtmService,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.atmService.getUsers().subscribe(userList => {
      this.userList = userList;
    });
  }

  submit() {
    const alert = this.alert.nativeElement;
    this.renderer.setStyle(alert, 'display', '');
    this.userList.forEach(elt => {
      if (elt.card__number === this.cardNumber && elt.pin === this.pin) {
        localStorage.setItem('userDetails', JSON.stringify(elt));
        this.verifiedUser.push(elt);
        return this.router.navigate(['screen2']);
      }
    });
    this.verifiedUser.length > 0 ? this.isUserVerified = true : this.isUserVerified = false;
    setTimeout(() => {
      this.renderer.setStyle(alert, 'display', 'none');
    }, 5000);

  }



}
