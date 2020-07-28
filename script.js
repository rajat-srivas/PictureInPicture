const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function SelectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {

    }

}

button.addEventListener('click', async() => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

SelectMediaStream();