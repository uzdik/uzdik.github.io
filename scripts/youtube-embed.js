// youtube-embed.js

$(document).ready(function() {
  $('.youtube-spoilers a').click(function(e) {
    e.preventDefault();
    
    // Close previously opened videos
    $('.youtube-spoilers iframe').remove();
    
    var videoUrl = $(this).attr('href');
    var embedUrl = getEmbedUrl(videoUrl);
    var iframe = $('<iframe>').attr('src', embedUrl).attr('width', '560').attr('height', '315').attr('frameborder', '0').attr('allowfullscreen', true);
    $(this).parent().append(iframe);
  });
  
  function getEmbedUrl(videoUrl) {
    if (videoUrl.includes('youtube.com/watch?v=')) {
      return videoUrl.replace("watch?v=", "embed/");
    } else if (videoUrl.includes('youtu.be/')) {
      var videoId = videoUrl.split('youtu.be/')[1];
      return "https://www.youtube.com/embed/" + videoId;
    }
    return videoUrl; // Return original URL if format is unknown
  }
});
