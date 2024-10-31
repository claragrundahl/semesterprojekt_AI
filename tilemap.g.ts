// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100004040404040401050404040404040404040401040404010202010402040404040404020404040404040404020404040401020201040401010101010204040404040404040404040401040404040404040401040102020204020401010201010104020401050404040204010502040404040204010101010402040404010404040402040404040104010101010204040404020404040401040404040404040404040104040404010102030202020201040401010401010104040404040105010404040204010404040101040401040104040402040204040405010404010401040102020402020202010104040104010405040404040404040404040401040404`, img`
. . . . . . 2 . . . . . . . . . 
. . 2 . . . 2 2 2 2 . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
2 2 2 2 . . 2 2 2 2 2 2 . . . . 
. . . . . . . . 2 . . . . . . . 
. 2 . 2 2 2 2 . 2 . 2 2 2 2 2 2 
. 2 . 2 . . . . 2 . 2 . 2 . . . 
. 2 . 2 2 2 2 . 2 . . . 2 . . . 
. 2 . . . . 2 . 2 2 2 2 2 . . . 
. 2 . . . . 2 . . . . . . . . . 
. 2 . . . . 2 2 2 2 2 2 2 2 2 . 
. 2 2 . 2 2 2 . . . . . 2 . 2 . 
. . 2 . 2 . . . 2 2 . . 2 . 2 . 
. . 2 . 2 . . . . 2 . . 2 . 2 . 
2 2 2 . 2 2 2 2 2 2 . . 2 . 2 . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight5,sprites.dungeon.doorOpenNorth,sprites.skillmap.islandTile4,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
