var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("text_box").innerHTML = "";
    recognition.start()
}

recognition.onresult = function run(event) {
    console.log(event)

    var content = event.results[0][0].transcript;
    console.log(content)

    document.getElementById("text_box").innerHTML = content;
    if (content == "take my selfie") {
        speak()
        Webcam.attach(camera)
    }

}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking Selfie in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    setTimeout(function () {
        take_snapshot()
        save()
    }, 5000);

}

Webcam.set({
    width: 370,
    height: 270,
    image_format: 'png',
    png_quality: 100,
    flip_horiz: true
});
camera = document.getElementById("camera");

function take_snapshot() {
    console.log("snap")
    Webcam.snap(function (data_uri) {
        console.log("snap1234")
        document.getElementById('result').innerHTML =
            '<img id="selfie_image" src="' + data_uri + '">';
    });
}

function save() {
    image = document.getElementById("selfie_image").src
    link = document.getElementById("link");
    link.href = image
    link.click()
}