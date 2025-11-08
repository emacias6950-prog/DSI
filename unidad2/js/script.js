
// Modal dinámico en services.html
const modal = document.getElementById('modalDetalle');
if (modal){
  modal.addEventListener('show.bs.modal', e => {
    const btn = e.relatedTarget;
    if(!btn) return;
    modal.querySelector('#modalTitle').textContent = btn.getAttribute('data-title');
    modal.querySelector('#modalPrice').textContent = btn.getAttribute('data-price');
  });
}

// Toast global
const toastTrigger = document.getElementById('toastBtn');
const toastLive = document.getElementById('liveToast');
if (toastTrigger && toastLive) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
  toastTrigger.addEventListener('click', () => toastBootstrap.show());
}

// Validación Bootstrap para formulario
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
