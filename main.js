function setup(){
canvas = createCanvas(500, 350);
canvas.center();
v1 = createCapture(VIDEO);
v1.hide();
identify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p0oGAhe2o/model.json",modelLoaded)
}

function draw(){
image (v1, 0, 0, 500, 350);

identify.classify(v1, gotResult);

}

function modelLoaded(){
console.log("Model has Loaded");
}

function gotResult(error, results){

if (error){
console.error(error);
}

else{
console.log(results);

document.getElementById("name").innerHTML = results[0].label;

document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);

if (results[0].label == "Book"){

document.getElementById("result_image").innerHTML = "<img src='book.jpeg'width= '50px'>";}



if (results[0].label == "Me and my Teddy Bear"){

document.getElementById("result_image").innerHTML = "<img src= 'teddy.jpeg'width = '50px'>";}


if (results[0].label == "Pencil Pouch"){

document.getElementById("result_image").innerHTML = "<img src= 'pencil.jpg'width= '50px'>";}
}

}