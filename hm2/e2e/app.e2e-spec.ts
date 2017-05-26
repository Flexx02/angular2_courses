import { Hm2Page } from './app.po';

describe('hm2 App', () => {
  let page: Hm2Page;

  beforeEach(() => {
    page = new Hm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
