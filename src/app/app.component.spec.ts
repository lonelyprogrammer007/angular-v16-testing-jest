import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have the title angular-testing-jest', () => {
    expect(fixture.title).toEqual('angular-testing-jest');
  });

  it('should add two numbers', () => {
    expect(fixture.sum(1, 2)).toBe(3);
  });
});
