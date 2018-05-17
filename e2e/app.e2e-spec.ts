import { UserprofilePage } from './app.po';

describe('userprofile App', function() {
  let page: UserprofilePage;

  beforeEach(() => {
    page = new UserprofilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
