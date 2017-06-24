import { DjasodPage } from './app.po';

describe('djasod App', function() {
  let page: DjasodPage;

  beforeEach(() => {
    page = new DjasodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
