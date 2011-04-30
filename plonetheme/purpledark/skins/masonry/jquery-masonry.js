$(document).ready(function() {
  var $portletAboveContainer = $('#portletsAboveContent');
  var $portletBelowContainer = $('#portletsBelowContent');
  $portletAboveContainer.imagesLoaded( function() {
        $portletAboveContainer.masonry({
            columnWidth: 232,
            itemSelector:'.portletWrapper'
        });
  });
  $portletBelowContainer.imagesLoaded( function() {
        $portletBelowContainer.masonry({
            columnWidth: 232,
            itemSelector:'.portletWrapper'
        });
  });
});
