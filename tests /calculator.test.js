class Calculator {
  constructor() {
    this.currentValue = '';
    this.history = [];
  }

  calculate(expression) {
    try {
      if (/\/\s*0/.test(expression)) {
        throw new Error('Cannot divide by zero');
      }
      const result = eval(expression);
      this.history.push(result);
      this.currentValue = result.toString();
      return result;
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }

  clickButton(value) {
    this.currentValue += value;
  }

  displayValue() {
    return this.currentValue;
  }

  getHistory() {
    return this.history;
  }
}

module.exports = Calculator;

const Calculator = require('../src/Calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
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
      calculator.clickButton('5');
      calculator.clickButton('+');
      calculator.clickButton('3');
      expect(calculator.calculate(calculator.displayValue())).toBe(8);
    });

    test('should maintain calculation history', () => {
      calculator.calculate('2 + 2');
      calculator.calculate('3 + 3');
      expect(calculator.getHistory()).toContain(4);
      expect(calculator.getHistory()).toContain(6);
    });
  });
});