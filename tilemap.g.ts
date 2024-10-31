// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level6":return tiles.createTilemap(hex`100010000209050509090909090905050909050408090101010101010101010909090106080909010101010109090901090901060801010101090101090901010909010608010101010909090909010101010106090909010109090909090101090909090801090101010101010101010909090908090901090909090109090101090909080101010909090901090909010101060801010101010101010109090101010609090901010909090901010101010106090909010109090909010101090109090801010101010909010101010901010908010909010109090109090909090106080109090101090901090901090909060307070707070909070707070909090a`, img`
. 2 . . 2 2 2 2 2 2 . . 2 2 . . 
. 2 . . . . . . . . . 2 2 2 . . 
. 2 2 . . . . . 2 2 2 . 2 2 . . 
. . . . . 2 . . 2 2 . . 2 2 . . 
. . . . . 2 2 2 2 2 . . . . . . 
2 2 2 . . 2 2 2 2 2 . . 2 2 2 2 
. . 2 . . . . . . . . . 2 2 2 2 
. 2 2 . 2 2 2 2 . 2 2 . . 2 2 2 
. . . . 2 2 2 2 . 2 2 2 . . . . 
. . . . . . . . . . 2 2 . . . . 
2 2 2 . . 2 2 2 2 . . . . . . . 
2 2 2 . . 2 2 2 2 . . . 2 . 2 2 
. . . . . . 2 2 . . . . 2 . . 2 
. . 2 2 . . 2 2 . 2 2 2 2 2 . . 
. . 2 2 . . 2 2 . 2 2 . 2 2 2 . 
. . . . . . 2 2 . . . . 2 2 2 . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.builtin.forestTiles11,sprites.builtin.forestTiles14,sprites.builtin.forestTiles9,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010502040104020102020502060202010102020202020201060102050204020101010202010104010601020201010201010205020101020202020202010302010102020204020202020402040606020101020101010502010101010101010101010402030102020202020201020203010102020201010102040102020401020101050202020201020101010101010501010201010402040202050301020202010102020102020205020204010205040101050201020201010101010102010101010101010205020102020502040107010103040202050204020502010205050101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . 2 . . . . . . . 2 
2 . . . . . . 2 . 2 . . . . . 2 
2 2 . . 2 2 . 2 . 2 . . 2 2 . 2 
2 . . . 2 2 . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 2 2 . . 2 . . . 2 . 2 
2 . . . . . 2 . 2 2 2 2 2 2 . 2 
2 . 2 2 . . . . . . . 2 . . . 2 
2 . . 2 . . . . . . . 2 . . . 2 
2 . . 2 . . 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 . . . 2 . . . . . 2 . 2 
2 . . . . . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.skillmap.islandTile4,myTiles.tile5,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileGrass1,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile2":
            case "tile5":return tile5;
            case "myTile3":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
