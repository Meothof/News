import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  public getCountry() {
    return 'ca';
  }

  public getLanguage() {
    return 'fr';
  }
}
