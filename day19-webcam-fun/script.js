const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
         })
        .catch(e => {
            console.error(e);
        });
        
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(()=> {
        ctx.drawImage(video, 0 , 0 , width, height);
    }, 16);
}

function takePhoto(){
 snap.currentTime = 0;
 snap.play();

const data = canvas.toDataURL('image/jpeg');

const link = document.createElement('a');
link.href = data; 
link.setAttribute('download','photo');
link.innerHTML = `<img src="${data}" alt="Photo" />`;
strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);