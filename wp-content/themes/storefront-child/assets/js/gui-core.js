;(function initializePhoneNumberField(win, doc, undefined) {
  function replaceFlag(elem, code) {
    var oldFlag = elem.src;

    elem.setAttribute('src', oldFlag.replace(/[A-Z]+(\.svg)/g, code + '.svg'));
  }

  function errorFlagFallback(e) {
    replaceFlag(e.target, 'ZZ');
  }

  function updateFlag(elem, newFlag) {
    if (!elem) return;

    elem.addEventListener('error', errorFlagFallback);

    replaceFlag(elem, newFlag);
  }

  function updatePlaceholder(elem, newCode) {
    var template = elem.getAttribute('data-template');

    if (!elem) return;

    elem.textContent = template ? template.replace('__REPLACE_ME__', newCode) : '';
  }

  function selectOnChange(event) {
    var root = event.currentTarget;
    var currentSelect = event.target;
    var selectedIndex = currentSelect.selectedIndex;
    var data =
      currentSelect.dataset && currentSelect.dataset.countries
        ? JSON.parse(currentSelect.dataset.countries)
        : [];
    var selectedCountry = data[selectedIndex] || ['000', 'ZZ', 'Unknown'];
    var newCode = selectedCountry[0];
    var newFlag = selectedCountry[1];
    var flag = root.querySelector('.js-gui-input-phone-number-code-flag');
    var placeholder = root.querySelector('.js-gui-input-phone-number-code-placeholder');

    updateFlag(flag, newFlag);
    updatePlaceholder(placeholder, newCode);
  }

  function allowOnlyNumbers(event) {
    // Prevent any characters other than numbers
    // 0 for null values
    // 8 for backspace
    // 48-57 for 0-9 numbers
    if ((event.which != 8 && event.which != 0 && event.which < 48) || event.which > 57) {
      event.preventDefault();
    }
  }

  function onKeyPress(event) {
    var input = event.currentTarget.querySelector('.js-gui-form-details-phone-number');

    if (input && event.target === input) allowOnlyNumbers(event);
  }

  function onChange(event) {
    var select = event.currentTarget.querySelector('.js-gui-form-details-phone-number-code');

    if (select && select === event.target) selectOnChange(event);
  }

  function addEvents(root) {
    root.addEventListener('change', onChange);
    root.addEventListener('keypress', onKeyPress);
  }

  function init(selector) {
    return function() {
      var roots = doc.querySelectorAll(selector);

      if (roots.length <= 0) return;
      roots.forEach(addEvents);
    };
  }

  doc.addEventListener('DOMContentLoaded', init('.js-gui-input-phone-number'));
})(window, document);