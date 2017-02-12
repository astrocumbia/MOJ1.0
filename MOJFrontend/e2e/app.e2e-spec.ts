import { MOJFrontendPage } from './app.po';

describe('mojfrontend App', function() {
  let page: MOJFrontendPage;

  beforeEach(() => {
    page = new MOJFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
