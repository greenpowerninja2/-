function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4qv_c_M3I/.json', modelReady')
}

function modelReady(){
    classifier.classify(gotResults); 
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;
    
    document.getElementById("result_label").innerHTML = 'The Animal is a- '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    img = document.getElementById('MOmeow1_square.avif');
    img1 = document.getElementById('dog.avif');
    img2 = document.getElementById('person.png');
    img3 = document.getElementById('snake.png');

    if (results[0].label == "Cat"){
img.src = 'dog.avif';
img1.src = 'catgif.gif';
img2.src = 'dog.avif';
img3.src = 'person.png';
    } else if (results[0].label == "Human"){
        img.src = 'dog.avif';
        img1.src = 'MOmeow1_square.avif';
        img2.src = 'snake.png';
        img3.src = 'memegif.gif';  
    } else if (results[0].label == "Snake"){
        img.src = 'dog.avif';
        img1.src = 'MOmeow1_square.avif';
        img2.src = 'snakegif.gif';
        img3.src = 'memegif.gif';  
    } else{
        img.src = 'doggif.gif';
        img1.src = 'MOmeow1_square.avif';
        img2.src = 'dog.avif';
        img3.src = 'person.png';  
    }
} 
}