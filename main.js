//https://teachablemachine.withgoogle.com/models/kA4F-80yW/

function start() {
    //This function should prompt the users to grant access to their connected microphones and cameras.

    navigator.mediaDevices.getUserMedia({ audio: true });
    //soundClassifier is a predefined function of ml5.js that is used to trigger
    //the ml5.js sound classification function
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);

}
//if we dont add modelready function then soundClassifier function from ml5.js will not start
function modelReady() {
    classifier.classify(gotResults);
}
//The gotResults function will hold the result of the comparison

function gotResults(error, results) {

    if (error) {
        console.log(error)
    }
    else {
        console.log(results);
        rng_num_b = Math.floor(Math.random() * 255) + 1;//generates number between 1-255 randomly
        rng_num_g = Math.floor(Math.random() * 255) + 1;//generates number between 1-255 randomly
        rng_num_r = Math.floor(Math.random() * 255) + 1;//generates number between 1-255 randomly

        document.getElementById("result_label").innerHTML = 'I can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_confidence").style.color = "rgb(" + rng_num_b + "," + rng_num_g + "," + rng_num_r + ")";
        document.getElementById("result_label").style.color = "rgb(" + rng_num_b + "," + rng_num_g + "," + rng_num_r + ")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if (results[0].label == "Clap") {
            img1.src = 'aliens-01.gif';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        } else if (results[0].label == "Bell") {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';

        } else if (results[0].label == "Snap") {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';
        } else {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.gif';
        }
    }
}