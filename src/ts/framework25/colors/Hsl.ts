export class Hsl {
    private _hue: number
    private _saturation: number;
    private _lightness: number;


    constructor(hue: number, saturation: number, lightness: number) {

        this._hue = hue > 360 ? 360 : hue;
        this._saturation = saturation;
        this.lightness = lightness;
    }


    get hue(): number {
        return Math.trunc(this._hue);
    }

    set hue(value: number) {
        if (value >= 0 && value <= 360) {
            this._hue = value;
        }
    }

    get saturation(): number {
        return Math.trunc(this._saturation);
    }

    set saturation(value: number) {
        if (value >= 0 && value <= 100) {
            this._saturation = value;
        }
    }

    set lightness(value: number) {
        if (value >= 0 && value <= 100) {
            this._lightness = value;
        }
    }


    get lightness(): number {
        return Math.trunc(this._lightness);
    }

    toString() {
        return `hsl(${this.hue}deg,${this.saturation}%,${this.lightness}%)`;
    }
}
