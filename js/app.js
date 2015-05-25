(function(require) {
  LazyLoader.load('lib/dom-scheduler.js', () => {
    var scheduler = new DomScheduler();
    LazyLoader.load(['gaia-dialog.js', 'gaia-dialog-alert.js',
      'gaia-dialog-confirm.js', 'gaia-dialog-prompt.js',
      'gaia-dialog-action.js', 'gaia-dialog-select.js', 'gaia-dialog-menu.js'],
      () => {
        var gaiaDialogElements = document.querySelectorAll('gaia-dialog,' +
            'gaia-dialog-alert, gaia-dialog-confirm, gaia-dialog-prompt,' +
            'gaia-dialog-action, gaia-dialog-select, gaia-dialog-menu');
        Array.prototype.forEach.call(gaiaDialogElements, elm => {
            elm.attachBehavior(scheduler);
        });
      });
  });
})();