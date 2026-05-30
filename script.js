// Dropdown Menu Handler
// Keeps dropdowns open while moving from the trigger into the menu.

const navDropdowns = document.querySelectorAll('.nav-dropdown');

navDropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');

  dropdown.addEventListener('mouseenter', () => {
    dropdown.classList.add('open');
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('open');
  });

  if (!toggle) return;

  toggle.addEventListener('focus', () => {
    dropdown.classList.add('open');
  });

  toggle.addEventListener('blur', () => {
    if (!dropdown.contains(document.activeElement)) {
      dropdown.classList.remove('open');
    }
  });
});

// Page routing and mobile menu behavior are handled by the main page script in index.html.
