import { WeddingSitePage } from './app.po';

describe('wedding-site App', () => {
  let page: WeddingSitePage;

  beforeEach(() => {
    page = new WeddingSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
