module.exports.onWindow = browserWindow =>
  browserWindow.setVibrancy("ultra-dark");

const backgroundColor = "rgba(0, 0, 0, .65)";
const overlap = "rgba(0, 0, 0, .15)";

const colors = {
  "editorCursor.foreground": "#7e57c2",
  "tab.activeBackground": "#0b2942",
  "tab.activeForeground": "#d2dee7",
  "tab.border": "#272B3B",
  "tab.activeBorder": "#262A39",
  "tab.inactiveBackground": "#010e1a",
  "tab.inactiveForeground": "#5f7e97",
  "terminal.ansiWhite": "#ffffff",
  "terminal.ansiBlack": "#011627",
  "terminal.ansiBlue": "#82AAFF",
  "terminal.ansiCyan": "#7fdbca",
  "terminal.ansiGreen": "#ba67db",
  "terminal.ansiMagenta": "#C792EA",
  "terminal.ansi#5f7e97": "#7fdbca",
  "terminal.ansiYellow": "#addb67",
  "terminal.ansiBrightWhite": "#ffffff",
  "terminal.ansiBrightBlack": "#575656",
  "terminal.ansiBrightBlue": "#82AAFF",
  "terminal.ansiBrightCyan": "#7fdbca",
  "terminal.ansiBrightGreen": "#addb67",
  "terminal.ansiBrightMagenta": "#C792EA",
  "terminal.ansiBright#5f7e97": "#7fdbca",
  "terminal.ansiBrightYellow": "#addb67"
};

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor: colors["terminal.ansiWhite"],
    borderColor: overlap,
    cursorColor: colors["editorCursor.foreground"],
    colors: {
      black: colors["terminal.ansiBlack"],
      red: colors["terminal.ansiMagenta"],
      green: colors["terminal.ansiGreen"],
      yellow: colors["terminal.ansiYellow"],
      blue: colors["terminal.ansiBlue"],
      magenta: colors["terminal.ansiMagenta"],
      cyan: colors["terminal.ansiCyan"],
      white: colors["terminal.ansiBrightWhite"],
      lightBlack: colors["terminal.ansiBrightBlack"],
      lightRed: colors["terminal.ansiBrightMagenta"],
      lightGreen: colors["terminal.ansiBrightGreen"],
      lightYellow: colors["terminal.ansiBrightYellow"],
      lightBlue: colors["terminal.ansiBrightBlue"],
      lightMagenta: colors["terminal.ansiBrightMagenta"],
      lightCyan: colors["terminal.ansiBrightCyan"],
      lightWhite: colors["terminal.ansiBrightWhite"]
    },
    css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background-color: ${overlap} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    .tab_tab {
      border: 0;
      background-color: ${colors["tab.inactiveBackground"]};
      color: ${colors["tab.inactiveForeground"]};
    }
    .tab_tab::before {
      background-color: ${colors["tab.border"]};
    }
    .tab_active {
      background-color: ${colors["tab.activeBackground"]};
      color: ${colors["tab.activeForeground"]};
    }
    .tab_active::before {
      background-color: ${colors["tab.activeBorder"]};
    }
    .tab_text {
      background-color: ${colors["tab.inactiveBackground"]};
      color: ${colors["tab.inactiveForeground"]};
    }
    .tab_textActive {
      background-color: ${colors["tab.activeBackground"]};
      color: ${colors["tab.activeForeground"]};
    }
    .hyper-search-wrapper {
        border: 0 !important;
        padding: 0 !important;
        background-color: transparent !important;
        display: flex;
        opacity: 0.8 !important;
      }
    .hyper-search-wrapper button {
      top: 0 !important;
      opacity: 0.8 !important;
      padding: 0 6px;
      cursor: pointer;
    }
    .hyper-search-wrapper button:hover {
      opacity: 1.0 !important;
    }
    .hyper-search-wrapper button:nth-of-type(1) {
      border-radius: 4px 0 0 4px !important;
      border-right: 1px solid ${colors["terminal.ansiBrightBlack"]} !important;
    }
    .hyper-search-wrapper button:nth-of-type(2) {
      border-radius: 0 4px 4px 0 !important;
    }
    .hyper-search-wrapper:before {
      width: 20px;
      color: #000;
      position: absolute;
      content: "🔍";
      font-size: 10px;
      margin: 7px;
      z-index: 999;
    }
    #hyper-search-input {
      background-color: ${colors["terminal.ansiWhite"]} !important;
      border-radius: 4px;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
      padding: 3px 6px 3px 24px !important;
      color: ${colors["terminal.ansiBlack"]} !important;
      opacity: 0.9 !important;
      margin-right: 2px;
    }
    #hyper-search-input:focus {
      opacity: 1.0 !important;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
    }
  `
  });
