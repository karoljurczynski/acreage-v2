import COLORS from "../../../tools/styles/colors"


export const TILE_TYPE = {
    MENU_ITEM: 'menu-item',
    INFO_BUTTON: 'info-button'
};

export const TILE_PRESET: TilePreset = {
    [TILE_TYPE.MENU_ITEM]: {
        color: COLORS.ORANGE,
        clickable: true,
        tileSize: 64,
        iconSize: 48
    },
    [TILE_TYPE.INFO_BUTTON]: {
        color: COLORS.DARK_GRAY,
        clickable: true,
        tileSize: 48,
        iconSize: 24
    }
};