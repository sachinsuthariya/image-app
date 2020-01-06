import { Injectable } from '@angular/core';

declare var require: any;

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  enJSON = require("../language/translation.en.json");
  guJSON = require("../language/translation.gu.json");
  // currentLanguage = 'userSelectedLanguage' || 'en';
  // languageIndex = 'selectedLangugeIndex' || 0;
  currentLanguage = 'en';
  languageIndex = 0;
  translationFile;

  constructor() { }

  getTranslationFile() {
    this.translationFile = this.currentLanguage === 'en' ? this.enJSON : this.guJSON;
    this.languageIndex = this.currentLanguage === 'en' ? 0 : 1;
  }

  getLocalizedString(keyName) {
    if (!keyName) return keyName;
    this.getTranslationFile();

    let result = this.translationFile[keyName];

    if (!result) {
      result = this.getTranslationFile[keyName.toLowerCase()];
    }

    if (!result) {
      result = keyName;
    }

    return result;
  }

  getLocalizedStringCapitalize(keyName) {
    let result = this.getLocalizedString(keyName);
    return result[0].toUpperCase() + result.slice(1);
  }

}