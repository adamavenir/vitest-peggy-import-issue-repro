import { describe, it, expect } from 'vitest';
import { parse } from '../src/index.js';

describe('peggy parser', () => {
  it('adds', () => {
    expect(parse('1+2')).toBe(3);
  });
});