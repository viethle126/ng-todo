import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo = () => browser.get('/')
  hasRendered = () => element(by.css('app-root')).isPresent()
}
