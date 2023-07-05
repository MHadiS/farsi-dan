import { useContext } from "react";
import { Context } from "../utils/Contexts";

const DARK_THEME = {
  "colors": {
    "primary": "rgb(255, 184, 112)",
    "onPrimary": "rgb(74, 40, 0)",
    "primaryContainer": "rgb(105, 60, 0)",
    "onPrimaryContainer": "rgb(255, 220, 190)",
    "secondary": "rgb(225, 193, 164)",
    "onSecondary": "rgb(64, 44, 24)",
    "secondaryContainer": "rgb(89, 66, 44)",
    "onSecondaryContainer": "rgb(255, 220, 190)",
    "tertiary": "rgb(192, 204, 154)",
    "onTertiary": "rgb(43, 52, 16)",
    "tertiaryContainer": "rgb(65, 75, 36)",
    "onTertiaryContainer": "rgb(220, 232, 180)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(32, 27, 22)",
    "onBackground": "rgb(235, 224, 217)",
    "surface": "rgb(32, 27, 22)",
    "onSurface": "rgb(235, 224, 217)",
    "surfaceVariant": "rgb(81, 69, 58)",
    "onSurfaceVariant": "rgb(213, 195, 181)",
    "outline": "rgb(157, 142, 129)",
    "outlineVariant": "rgb(81, 69, 58)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(235, 224, 217)",
    "inverseOnSurface": "rgb(53, 47, 43)",
    "inversePrimary": "rgb(139, 80, 0)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(43, 35, 27)",
      "level2": "rgb(50, 40, 29)",
      "level3": "rgb(57, 44, 32)",
      "level4": "rgb(59, 46, 33)",
      "level5": "rgb(63, 49, 35)"
    },
    "surfaceDisabled": "rgba(235, 224, 217, 0.12)",
    "onSurfaceDisabled": "rgba(235, 224, 217, 0.38)",
    "backdrop": "rgba(57, 46, 37, 0.4)"
  }
}

const LIGHT_THEME = {
  "colors": {
    "primary": "rgb(139, 80, 0)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 220, 190)",
    "onPrimaryContainer": "rgb(45, 22, 0)",
    "secondary": "rgb(115, 90, 66)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 220, 190)",
    "onSecondaryContainer": "rgb(41, 24, 6)",
    "tertiary": "rgb(88, 99, 58)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(220, 232, 180)",
    "onTertiaryContainer": "rgb(22, 30, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(32, 27, 22)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 27, 22)",
    "surfaceVariant": "rgb(242, 223, 209)",
    "onSurfaceVariant": "rgb(81, 69, 58)",
    "outline": "rgb(131, 116, 104)",
    "outlineVariant": "rgb(213, 195, 181)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(53, 47, 43)",
    "inverseOnSurface": "rgb(250, 239, 231)",
    "inversePrimary": "rgb(255, 184, 112)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(249, 242, 242)",
      "level2": "rgb(246, 237, 235)",
      "level3": "rgb(242, 232, 227)",
      "level4": "rgb(241, 231, 224)",
      "level5": "rgb(239, 227, 219)"
    },
    "surfaceDisabled": "rgba(32, 27, 22, 0.12)",
    "onSurfaceDisabled": "rgba(32, 27, 22, 0.38)",
    "backdrop": "rgba(57, 46, 37, 0.4)"
  }
}
export let themes = {dark: DARK_THEME, light: LIGHT_THEME}
export let theme = themes["dark"]