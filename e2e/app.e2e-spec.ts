import { AppPage } from './app.po';

describe('dnd-tracking App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Welcome', () => {
    page.navigateTo('/home');
    expect(page.getText('h3')).toEqual('Welcome to DnD tracking! Login to get started');
  });

  it('should display Top Items', () => {
    page.navigateTo('/dashboard');
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
    expect(page.getText('h4')).toEqual('0 lbs'); // conditional on mock data
  });
  it('should display My Diary', () => {
    page.navigateTo('/diary');
    expect(page.getText('h2')).toEqual('My Diary');
  });
});
