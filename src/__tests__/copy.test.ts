/**
 * @jest-environment jsdom
 */
import ClipboardCopy from '../index';

test('ClipboardCopy is reject', () => {
  expect(new ClipboardCopy().copy('tests'))
  .rejects.toThrow();
});