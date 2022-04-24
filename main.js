var prediction1="";
var prediction2="";
camera=document.getElementById("camera");
Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:100
});
Webcam.attach('#camera');
function takesnapshot(){
    webcam.snap(function(data_uri){
        document.getElementbyid("result").innerHTML='<img id="captured_img" src="'+data_uri+'">'
    });
}
console.log("ml5:",ml5.version);

var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VyRpJ-3sW/model.json',modelLoaded);
