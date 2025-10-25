            const videos = [
                "video/episot1.mp4",
                "video/episot2.mp4",
                "video/episot3.mp4",
                "video/episot4.mp4",
                "video/episot5.mp4",
                "video/episot6.mp4",
                "video/episot7.mp4",
                "video/episot8.mp4",
                "video/episot9.mp4",
                "video/episot10.mp4",
                "video/episot11.mp4",
                "video/episot12.mp4"
            ];

            function changeVideo(index) {
                const videoElement = document.getElementById('videoPlayer');
                const sourceElement = document.getElementById('videoSource');

                sourceElement.src = videos[index];
                videoElement.load();
                videoElement.pause();
            }