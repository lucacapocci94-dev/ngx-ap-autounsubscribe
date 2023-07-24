import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {AutoUnsubscribe} from '../../../../ngx-ap-autounsubscribe/src/lib/AutoUnsubscribe.decorator';

@AutoUnsubscribe({
  blackList: ['blackListSubscription'],
  arrayName: 'subscriptions'
})
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements OnInit {

  public result: number = 0;

  private subscriptions: Subscription[] | undefined = [];
  private blackListSubscription: Subscription | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.createBlackListSubscriptions();
    const sub = interval(1000).subscribe(res => {
      console.log(res);
      this.result = res
    });
    this.subscriptions?.push(sub);
  }

  createBlackListSubscriptions(): void {
    this.blackListSubscription = interval(500).subscribe(res => {
      const resConcat = res + ' black';
      console.log(resConcat);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }
}
