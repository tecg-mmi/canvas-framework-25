import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Hsl} from "./framework25/colors/Hsl";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const hue = randomInt(0, 255);

// for (let i = 0; i < 1; i++) {
//     const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);
//
//     const circle = new Circle(ctx, {
//         x: randomInt(radius, canvas.width - radius),
//         y: randomInt(radius, canvas.height - radius)
//     }, new Hsl(hue, randomInt(0, 100), randomInt(0, 100)), radius);
//     circle.draw();
// }


const color = new Hsl(-20, -30, -40)

console.log(color.toString());