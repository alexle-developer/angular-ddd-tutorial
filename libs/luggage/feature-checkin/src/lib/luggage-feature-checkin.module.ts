import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LuggageDomainModule} from '@flight-workspace/luggage/domain';
import {CheckinComponent} from './checkin.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [CheckinComponent],
  //do not forget to add the export to feature-checkin/src/index.ts
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule { }
