document.addEventListener('DOMContentLoaded', function() {
    fetch('/pages/json/wallpapers.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('wallpapers-container');
            
            // Reverse the data array to display the newest images first
            data.reverse();

            data.forEach(wallpaper => {
                const bentoBox = document.createElement('div');
                bentoBox.classList.add('bento-box');

                // Dynamically set the image source
                const img = document.createElement('img');
                img.src = wallpaper.path;  // Using the local path from JSON
                img.alt = wallpaper.name;

                // Dynamically scale the image size without setting the style inline
                img.style.width = '100%'; // Set image to fit container width
                img.style.maxHeight = '200px'; // Limit image height to avoid overflow
                img.style.objectFit = 'contain';  // Ensure the image maintains its aspect ratio

                // Command text (just the image name)
                const cmd = document.createElement('div');
                cmd.classList.add('cmd');
                cmd.textContent = wallpaper.name;  // Display just the image name

                // Append to bento box
                bentoBox.appendChild(img);
                bentoBox.appendChild(cmd);

                // Dynamically adjust the bento box size
                bentoBox.style.width = 'auto';  // Let width adjust based on image size
                bentoBox.style.height = 'auto'; // Let height adjust automatically

                // Add the bento box to the container
                container.appendChild(bentoBox);
            });
        })
        .catch(error => console.error('Error loading wallpapers:', error));
});
