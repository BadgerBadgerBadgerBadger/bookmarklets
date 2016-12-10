javascript:(function searchMyTwitterForPreviouslyPosted (twitterHandle) {
  'use strict';

  const selectedText = getSelectionText();

  if (!selectedText) {
    alert(`Select some text first!`);
    return;
  }

  const win = window.open(
    "https://twitter.com/search?f=tweets&q=" +
      encodeURIComponent(selectedText) +
      "%20from%3A" +
      twitterHandle +
      "&src=typd",
    '_blank'
  );

  if (win) {
    /* Browser has allowed it to be opened */
    win.focus();
  }

  /**
   * Get Selected Text
   * Credit: http://stackoverflow.com/a/5379408/2584375
   */
  function getSelectionText() {

    let text = "";
    const activeEl = document.activeElement;
    const activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;

    if (
      (activeElTagName == "textarea" || activeElTagName == "input") &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type) &&
      (typeof activeEl.selectionStart == "number")
    ) {

      text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);

    } else if (window.getSelection) {

      text = window.getSelection().toString();
    }

    return text;
  }
})('yourTwitterHandle')
