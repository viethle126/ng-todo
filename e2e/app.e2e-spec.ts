import { AppPage } from './app.po'

describe('NG Todo', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should render.', () => {
    page.navigateTo()
    expect(page.hasRendered()).toBe(true)
  })
})
