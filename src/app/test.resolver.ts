import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import {TestService} from './test.service';


@Injectable()
export class TestResolver implements Resolve<Observable<string>> {
  constructor(private testService: TestService) {}

  resolve(): Observable<any> {
    return this.testService.getConfiguration();
  }
}
