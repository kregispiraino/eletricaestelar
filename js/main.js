/* Interações locais, sem dependências e sem armazenamento de dados pessoais. */
(function () {
  'use strict';

  function initialize() {
    var config = window.ESTELAR_CONFIG || {};
    var phone = String(config.phone || '5547996115841').replace(/\D/g, '');
    var defaultMessage = config.defaultMessage || 'Olá! Gostaria de solicitar um orçamento com a Elétrica Estelar.';

    function whatsappUrl(message) {
      return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message || defaultMessage);
    }

    document.querySelectorAll('[data-whatsapp]').forEach(function (link) {
      var message = link.dataset.serviceName
        ? 'Olá! Gostaria de solicitar um orçamento para ' + link.dataset.serviceName + '.'
        : link.dataset.message || defaultMessage;
      link.href = whatsappUrl(message);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    document.querySelectorAll('[data-phone]').forEach(function (link) {
      link.href = 'tel:+' + phone;
    });

    document.querySelectorAll('[data-year]').forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });

    var menuToggle = document.querySelector('.menu-toggle');
    var navigation = document.getElementById('primary-nav');

    function closeMenu(restoreFocus) {
      if (!menuToggle || !navigation) return;
      var wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      if (wasOpen && restoreFocus) menuToggle.focus();
    }

    if (menuToggle && navigation) {
      menuToggle.addEventListener('click', function () {
        var willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
        menuToggle.setAttribute('aria-expanded', String(willOpen));
        navigation.classList.toggle('is-open', willOpen);
      });

      navigation.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { closeMenu(false); });
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeMenu(true);
      });

      document.addEventListener('click', function (event) {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
          closeMenu(false);
        }
      });

      window.addEventListener('resize', function () {
        if (window.getComputedStyle(menuToggle).display === 'none') closeMenu(false);
      }, { passive: true });
    }

    document.querySelectorAll('[role="tablist"]').forEach(function (tablist) {
      var tabs = Array.from(tablist.querySelectorAll('[data-filter]'));
      if (!tabs.length) return;

      function activateTab(tab, shouldFocus) {
        var selected = tab.dataset.filter;
        tabs.forEach(function (item) {
          var active = item === tab;
          item.setAttribute('aria-selected', String(active));
          item.tabIndex = active ? 0 : -1;
          item.classList.toggle('is-active', active);
        });
        document.querySelectorAll('[data-service-panel]').forEach(function (panel) {
          panel.hidden = panel.dataset.servicePanel !== selected;
        });
        if (shouldFocus) tab.focus();
      }

      tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () { activateTab(tab, false); });
        tab.addEventListener('keydown', function (event) {
          var nextIndex;
          if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
          else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
          else if (event.key === 'Home') nextIndex = 0;
          else if (event.key === 'End') nextIndex = tabs.length - 1;
          else return;
          event.preventDefault();
          activateTab(tabs[nextIndex], true);
        });
      });

      activateTab(tabs.find(function (tab) {
        return tab.getAttribute('aria-selected') === 'true';
      }) || tabs[0], false);
    });

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
