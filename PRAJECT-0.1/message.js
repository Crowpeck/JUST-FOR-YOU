// Modal open/close logic for letter image
const letterBg = document.getElementById('letterBg');
const messageModal = document.getElementById('messageModal');
const closeModal = document.getElementById('closeModal');

if (letterBg && messageModal && closeModal) {
  letterBg.addEventListener('click', function() {
    messageModal.classList.add('show');
    // Remove and re-add show for animation replay
    const paper = messageModal.querySelector('.modal-paper');
    const msg = messageModal.querySelector('.modal-message');
    if (paper && msg) {
      paper.style.opacity = '0';
      paper.style.transform = 'scale(0.7) translateY(60px)';
      msg.style.opacity = '0';
      setTimeout(() => {
        paper.style.opacity = '';
        paper.style.transform = '';
        msg.style.opacity = '';
      }, 10);
    }
  });
  closeModal.addEventListener('click', function() {
    messageModal.classList.remove('show');
  });
  // Optional: close modal on outside click
  messageModal.addEventListener('click', function(e) {
    if (e.target === messageModal) {
      messageModal.classList.remove('show');
    }
  });
}