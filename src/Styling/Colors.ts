export interface IColor {
  hex: string;
  rgb: string;
  rgba: (alpha: number) => string;
}

// Neutral
export const White: IColor = {
  hex: '#FFFFFF',
  rgb: 'rgb(255,255,255)',
  rgba: (alpha: number = 1) => `rgba(255,255,255,${alpha})`
}

export const Whisper: IColor = {
  hex: '#EEEEEE',
  rgb: 'rgb(238,238,238)',
  rgba: (alpha: number = 1) => `rgba(238,238,238,${alpha})`
}

export const DimGrey: IColor = {
  hex: '#616161',
  rgb: 'rgb(97,97,97)',
  rgba: (alpha: number = 1) => `rgba(97,97,97,${alpha})`
}




// Primary 
export const VeniceBlue: IColor = {
  hex: '#2F5472',
  rgb: 'rgb(47,84,114)',
  rgba: (alpha: number = 1) => `rgba(47,84,114,${alpha})`
}

export const CadetBlue: IColor = {
  hex: '#559BAB',
  rgb: 'rgb(85,155,171)',
  rgba: (alpha: number = 1) => `rgba(85,155,171,${alpha})`
}

export const Riptide: IColor = {
  hex: '#8AD9D0',
  rgb: 'rgb(138,217,208)',
  rgba: (alpha: number = 1) => `rgba(138,217,208,${alpha})`
}

export const Bermuda: IColor = {
  hex: '#8AC9C6',
  rgb: 'rgb(138,201,198)',
  rgba: (alpha: number = 1) => `rgba(138,201,198,${alpha})`
}


// Secondary

export const HummingBird: IColor = {
  hex: '#CEF2E6',
  rgb: 'rgb(206,242,230)',
  rgba: (alpha: number = 1) => `rgba(206,242,230,${alpha})`
}

export const RiceFlower: IColor = {
  hex: '#F1F6CF',
  rgb: 'rgb(241,246,207)',
  rgba: (alpha: number = 1) => `rgba(241,246,207,${alpha})`
}

export const Tacao: IColor = {
  hex: '#F2B47E',
  rgb: 'rgb(242,180,126)',
  rgba: (alpha: number = 1) => `rgba(242,180,126,${alpha})`
}

export const GoldenTainoi: IColor = {
  hex: '#FEC858',
  rgb: 'rgb(254,200,88)',
  rgba: (alpha: number = 1) => `rgba(254,200,88,${alpha})`
}


// Functional


export const WildWatermelon: IColor = {
  hex: '#FF5A62',
  rgb: 'rgb(255,90,98)',
  rgba: (alpha: number = 1) => `rgba(255,90,98,${alpha})`
}

export const Amour: IColor = {
  hex: '#FFEEEF',
  rgb: 'rgb(255,238,239)',
  rgba: (alpha: number = 1) => `rgba(255,238,239,${alpha})`
}
