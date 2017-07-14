import { JuplTaskPage } from './app.po';

describe('jupl-task App', () => {
  let page: JuplTaskPage;

  beforeEach(() => {
    page = new JuplTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
