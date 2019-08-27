let net;

async function app() {
    console.log('Loading mobilenet..');
    document.getElementById("progress").innerText = "Computing, please wait..."
    // Load the model
    net = await mobilenet.load();
    console.log('Sucessfully loaded model');

    // Make a prediction through the model on our image.
    const imgEl = document.getElementById('uploadPreview');

    //alert(imgEl)
    const result = await net.classify(imgEl);
    document.getElementById("progress").innerText = ""
    document.getElementById('result').innerText = `\nprediction: ${result[0].className}\n
                                                    probability: ${ result[0].probability}\n\n
                                                    prediction: ${result[1].className}\n
                                                    probability: ${ result[1].probability}\n\n
                                                    prediction: ${result[2].className}\n
                                                    probability: ${ result[2].probability}\n`;

    console.log(result);
}

//app();
