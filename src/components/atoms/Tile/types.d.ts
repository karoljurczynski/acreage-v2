interface WrapperProps {
    color: string;
    clickable: boolean;
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
    as: 'a' | 'button' | 'div';
    color: string;
    clickable: boolean;
}
