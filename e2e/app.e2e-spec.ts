import { AngularGofitnessPage } from './app.po';

describe('angular-gofitness App', function() {
  let page: AngularGofitnessPage;

  beforeEach(() => {
    page = new AngularGofitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
