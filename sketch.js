let video;
let poseNet;
let pose;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
    console.log(poses);
    if(poses.length > 0) {
        pose = poses[0].pose;
    }
}

function modelLoaded() {
    console.log('poseNet ready');
}

function draw() {
    translate(video.width, 0);
    scale(-1,1);
    image(video, 0, 0, video.width, video.height);

    if(pose) {
        fill(255, 0, 0);
        ellipse(pose.nose.x, pose.nose.y, 64);

        fill(255, 0, 0);
        ellipse(pose.leftWrist.x, pose.leftWrist.y, 64);
        fill(255, 0, 0);
        ellipse(pose.rightWrist.x, pose.rightWrist.y, 64);
    }
    
}