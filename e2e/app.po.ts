import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(page = '/') {
    return browser.get(page);
  }

  getText(htmlElement) {
    return element(by.css('app-root ' + htmlElement)).getText();
  }
}
