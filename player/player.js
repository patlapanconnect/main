var video = document.getElementById('video');
        var qualitySelector = document.getElementById('quality');
        function playM3u8(url){
        if(Hls.isSupported()) {
            var hls = new Hls();
            var m3u8Url = decodeURIComponent(atob(url))  // Menggunakan atob untuk mendekripsi URL
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
                // Populate quality selector
                hls.levels.forEach((level, index) => {
                    var option = document.createElement('option');
                    option.value = index;
                    option.innerText = level.height + 'p'; // Display resolution as label
                    qualitySelector.appendChild(option);
                });
            });
            // Change quality when selected
            qualitySelector.addEventListener('change', function() {
                hls.currentLevel = parseInt(qualitySelector.value);
            });
        }
        else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
            video.addEventListener('loadedmetadata', function() {
                video.play();
            });
        }
    }

