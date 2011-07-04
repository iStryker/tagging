// Author: Eugen Mayer (http://kontextwork.de)
// Copyright 2010

(function($) {
Drupal.behaviors.tagging = function() {
  $('input.tagging-widget-input:not(.tagging-processed)').tagging();
}
})(jQuery);