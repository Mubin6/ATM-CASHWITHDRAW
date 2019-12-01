import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {

  public withDrawAmt: string | number = '';
  public userDetails: any;
  public alertTxt: string;
  @ViewChild('alertscrn2', {static: false}) alert: ElementRef;
  constructor(
    private router: Router,
    private renderer: Renderer2

  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
  }

  totalBalance() {
    const alert = this.alert.nativeElement;
    this.renderer.setStyle(alert, 'display', '');
    this.renderer.setStyle(alert, 'text-align', '-webkit-center');
    if (Number(this.withDrawAmt) % 100 !== 0) {
        this.alertTxt = 'Incorrect Withdrawal Amount ( Enter Multiple of 100 )';
    } else if (Number(this.withDrawAmt) % 100 === 0 && this.withDrawAmt > this.userDetails.balance) {
        this.alertTxt = 'Not Sufficient Balance To Withdraw';
    } else if (Number(this.withDrawAmt) % 100 === 0 && this.withDrawAmt > 10000) {
      this.alertTxt = 'One Time Max. Limit is 10k. Please enter upto 10K';
    } else {
      localStorage.setItem('withdrawAmount', JSON.stringify(this.withDrawAmt));
      this.router.navigate(['screen3']);
    }

    setTimeout(() => {
      this.renderer.setStyle(alert, 'display', 'none');
    }, 5000);

}

}
