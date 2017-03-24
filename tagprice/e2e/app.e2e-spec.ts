import { TagpricePage } from './app.po';

describe('tagprice App', function() {
  let page: TagpricePage;

  beforeEach(() => {
    page = new TagpricePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
