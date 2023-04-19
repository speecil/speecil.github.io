function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    const notification = document.getElementById('notification');
    notification.innerText = 'Copied to clipboard!';
    notification.classList.add('show');
  
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2500);
  }
  
