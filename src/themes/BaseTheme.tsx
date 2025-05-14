import { createTheme, ThemeProvider } from "@mui/material/styles";

export let theme = createTheme();

theme = createTheme(theme, {
  typography: {
    fontFamily: "Agency FB, Arial, sans-serif",
    h1: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
    h2: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
    h3: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
    h4: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
    h5: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
    h6: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
    body1: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
    body2: {
      fontFamily: "Agency FB, Arial, sans-serif",
    },
  },
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: "#FFF",
      },
      name: "primary",
    }),
  },
});

export const formInputOverrides = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.25)", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "rgba(0, 0, 0, 0.3)", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 0, 0, 0.45)", // Focused border color
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(0, 0, 0, 0.6)", // Label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 0, 0, 0.45)", // Focused label color
  },
};

interface BaseThemeProviderProps {
  children: React.ReactNode;
}

const BaseThemeProvider = ({ children }: BaseThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default BaseThemeProvider;
