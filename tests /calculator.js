class Calculator {
  constructor() {
      this.display = document.getElementById('display');
      this.history = document.getElementById('history');
      this.currentExpression = '';
      this.historyList = [];
      this.bindEvents();
  }

  bindEvents() {
      document.querySelectorAll('button').forEach(button => {
          button.addEventListener('click', () => this.handleButton(button));
      });
  }

  handleButton(button) {
      const type = button.getAttribute('data-type');
      const value = button.textContent;

      switch(type) {
          case 'number':
          case 'operator':
              this.appendToExpression(value);
              break;
          case 'equals':
              this.calculate();
              break;
          case 'clear':
              this.clear();
              break;
          case 'delete':
              this.delete();
              break;
      }
  }

  appendToExpression(value) {
      if (value === '×') value = '*';
      if (value === '÷') value = '/';
      this.currentExpression += value;
      this.updateDisplay();
  }

  calculate() {
      try {
          const result = this.evaluateExpression(this.currentExpression);
          const entry = `${this.currentExpression} = ${result}`;
          this.historyList.push(entry);
          this.updateHistory();
          this.currentExpression = result.toString();
          this.updateDisplay();
      } catch (error) {
          this.display.value = 'Error';
          this.currentExpression = '';
      }
  }

  evaluateExpression(expr) {
      // Security: Don't use eval()
      // This is a simplified version. In production, use a proper expression parser
      return Function('"use strict";return (' + expr + ')')();
  }

  clear() {
      this.currentExpression = '';
      this.updateDisplay();
  }

  delete() {
      this.currentExpression = this.currentExpression.slice(0, -1);
      this.updateDisplay();
  }

  updateDisplay() {
      this.display.value = this.currentExpression;
  }

  updateHistory() {
      this.history.innerHTML = this.historyList
          .slice(-5)
          .map(entry => `<div>${entry}</div>`)
          .join('');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculator;
} else {
  new Calculator();
}