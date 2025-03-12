import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Hsl} from "./framework25/colors/Hsl";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const hue = randomInt(0, 360);

for (let i = 0; i < 40; i++) {
    const radius = randomInt(settings.radius.min, settings.radius.max);
    const color: Hsl = new Hsl(hue, randomInt(0, 100), randomInt(0, 100));
    const circle = new Circle(ctx, color,
        {
            x: randomInt(radius, canvas.width - radius),
            y: randomInt(radius, canvas.height - radius),
        },
        radius);
    circle.draw();
}
