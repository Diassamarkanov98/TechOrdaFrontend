import "@tensorflow/tfjs-backend-webgl";
import { load, drawBokehEffect, BodyPix } from "@tensorflow-models/body-pix";

async function loop(
  canvas: HTMLCanvasElement,
  video: HTMLVideoElement,
  net: BodyPix,
  blur = 3
) {
  const segmentation = await net.segmentPerson(video);

  drawBokehEffect(canvas, video, segmentation, blur);

  requestAnimationFrame(() => {
    loop(canvas, video, net, blur);
  });
}

async function main() {
  let video: HTMLVideoElement = document.getElementById(
    "vid"
  ) as HTMLVideoElement;
  let canvas = document.getElementById("out") as HTMLCanvasElement;
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  video.srcObject = stream;

  video.play();

  video.addEventListener("loadeddata", async () => {
    const net = await load({
      architecture: "MobileNetV1",
      outputStride: 16,
      multiplier: 0.5,
      quantBytes: 1
    });

    loop(canvas, video, net, 10);
  });
}

main();
