import { SimpleTimerTrackerPage } from './app.po';

describe('simple-timer-tracker App', () => {
  let page: SimpleTimerTrackerPage;

  beforeEach(() => {
    page = new SimpleTimerTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
