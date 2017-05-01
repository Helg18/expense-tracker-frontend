import { ExpensesTrackerFrontPage } from './app.po';

describe('expenses-tracker-front App', () => {
  let page: ExpensesTrackerFrontPage;

  beforeEach(() => {
    page = new ExpensesTrackerFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
