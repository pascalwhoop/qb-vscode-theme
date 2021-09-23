import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';
const colors = {
  // official colors
  black: '#000000',
  white: '#EBEBEB',
  blue: '#00ADEF',
  cyan: '#37DEE7',

  // red: '#CC0000',
  red: '#EB5D08',
  green: '#05C000',
  yellow: '#FFC700',

  // based on QB brand colors pdf
  warm_grey: '#BEB5AF',
  // darkest shade for UI #001521
  dark_grey_3: "#001521",
  dark_grey_2: "#081C28",
  dark_grey_1: "#1D303B",
  // custom black
  custom_black: "#0C0C0C",

  //made up myself
  pink: '#F20086' // triad to blue from product blue 

  // background shades #081C28, #122531, #1D303B
}

const colorSet: IColorSet = {
  base: {
    // background: colors.dark_grey_3,
    background: colors.custom_black,
    foreground: colors.white,
    color1: colors.blue,
    color2: colors.red, 
    color3: colors.green,
    color4: colors.yellow
  },
  syntax: {
    // customise
    identifier: colors.white,
    classMember: colors.white,
    number: colors.cyan,
    boolean: colors.yellow,
    class: colors.yellow,
    function: colors.pink,
    functionCall: colors.blue,
    keyword: colors.pink,
    string: colors.green,
    comment: "#666666"
  },
  ui: {
    "guide": colors.warm_grey
  },
  terminal: {
  },
  overrides: {
    "editorIndentGuide.activeBackground": colors.blue,
		// "sideBar.background": colors.dark_grey_2,
    // "sideBarSectionHeader.background": colors.dark_grey_2,
    "activityBar.foreground": colors.blue,
    // "activityBar.background": colors.dark_grey_3,
    "activityBarBadge.background": colors.red,
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
