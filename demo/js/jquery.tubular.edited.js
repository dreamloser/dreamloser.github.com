;(function ($, window) {

    // test for feature support and return if failure 
    // kill for mobile devices
    var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    
    // defaults
    var defaults = {
        ratio: 16/9, // usually either 4/3 or 16/9 -- tweak as needed
        videoId: 'Vmb1tqYqyII', 
        mute: false,
        repeat: true,
        width: $(window).width(),
        wrapperZIndex: 15,
        playButtonClass: 'tubular-play',
        pauseButtonClass: 'tubular-pause',
        muteButtonClass: 'tubular-mute',
        volumeUpClass: 'tubular-volume-up',
        volumeDownClass: 'tubular-volume-down',
        increaseVolumeBy: 0,
        start: 123,
        end: 138, 
        minimumSupportedWidth: 600,
        modestbranding: 0
    };

    // methods

    window.tubular = function(node, options) { // should be called on the wrapper div
        var options = $.extend({}, defaults, options),
            $body = $('body'), // cache body node
            $node = $(node); // cache wrapper node

        // build container
        var tubularContainer = '<div id="pg-container" style="overflow: hidden; position: absolute; z-index: 12; width: 100%; height: 100%; left:0; top: 0"><div id="pg-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: 1; position: absolute; left: 0; top: 0;"></div>';

        // set up css prereq's, inject tubular container and set up wrapper defaults
        $('html,body').css({'width': '100%', 'height': '100%'});
        $body.prepend(tubularContainer);
        $node.css({position: 'absolute', 'z-index': options.wrapperZIndex, left: 0, top: 0});

        // set up iframe player, use global scope so YT api can talk
        window.player;
        window.onYouTubeIframeAPIReady = function() {
            player = new YT.Player('pg-player', {
                width: options.width,
                height: Math.ceil(options.width / options.ratio),
                videoId: options.videoId,
                playerVars: {
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 0,
                    frameborder: 1,
                    iv_load_policy: 3,
                    wmode: 'transparent'
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        window.onPlayerReady = function(e) {
            resize();
            if (options.mute) e.target.mute();
            e.target.seekTo(options.start);
            e.target.pauseVideo(); 
}



var trigerOnce = true;

        window.onPlayerStateChange = function(state) {
            if (state.data === 0 && options.repeat) { // video ended and repeat option is set true
                player.seekTo(options.start); // restart
            }
            if (state.data === 1) {
//game shows -- inserted by maxim.xu


if (trigerOnce == true) {
var circle = new ProgressBar.Circle('#clock', {
    color: '#E2284E',
    trailColor: "#000",
    strokeWidth: 4,
    trailWidth: 1,
    duration: 8000,
    text: {
        value: '5'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10).toFixed(0));
    }
});
 
    circle.animate(1, function() {
        circle.animate(0);
    })  

trigerOnce = false; 
 
}

var answered = 0;
if (screen.width < 480) {
setTimeout(function(){
$('.play').css('visibility','visible').addClass('fadeIn animatedSlow');
}, 4000);
} else {
setTimeout(function(){
$('.play').css('visibility','visible').addClass('slideInUp animatedSlow');
}, 4000);
};
setTimeout(function(){
$('.progressbar-text').css('visibility','visible');
}, 8000);

function sd() {
    $('.play').removeClass('fadeIn animatedSlow').fadeOut(300);
}

function vanish() { 
    $('#pg-container, #pg-player, #tubular-shield, #player, .mask2, .play').addClass('animatedSlow fadeOut');  
        $('.demo_pre').css('z-index','1').removeClass('slideOutUp animated'); 
        $('.demo_img, .tm, .demo_play').remove();
    setTimeout(function() {
        player.mute();
    }, 100);
    setTimeout(function() {
        $('#pg-container, #pg-player, #tubular-shield, #player, .mask2, .play').remove();
    }, 1600);
    setTimeout(function() {
        window.location.href = 'http://www.plotguru.com';
    }, 4000);
    if (answered == 2) {
        $('.wp').text('Nice! I have just the thing for you.')
    } else { 
        $('.wp').text('Ouch. Looks like you could use some practice!')
    }
} 

$('a.btn').click(function(){
$(this).css({'color':'rgba(255, 255, 255, .35)','background-color':'rgba(226, 40, 78, 1);'});
if (this.id == 'correct') {
    answered = 2;
} else if (this.id == 'mouth') {
    answered = 1;
} else if (this.id == 'steal') {
    answered = 3;
} else if (this.id == 'fire') {
    answered = 4;
}
setTimeout(function(){
    sd(); 
}, 500); 
});

setTimeout(function(){
        sd(); 
        setTimeout(vanish, 5500)
    }, 16000)
            }
}



//inserted code end

        // resize handler updates width, height and offset of player after resize/init
        var resize = function() {
            var width = $(window).width(),
                pWidth, // player width, to be defined
                height = $(window).height(),
                pHeight, // player height, tbd
                $tubularPlayer = $('#pg-player');

            // when screen aspect ratio differs from video, video must center and underlay one dimension

            if (width / options.ratio < height) { // if new video height < window height (gap underneath)
                pWidth = Math.ceil(height * options.ratio); // get new player width
                $tubularPlayer.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
            } else { // new video width < window width (gap to right)
                pHeight = Math.ceil(width / options.ratio); // get new player height
                $tubularPlayer.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2}); // player height is greater, offset top; reset left
            }

        }

        // events
        $(window).on('resize.tubular', function() {
            resize();
        })

        $('body').on('click','.' + options.playButtonClass, function(e) { // play button
            e.preventDefault();
            player.playVideo();
        }).on('click', '.' + options.pauseButtonClass, function(e) { // pause button
            e.preventDefault();
            player.pauseVideo();
        }).on('click', '.' + options.muteButtonClass, function(e) { // mute button
            e.preventDefault();
            (player.isMuted()) ? player.unMute() : player.mute();
        }).on('click', '.' + options.volumeDownClass, function(e) { // volume down button
            e.preventDefault();
            var currentVolume = player.getVolume();
            if (currentVolume < options.increaseVolumeBy) currentVolume = options.increaseVolumeBy;
            player.setVolume(currentVolume - options.increaseVolumeBy);
        }).on('click', '.' + options.volumeUpClass, function(e) { // volume up button
            e.preventDefault();
            if (player.isMuted()) player.unMute(); // if mute is on, unmute
            var currentVolume = player.getVolume();
            if (currentVolume > 100 - options.increaseVolumeBy) currentVolume = 100 - options.increaseVolumeBy;
            player.setVolume(currentVolume + options.increaseVolumeBy);
        })
    }
 
        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
                            
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    } 

    $.fn.tubular = function (options) {
        return this.each(function () {
            if (!$.data(this, 'tubular_instantiated')) { 
                $.data(this, 'tubular_instantiated', 
                tubular(this, options));
            }
        });
    } 

})(jQuery, window);