document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.getElementById('editor');
  const lineNumbersDiv = document.querySelector('.line-numbers');

  // Initialize with one line
  lineNumbersDiv.textContent = '1';

  // Update line numbers when text in textarea changes
  textArea.addEventListener('input', () => {
    const text = textArea.value;
    const lines = text.split('\n').length;

    // Generate line numbers
    let lineNumbers = '';
    for (let i = 1; i <= lines; i++) {
      lineNumbers += i + '\n';
    }

    lineNumbersDiv.textContent = lineNumbers;

    lineNumbersDiv.style.height = `${textArea.scrollHeight}px`;
  });
});
