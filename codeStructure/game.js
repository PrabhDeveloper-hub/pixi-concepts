import * as PIXI from "./pixi.js";

export default class Game {
    constructor() {
        document.body.style.margin = "0px";
        document.body.style.padding = "0px";
        document.body.style.overflow = "hidden";

        this.app = new PIXI.Application({
            background: "#1099bb",
            resizeTo: window
        })

        document.body.appendChild(this.app.view);

        this.init();
    }

    async init() {
        // alert("GAME LOADED");
        PIXI.Assets.addBundle('level-1', {
            bunny: "https://pixijs.com/assets/bunny.png"
        })

        const assets = await PIXI.Assets.loadBundle('level-1');

        this.bunny = new PIXI.Sprite(assets.bunny);
        this.bunny.x = this.app.screen.width / 2;
        this.bunny.y = this.app.screen.height / 2.5;
        this.bunny.scale.set(2.5);
        this.bunny.anchor.set(0.5);
        this.bunny.eventMode = "static";
        this.bunny.cursor = "pointer";
        this.app.stage.addChild(this.bunny);

        this.app.ticker.add(this.update.bind(this));
    }

    update(delta) {
        this.bunny.rotation += 0.1 * delta;
    }
}
