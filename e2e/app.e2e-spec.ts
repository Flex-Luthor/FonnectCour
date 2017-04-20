import { FonnectCourPage } from './app.po';

describe('fonnect-cour App', () => {
  let page: FonnectCourPage;

  beforeEach(() => {
    page = new FonnectCourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
