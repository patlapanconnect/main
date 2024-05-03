var video = document.getElementById('video');

function playM3u8(url){
  if(Hls.isSupported()) {
      video.volume = 0.3;
      var hls = new Hls();
      var m3u8Url = decodeURIComponent(atob(url))  // Menggunakan atob untuk mendekripsi URL
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
        // Add quality levels
        hls.levels.forEach((level, index) => {
          var qualityOption = document.createElement('option');
          qualityOption.textContent = level.height + 'p'; // Display resolution as label
          qualityOption.value = index; // Level index will be the value
          document.getElementById('quality-selector').appendChild(qualityOption);
        });
        // Listen for quality selection change
        document.getElementById('quality-selector').addEventListener('change', function() {
          hls.currentLevel = parseInt(this.value);
        });
      });
      document.title = originalTitle;
    }
	else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		video.src = url;
		video.addEventListener('canplay',function() {
		  video.play();
		});
		video.volume = 0.3;
		document.title = originalTitle;
  	}
}
