import { IColor } from '~/Styling/Colors';

export const linearGradient = (color1: IColor, color2: IColor): string => {
  return `
    background: ${color1.rgb};
    background: -moz-linear-gradient(180deg, ${color1.rgba(1)} 0%, ${color2.rgba(1)} 100%);
    background: -webkit-linear-gradient(180deg, ${color1.rgba(1)} 0%, ${color2.rgba(1)} 100%);
    background: linear-gradient(180deg, ${color1.rgba(1)} 0%, ${color2.rgba(1)} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${color1.hex}",endColorstr="${color2.hex}",GradientType=1);
  `;
}

export const borderRadius = (radius: string): string => {
  return `
    -webkit-border-radius: ${radius};
    -moz-border-radius: ${radius};
    border-radius: ${radius};
  `;
}
