const overlap = "rgba(0, 0, 0, .15)";

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor: "#011627",
    foregroundColor: "#d6deeb",
    borderColor: "rgba(126, 87, 194, 0.3)",
    cursorColor: "#7e57c2",
    cursorAccentColor: "#ffffff",
    selectionColor: "rgba(248, 28, 229, 0.3)",
    colors: {
      black: "#011627",
      red: "#EF5350",
      green: "#22da6e",
      yellow: "#addb67",
      blue: "#82aaff",
      magenta: "#c792ea",
      cyan: "#21c7a8",
      white: "#ffffff",
      lightBlack: "#575656",
      lightRed: "#ef5350",
      lightGreen: "#22da6e",
      lightYellow: "#ffeb95",
      lightBlue: "#82aaff",
      lightMagenta: "#c792ea",
      lightCyan: "#7fdbca",
      lightWhite: "#ffffff"
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
      background-color: #010e1a;
      color: #5f7e97;
    }
    .tab_tab::before {
      background-color: #272B3B;
    }
    .tab_active {
      background-color: #0b2942;
      color: #d2dee7;
    }
    .tab_active::before {
      background-color: #262A39;
    }
    .tab_text {
      background-color: #010e1a;
      color: #5f7e97;
    }
    .tab_textActive {
      background-color: #0b2942;
      color: #d2dee7;
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
      border-right: 1px solid #575656 !important;
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
      background-color: #ffffff !important;
      border-radius: 4px;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
      padding: 3px 6px 3px 24px !important;
      color: #011627 !important;
      opacity: 0.9 !important;
      margin-right: 2px;
    }
    #hyper-search-input:focus {
      opacity: 1.0 !important;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
    }
  `
  });
