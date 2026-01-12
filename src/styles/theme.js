const theme = {
  colors: {
    text: {
      primary: "#F8F8F2",      // texte principal sur fond sombre
      secondary: "#C1C2C5",    // texte atténué
      muted: "#8A8C8F",        // encore plus atténué
      onPrimary: "#FFFFFF",    // texte sur fond primary
      onSecondary: "#FFFFFF",  // texte sur fond secondary
      onAccent: "#232530",     // texte sombre sur accent clair
    },
    primary: {
      base: "#9605F7", // couleur de base
      hover: "#8205D9", // plus sombre ou saturé
      active: "#6C04B8", // encore plus sombre
      tint: "#B04CFA",   // plus clair
      shade: "#5B038C",  // plus foncé
      tone: "#8A05E0"    // ton plus doux
    },
    secondary: {
      base: "#00A43B",
      hover: "#008F33",
      active: "#00782A",
      tint: "#33B866",
      shade: "#006622",
      tone: "#009933"
    },
    accent: {
      base: "#FFB86C",
      hover: "#FFA94D",
      active: "#FF9933",
      tint: "#FFC68C",
      shade: "#E69959",
      tone: "#FFAD66"
    },
    neutral: {
      base: "#414558",
      hover: "#373A49",
      active: "#2D303B",
      tint: "#5A5E73",
      shade: "#2A2D38",
      tone: "#3C3F50"
    },
    info: { base: "#8BE9FD" },
    warning: { base: "#302008" },
    error: { base: "#E5484D" },
    success: { base: "#51FA7B" },
    backgrounds: {
      base: "#232530",        /* couleur de base */
      darker: "#1c1d28",      /* un peu plus foncé */
      dark: "#1f202b",        /* légèrement plus clair que darker */
      light: "#2b2c3a",       /* nuance plus claire */
      lighter: "#38394b",     /* encore plus clair, mais toujours sombre */
      accent: "#2e2f44"       /* pour sections ou survol */
    }
  },
  fontSizes: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
};

export default theme;
