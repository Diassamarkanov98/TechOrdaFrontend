  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  function OpenModal() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
    document.querySelector('body').classList.remove('scroll_hide');
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.querySelector('body').classList.remove('scroll_hide');
    }
  }

  modal.addEventListener('mouseover', (event) => {
    if (!event.target.closest('.modal-content')) {
      span.classList.toggle('btn-active');
    } 
  });
  modal.addEventListener('mouseout', (event) => {
    if (!event.target.closest('.modal-content')) {
      span.classList.toggle('btn-active');
    } 
  });