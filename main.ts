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
}
let Player_1: Sprite = null
Level_1()
forever(function () {
	
})
