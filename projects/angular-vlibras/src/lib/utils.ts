export type WidgetPosition = 'left' | 'right' | 'bottom' | 'top' | 'bottom-left' | 'top-left' | 'bottom-right' | 'top-right';

export const mapPosition: Record<WidgetPosition, string> = {
  'left': 'L',
  'right': 'R',
  'bottom': 'B',
  'top': 'T',
  'bottom-left': 'BL',
  'top-left': 'TL',
  'bottom-right': 'BR',
  'top-right': 'TR',
};

export type AvatarOption = 'icaro' | 'hosana' | 'guga' | 'random';
