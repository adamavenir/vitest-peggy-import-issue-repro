import { describe, it, expect } from 'vitest';
import { parse } from '../src/index.js';

describe('peggy parser with ts helper', () => {
  it('1 + 2 → (1+2)*2 = 6', () => {
    expect(parse('1+2')).toBe(6);
  });
});