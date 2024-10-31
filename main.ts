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
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    myEnemy.setVelocity(randint(0, 100), randint(0, 100))
}
let myEnemy: Sprite = null
let Player_1: Sprite = null
Level_1()
forever(function () {
	
})
