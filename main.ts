input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(99)
})
