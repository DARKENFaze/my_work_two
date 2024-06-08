document.getElementById('play-button').addEventListener('click', function() {
    var thumbnail = document.getElementById('thumbnail');
    var video = document.getElementById('video');
    var button = document.getElementById('play-button');

    thumbnail.style.display = 'none';
    button.style.display = 'none';
    video.style.display = 'block';
    video.play();
});
