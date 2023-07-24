import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-ap-autounsubscribe';

  constructor(private router: Router) {
  }

  public goToPlayground() {
    this.router.navigate(['playground']);
  }
}
