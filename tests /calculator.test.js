// calculator.test.js

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    // Initialize your calculator instance or mock DOM if necessary
    calculator = new Calculator();
  });

  describe('Basic Arithmetic Operations', () => {
    test('should add numbers correctly', () => {
      expect(calculator.calculate('5 + 3')).toBe(8);
    });

    test('should subtract numbers correctly', () => {
      expect(calculator.calculate('10 - 4')).toBe(6);
    });

    test('should multiply numbers correctly', () => {
      expect(calculator.calculate('7 * 2')).toBe(14);
    });

    test('should divide numbers correctly', () => {
      expect(calculator.calculate('8 / 2')).toBe(4);
    });
  });

  describe('Complex Calculations with Parentheses', () => {
    test('should handle expressions with parentheses', () => {
      expect(calculator.calculate('(2 + 3) * 4')).toBe(20);
    });

    test('should handle division inside parentheses', () => {
      expect(calculator.calculate('10 / (2 + 3)')).toBe(2);
    });
  });

  describe('Error Scenarios', () => {
    test('should handle invalid expressions', () => {
      expect(() => calculator.calculate('5 +')).toThrow('Invalid expression');
    });

    test('should handle division by zero', () => {
      expect(() => calculator.calculate('10 / 0')).toThrow('Cannot divide by zero');
    });
  });

  describe('UI Interactions and History Functionality', () => {
    test('should perform calculations via UI interactions', () => {
      // Simulate button clicks and check the result
      calculator.clickButton('5');
      calculator.clickButton('+');
      calculator.clickButton('3');
      calculator.clickButton('=');
      expect(calculator.displayValue()).toBe('8');
    });

    test('should maintain calculation history', () => {
      calculator.calculate('2 + 2');
      calculator.calculate('3 + 3');
      expect(calculator.history()).toContain('4');
      expect(calculator.history()).toContain('6');
    });
  });
});