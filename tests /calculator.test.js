const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;
    let mockDisplay;
    let mockHistory;

    beforeEach(() => {
        // Setup DOM elements
        document.body.innerHTML = `
            <input type="text" id="display">
            <div id="history"></div>
        `;
        
        mockDisplay = document.getElementById('display');
        mockHistory = document.getElementById('history');
        calculator = new Calculator();
    });

    describe('Basic Arithmetic Operations', () => {
        test('Addition', () => {
            calculator.appendToExpression('2');
            calculator.appendToExpression('+');
            calculator.appendToExpression('2');
            calculator.calculate();
            expect(mockDisplay.value).toBe('4');
        });

        test('Subtraction', () => {
            calculator.appendToExpression('5');
            calculator.appendToExpression('-');
            calculator.appendToExpression('3');
            calculator.calculate();
            expect(mockDisplay.value).toBe('2');
        });

        test('Multiplication', () => {
            calculator.appendToExpression('4');
            calculator.appendToExpression('×');
            calculator.appendToExpression('3');
            calculator.calculate();
            expect(mockDisplay.value).toBe('12');
        });

        test('Division', () => {
            calculator.appendToExpression('8');
            calculator.appendToExpression('÷');
            calculator.appendToExpression('2');
            calculator.calculate();
            expect(mockDisplay.value).toBe('4');
        });
    });

    describe('Complex Calculations', () => {
        test('Parentheses', () => {
            calculator.appendToExpression('(');
            calculator.appendToExpression('2');
            calculator.appendToExpression('+');
            calculator.appendToExpression('3');
            calculator.appendToExpression(')');
            calculator.appendToExpression('×');
            calculator.appendToExpression('2');
            calculator.calculate();
            expect(mockDisplay.value).toBe('10');
        });

        test('Decimal numbers', () => {
            calculator.appendToExpression('2');
            calculator.appendToExpression('.');
            calculator.appendToExpression('5');
            calculator.appendToExpression('×');
            calculator.appendToExpression('2');
            calculator.calculate();
            expect(mockDisplay.value).toBe('5');
        });
    });

    describe('Error Handling', () => {
        test('Division by zero', () => {
            calculator.appendToExpression('5');
            calculator.appendToExpression('÷');
            calculator.appendToExpression('0');
            calculator.calculate();
            expect(mockDisplay.value).toBe('Error');
        });

        test('Invalid expression', () => {
            calculator.appendToExpression('2');
            calculator.appendToExpression('+');
            calculator.appendToExpression('+');
            calculator.calculate();
            expect(mockDisplay.value).toBe('Error');
        });
    });

    describe('UI Operations', () => {
        test('Clear button', () => {
            calculator.appendToExpression('123');
            calculator.clear();
            expect(mockDisplay.value).toBe('');
        });

        test('Delete button', () => {
            calculator.appendToExpression('123');
            calculator.delete();
            expect(mockDisplay.value).toBe('12');
        });
    });

    describe('History Functionality', () => {
        test('History updates after calculation', () => {
            calculator.appendToExpression('2');
            calculator.appendToExpression('+');
            calculator.appendToExpression('2');
            calculator.calculate();
            expect(mockHistory.innerHTML).toContain('2+2 = 4');
        });

        test('History maintains last 5 calculations', () => {
            for (let i = 0; i < 6; i++) {
                calculator.appendToExpression(i.toString());
                calculator.appendToExpression('+');
                calculator.appendToExpression('1');
                calculator.calculate();
            }
            const historyEntries = mockHistory.children.length;
            expect(historyEntries).toBeLessThanOrEqual(5);
        });
    });
});