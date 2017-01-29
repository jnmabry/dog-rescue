import { DogRescuePage } from './app.po';

describe('dog-rescue App', function() {
  let page: DogRescuePage;

  beforeEach(() => {
    page = new DogRescuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
