scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (info.score() == 5) {
        tiles.setCurrentTilemap(tilemap`level0`)
        game.splash("Level 2", "Press A to start")
        Player_1.setPosition(2, 4)
    }
})
function Level_1 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    game.splash("Level 1", "Press A to start")
    Player_1 = sprites.create(assets.image`myImage`, SpriteKind.Player)
    Player_1.setPosition(25, 25)
    animation.runImageAnimation(
    Player_1,
    assets.animation`myAnim`,
    200,
    true
    )
    controller.moveSprite(Player_1)
    Player_1.setStayInScreen(true)
    scene.cameraFollowSprite(Player_1)
    Enemyting()
}
function Enemyting () {
    for (let index = 0; index < 3; index++) {
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
        tiles.placeOnRandomTile(myEnemy, sprites.skillmap.islandTile4)
        myEnemy.setVelocity(33, 26)
        myEnemy.setBounceOnWall(true)
        pause(5000)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
let myEnemy: Sprite = null
let Player_1: Sprite = null
info.setLife(3)
info.setScore(0)
Level_1()
