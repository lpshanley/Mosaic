import { expect, suite, test } from 'vitest';
import { greet, VERSION } from '.';

suite('Init Test', () => {
  test('Should create a greeting', () => {
    expect(greet('Lucas')).toBe('Hello Lucas');
  });

  test('Version is 0', () => {
    expect(VERSION).toBe(0);
  });
});
