import { Ng1Page } from './app.po';

describe('ng1 App', () => {
  let page: Ng1Page;

  beforeEach(() => {
    page = new Ng1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
