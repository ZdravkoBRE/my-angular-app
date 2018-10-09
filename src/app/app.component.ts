import { LoggerService } from 'my-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'iz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IZ World';
  constructor(logger: LoggerService) {
    logger.log('hello world');
  }
}
