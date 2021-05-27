(() => {
    const refs = {
      openMenuBtn: document.querySelector('.mobile-menu--button'),
      closeMenuBtn: document.querySelector('.mobile-menu--close'),
      mobileMenu: document.querySelector('.mobile-menu'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.mobileMenu.classList.toggle('is-hidden');
    }
  })();