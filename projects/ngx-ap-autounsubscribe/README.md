# NgxApAutounsubscribe

This project is compatible with Angular 13+ versions.

<b>Class decorator that will automatically unsubscribe from observable subscriptions when the component is destroyed without implement ngOnDestroy lifecycle.</b>

## Installation

Install this package with npm, with following command: <br>
<code>npm install ngx-ap-autounsubscribe</code>

### Usage
```
import { AutoUnsubscribe } from "ngx-ap-auto-unsubscribe";

@AutoUnsubscribe()
export class ExampleComponent {
  testSubscription: Subscription;

  ngOnInit() {
    this.testSubscription = Observable.interval.subscribe(data => // do something);
  }
}
```

### Options

<table>
<thead>
  <tr>
    <td>Option</td>
    <td>Description</td>
    <td>Default value</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>arrayName</td>
    <td>unsubscribe from subscriptions only in specified array</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>blacklist</td>
    <td>an array of properties to exclude</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>event</td>
    <td>a name of event callback to execute on</td>
    <td>undefined</td>
  </tr>
</tbody>
</table>


## Start Local Environment
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Contributing

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
