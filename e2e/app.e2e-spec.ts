import { AngularcliprojectPage } from './app.po';

describe('angularcliproject App', () => {
  let page: AngularcliprojectPage;

  beforeEach(() => {
    page = new AngularcliprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
