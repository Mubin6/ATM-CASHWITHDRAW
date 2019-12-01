import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss']
})
export class Screen3Component implements OnInit {
  public withDrawAmt: number;
  public twoThousandNotes: number;
  public fiveHundredNotes: number;
  public oneHundredNotes: number;
  public withDrawDetails: any;
  userDetails: any;
  constructor() { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.withDrawAmt = JSON.parse(localStorage.getItem('withdrawAmount'));
    this.availableNotes();
  }

  availableNotes() {

    const rupees = new Array(2000, 500, 100);
    const count = new Array(0, 0, 0);
    let requiredAmt = this.withDrawAmt;
    rupees.forEach((rupee, index) => {
      if (rupee < requiredAmt || rupee === requiredAmt) {
        count[index] = requiredAmt / rupee;
        requiredAmt = requiredAmt % rupee;
      }
    });
    count.forEach((cnt, idx) => {
      if (cnt !== 0) {
        this.twoThousandNotes = Math.floor(count[0]);
        this.fiveHundredNotes = Math.floor(count[1]);
        this.oneHundredNotes = Math.floor(count [2]);
    }
    });
    this.withDrawDetails = {
      twoThousandNotes: this.twoThousandNotes,
      fiveHundredNotes: this.fiveHundredNotes,
      oneHundredNotes: this.oneHundredNotes
    };
    // localStorage.setItem('withDrawDetails', JSON.stringify(this.withDrawDetails));
  }

}
