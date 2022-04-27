function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    imagenes=ml5.imageClassifier('MobileNet',modelocargado);
}
function modelocargado(){
    console.log('su modelo se cargo')
}
function draw(){
    image(video,0,0,300,300);
    imagenes.classify(video, gotResult);
}
var valorinisial='';
function gotResult(error,results){
    if(error){
console.error(error);
    }
else{
if((results[0].confidence>0.54)&&(valorinisial !=results[0].label)){
    console.log(results);
    valorinisial=results[0].label;
    var voz=window.speechSynthesis;
    ablar='el objeto es '+results[0].label;
    var texto=new SpeechSynthesisUtterance(ablar);
    voz.speak(texto);
    document.getElementById("objeto").innerHTML=results[0].label;
    document.getElementById("presision").innerHTML=results[0].confidence.toFixed(3);
}
}
}

