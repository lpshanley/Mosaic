import { expect, suite, test } from 'vitest';
import { greet } from '.';

suite('Init Test', () => {
  test('Should create a greeting', () => {
    expect(greet('Lucas')).toBe('Hello Lucas');
  });
});
