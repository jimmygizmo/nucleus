import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// TODO: This file still has some obfuscated syntax which needs clarifying.


// Color Design Tokens
// TODO: The parens around the function block do what?
// Tut says this will "export an object". .. Which is different from exporting
// a function. This could be a variant of syntax for an IIAF:
// Immediately Invoked Anonymous Function. TODO: Confirm this is the case.
// Also .. what does the ... expansion operator do here?
//
// Tut changes primary 400  (in top dark block) from original: (400: "#434957",)
// TO: (400: "#f2f0f0",) --->> He changes it again later at (1:08:55) -->> #1f2a40
// TODO: WARNING! This has got to be wrong. This is like changing from Dark
// Slate Blue to almost White. Wrong. Will keep for now.
// Only done on the top section. In the bottom (light) section the equivalent shade
// has a key of: primary-600
// TODO: UPDATE: This might be correct after looking at the colors .. especially
//   If this is the color used for text against the invertedly-shadaed BG.
export const tokens = (mode) => ({
  // About the ...
  // The ternary expression returns an anonymous object with many named
  // objects inside. The outer object can be treated as a list as is JS
  // tradition it seems. The parentheses surround this returned object.
  // The ... rest/expansion operator acts on this object and expands it
  // into multiple objects. I guess this is a list/array of objects now
  // but I think that also depends on the outer/receiving context, but
  // I am not 100% clear.
  ...(mode === 'dark'
  ?
    // True - dark mode
    {
      faintGridLines: "#353535",
      contrastMax: "#ffffff",
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
      },
    }  // end true dark mode anonymouse object in ternary
    :
    // False - light mode
    {
      faintGridLines: "#e3e3e3",
      contrastMax: "#000000",
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
    }  // end false light mode anonymouse object in ternary
    )  // end ... expansion
}  // end anonymous function block
);  // end function block parentheses - possible IIAF syntax - TODO: Confirm.
// NOTE The above end parens (IIAF?) are also the end of the export statement,
// hence the semicolon after them. The parens intervened before the normal
// statement end, one might say .. if in fact this is really IIAF.


// Material UI Theme Settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
      ?
        // True - dark mode
        {
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.primary[500],
          },
        }  // end true dark mode anonymouse object in ternary
        :
        // False - light mode
          {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              // Tut: Custom color here. Nothing in the theme worked.
              default: "#fcfcfc",
            },
          }  // end false light mode anonymouse object in ternary
        )  // end ... expansion
    },  // end palette object
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    }  // end typograpghy object
  };  // end return statement

};


// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
  }  // end anonymous object - end argument to createContext
);  // end export of named (ColorModeContext) return of createContext() call


// useMode
export const useMode = () => {
  const [ mode, setMode ] = useState("dark");

  // useMemo is called with arg of an anon func. TODO: Syntax still confusing,
  //   so it is necessary to unravel precisely how this works.
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode( (prev) => (prev === "light" ? "dark" : "light") )
    }),  // end IIAF syntax - TODO: Confirm.
    []  //  watched/dependencies for useMemo
  );  // end useMemo call

  const theme = useMemo(
    () => createTheme(themeSettings(mode)), [mode]
  );  // end useMemo call

  return [theme, colorMode];

};  // end export of useMode, a named anonymous function

