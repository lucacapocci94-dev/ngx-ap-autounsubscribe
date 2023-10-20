# NgxApAutounsubscribe

This project is compatible with Angular 13+ versions.

<b>Class decorator that will automatically unsubscribe from observable subscriptions when the component is destroyed without implement ngOnDestroy lifecycle.</b>

## Installation

Install this package with npm, with following command: <br>
<code>npm install ngx-lc-autounsubscribe</code>

### Usage
```
import { AutoUnsubscribe } from "ngx-lc-autounsubscribe";

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

To get more help on this project use go check out the [NgxApAutounsubscribe](https://github.com/lucacapocci94-dev/ngx-lc-autounsubscribe) page.
