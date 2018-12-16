import { CustomLoginFormPage } from './app.po';

describe('Scholance App', () => {
  let page: CustomLoginFormPage;

  beforeEach(() => {
    page = new CustomLoginFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
