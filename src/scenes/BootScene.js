import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'BootScene' })
    }

    preload () {
        this.fontsReady = false
        this.loadingFonts = this.loadingFonts.bind(this)

        this.load.image('apple', './assets/apple.png')

        WebFont.load({
            google: {
                families: ['Ultra']
            },
            active: this.loadingFonts
        })
    }

    create () {}

    update () {
        if (this.fontsReady)
            this.scene.start('MenuScene')
    }

    loadingFonts () {
        this.fontsReady = true
    }
}