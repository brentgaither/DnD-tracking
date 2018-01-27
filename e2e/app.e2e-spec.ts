import { AppPage } from './app.po';

describe('dnd-tracking App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Top Items', () => {
    page.navigateTo();
    expect(page.getText('h3')).toEqual('Top Items');
  });

  it('should display My items', () => {
    page.navigateTo('/items');
    expect(page.getText('h2')).toEqual('My items');
  });

  it('should display item name', () => {
    page.navigateTo('/items');
    expect(page.getText('label')).toEqual('item name:');
  });

  it('should display lbs', () => {
    page.navigateTo('/items');
    expect(page.getText('h4')).toEqual('18 lbs'); // conditional on mock data
  });
});
