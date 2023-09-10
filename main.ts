controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceship, 0, -50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
let badenemy: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
effects.starField.startScreenEffect()
spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 9 5 9 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . 5 9 5 . . . . . . . 
    . . . . . 9 9 5 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 5 9 9 9 9 9 9 9 5 . . . . 
    . . 9 9 5 . . . . . 5 9 9 . . . 
    . 9 9 9 . . . . . . . 9 9 9 . . 
    `, SpriteKind.Player)
spaceship.setPosition(77, 100)
controller.moveSprite(spaceship)
info.setLife(3)
game.onUpdateInterval(500, function () {
    badenemy = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    badenemy.setPosition(randint(0, scene.screenWidth()), 0)
    badenemy.follow(spaceship, 30)
})
