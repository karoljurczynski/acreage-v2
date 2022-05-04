interface TileWrapperProps {
    color: string;
    clickable: boolean;
    tileSize: number;
    iconSize: number;
}
interface TileProps {
    icon: string;
    type: string;
    title?: string;
}
interface TilePreset {
    [key: string]: TilePresetValue;
}
interface TilePresetValue {
    color: string;
    clickable: boolean;
    tileSize: number;
    iconSize: number;
}
