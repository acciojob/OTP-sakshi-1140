//your JS code here. If required.
document.addEventListener('DOMContentLoaded', (event) => {
   let arr = Array.from(document.querySelectorAll('.code'));
  
    arr.forEach((item, index) => {
      item.addEventListener('input', () => {
        if (item.value.length > 0) {
          if (index < arr.length - 1) {
            arr[index + 1].focus();
          }
        }
      });
  
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && item.value.length === 0) {
          if (index > 0) {
            arr[index - 1].focus();
          }
        }
      });
    });
  
    // Set the focus on the first input field when the page loads
    if (arr.length > 0) {
      arr[0].focus();
    }
  });