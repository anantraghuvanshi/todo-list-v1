import React from "react";
import { themes } from "./themes";

const ThemeSelector = ({ onThemeChange }) => (
  <select
    className="themeSelector-dropdown"
    onChange={(e) => onThemeChange(e.target.value)}
  >
    {Object.keys(themes).map((theme) => (
      <option key={theme} value={theme}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </option>
    ))}
  </select>
);

export default ThemeSelector;
