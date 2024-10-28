scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    game.splash("Level 2", "Press A to start")
    mySprite.setPosition(2, 4)
})
let _2: Sprite = null
let _6: Sprite = null
let _5: Sprite = null
let _4: Sprite = null
let _3: Sprite = null
let _1: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
game.splash("Level 1", "Press A to start")
mySprite = sprites.create(img`
    . . 1 1 1 8 8 8 8 9 . . . . . . 
    . 9 1 9 9 9 9 1 9 1 9 9 9 9 . . 
    1 9 8 8 1 9 9 9 9 9 1 9 1 1 1 . 
    1 1 1 8 8 9 1 1 8 8 1 1 1 . 1 . 
    9 1 9 8 1 1 1 1 9 8 1 9 8 9 1 1 
    9 1 9 1 1 8 1 1 9 8 8 8 8 8 9 1 
    1 9 1 1 1 8 9 1 1 1 1 9 1 1 9 9 
    1 9 1 1 1 8 9 1 1 1 9 1 1 1 9 9 
    8 9 1 8 1 1 1 1 1 9 9 9 8 8 9 9 
    8 8 9 8 8 1 1 8 8 8 9 9 1 8 9 1 
    . 8 1 9 9 9 1 1 1 1 9 8 8 8 1 . 
    . 9 1 1 8 8 1 9 1 8 8 8 9 1 1 . 
    . 9 9 1 1 8 8 1 1 1 1 1 1 1 . . 
    . . 9 9 1 9 8 8 9 1 9 9 . . . . 
    . . . . 1 1 1 1 1 1 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(5, 4)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
forever(function () {
    _1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c c c c . . . . . 
        . . . . . c c c c 1 c . . . . . 
        . . . c c c c 1 1 1 c . . . . . 
        . . . c c c 1 1 b b c . . . . . 
        . . . c c 1 b b b 1 c . . . . . 
        . . . c c 1 b 1 1 a c a c a c c 
        . . . c c 1 1 1 a c a c a c a c 
        . . . c c 1 c a c a c a c a c . 
        . . . c c c a c a c a c a c . . 
        . . . . c c c a c a c a c . . . 
        . . . . . . . c c c a c c . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    _3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c c c c . . . . . 
        . . . . . c c c c 1 c . . . . . 
        . . . c c c c 1 1 1 c . . . . . 
        . . . c c c 1 1 b b c . . . . . 
        . . . c c 1 b b b 1 c . . . . . 
        . . . c c 1 b 1 1 a c a c a c c 
        . . . c c 1 1 1 a c a c a c a c 
        . . . c c 1 c a c a c a c a c . 
        . . . c c c a c a c a c a c . . 
        . . . . c c c a c a c a c . . . 
        . . . . . . . c c c a c c . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    _4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c c c c . . . . . 
        . . . . . c c c c 1 c . . . . . 
        . . . c c c c 1 1 1 c . . . . . 
        . . . c c c 1 1 b b c . . . . . 
        . . . c c 1 b b b 1 c . . . . . 
        . . . c c 1 b 1 1 a c a c a c c 
        . . . c c 1 1 1 a c a c a c a c 
        . . . c c 1 c a c a c a c a c . 
        . . . c c c a c a c a c a c . . 
        . . . . c c c a c a c a c . . . 
        . . . . . . . c c c a c c . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    _5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c c c c . . . . . 
        . . . . . c c c c 1 c . . . . . 
        . . . c c c c 1 1 1 c . . . . . 
        . . . c c c 1 1 b b c . . . . . 
        . . . c c 1 b b b 1 c . . . . . 
        . . . c c 1 b 1 1 a c a c a c c 
        . . . c c 1 1 1 a c a c a c a c 
        . . . c c 1 c a c a c a c a c . 
        . . . c c c a c a c a c a c . . 
        . . . . c c c a c a c a c . . . 
        . . . . . . . c c c a c c . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    _6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c c c c . . . . . 
        . . . . . c c c c 1 c . . . . . 
        . . . c c c c 1 1 1 c . . . . . 
        . . . c c c 1 1 b b c . . . . . 
        . . . c c 1 b b b 1 c . . . . . 
        . . . c c 1 b 1 1 a c a c a c c 
        . . . c c 1 1 1 a c a c a c a c 
        . . . c c 1 c a c a c a c a c . 
        . . . c c c a c a c a c a c . . 
        . . . . c c c a c a c a c . . . 
        . . . . . . . c c c a c c . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    _2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c c c c . . . . . 
        . . . . . c c c c 1 c . . . . . 
        . . . c c c c 1 1 1 c . . . . . 
        . . . c c c 1 1 b b c . . . . . 
        . . . c c 1 b b b 1 c . . . . . 
        . . . c c 1 b 1 1 a c a c a c c 
        . . . c c 1 1 1 a c a c a c a c 
        . . . c c 1 c a c a c a c a c . 
        . . . c c c a c a c a c a c . . 
        . . . . c c c a c a c a c . . . 
        . . . . . . . c c c a c c . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
})
