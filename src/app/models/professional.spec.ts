import { Professional } from './professional';

describe('Professional', () => {
  it('should create an instance', () => {
    expect(new Professional(null, {}, null)).toBeTruthy();
  });
});
