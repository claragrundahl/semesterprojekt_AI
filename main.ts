scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    game.splash("Level 2", "Press A to start")
    Player_1.setPosition(2, 4)
})
function Level_1 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    game.splash("Level 1", "Press A to start")
    Player_1 = sprites.create(img`
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
    Player_1.setPosition(5, 4)
    controller.moveSprite(Player_1)
    Player_1.setStayInScreen(true)
    scene.cameraFollowSprite(Player_1)
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
        `, SpriteKind.Projectile)
    _1.setPosition(125, 8)
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
        `, SpriteKind.Projectile)
    _2.setPosition(5, 100)
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
        `, SpriteKind.Projectile)
    _3.setPosition(0, 0)
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
        `, SpriteKind.Projectile)
    _4.setPosition(0, 0)
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
        `, SpriteKind.Projectile)
    _5.setPosition(0, 0)
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
        `, SpriteKind.Projectile)
    _6.setPosition(0, 0)
}
let _6: Sprite = null
let _5: Sprite = null
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
let Player_1: Sprite = null
Level_1()
forever(function () {
	
})
