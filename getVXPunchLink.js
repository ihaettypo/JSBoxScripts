var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://min.gitcdn.link/repo/ihaettypo/jsQR/master/dist/jsQR.js";
script.onload = function() {
  window.alert(jsQR);
  window.alert(window.jsQR);
  let qrCanvas = document.querySelector(".ih5-rel-qrcode canvas");
  let qrImageData = qrCanvas.getContext('2d').getImageData(0,0, qrCanvas.width, qrCanvas.height);
  let url = jsQR(qrImageData.data,qrImageData.width,qrImageData.height).data;
  window.alert(url);
}
document.body.appendChild(script);
