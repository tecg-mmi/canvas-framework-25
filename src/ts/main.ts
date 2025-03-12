import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Rgba} from "./framework25/colors/Rgba";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


for (let i = 0; i < 40; i++) {
    const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);

    const circle = new Circle(ctx, {
        x: randomInt(radius, canvas.width - radius),
        y: randomInt(radius, canvas.height - radius)
    }, new Rgba(randomInt(0, 255), randomInt(0, 255), randomInt(0, 255), Math.random()), radius);
    circle.draw();
}

