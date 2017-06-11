import { ProlistingsPage } from './app.po';

describe('prolistings App', () => {
  let page: ProlistingsPage;

  beforeEach(() => {
    page = new ProlistingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
