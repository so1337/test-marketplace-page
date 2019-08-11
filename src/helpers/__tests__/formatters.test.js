import { formatNumberToK } from '../formatters';

describe('formatNumberToK formatter tests', () => {
  it('test with proper arguments', () => {
    expect(formatNumberToK(1)).toEqual('1');
    expect(formatNumberToK(1001)).toEqual('1k');
  });
  it('test with missing arguments', () => {
    expect(formatNumberToK()).toEqual('0');
  });
});
