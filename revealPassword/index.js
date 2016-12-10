javascript:(function () {
  'use strict';

  const activeEl = document.activeElement;

  if (activeEl.type !== 'password') {
    alert(`Buddy, I only reveal password fields.`);
    return;
  }

  activeEl.type = 'text';
})()
