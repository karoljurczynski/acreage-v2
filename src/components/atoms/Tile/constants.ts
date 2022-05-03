import COLORS from "../../../tools/styles/colors"


export const TILE_TYPE = {
    MENU_ITEM: 'menu-item'
};

export const TILE_PRESET: TilePreset = {
    [TILE_TYPE.MENU_ITEM]: {
        color: COLORS.ORANGE,
        clickable: true
    }
};