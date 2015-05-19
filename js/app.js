(function(require) {
  LazyLoader.load('lib/dom-scheduler.js', () => {
    window.maestro = new DomScheduler();
    LazyLoader.load(['gaia-dialog.js', 'gaia-dialog-alert.js',
      'gaia-dialog-confirm.js', 'gaia-dialog-prompt.js',
      'gaia-dialog-action.js', 'gaia-dialog-select.js', 'gaia-dialog-menu.js']);
  });
})();