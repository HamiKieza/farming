'use strict';
$(document).ready(function() {


});

// Get all iframe elements
const videos = document.querySelectorAll('iframe');

// Loop through all iframe elements
videos.forEach(video => {
    // When the video is hovered, set autoplay to true
    video.addEventListener('mouseenter', () => {
        let src = video.src;
        if (!src.includes("autoplay=1")) {
            video.src = src + "?autoplay=1"; // Append autoplay to the URL
        }
    });

    // When the mouse leaves the video, stop autoplay
    video.addEventListener('mouseleave', () => {
        let src = video.src.replace("?autoplay=1", ""); // Remove autoplay from the URL
        video.src = src; // Set the new source without autoplay
    });
});