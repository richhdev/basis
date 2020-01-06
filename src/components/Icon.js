import React from "react";
import PropTypes from "prop-types";
import useTheme from "../hooks/useTheme";

export const NAMES = [
  "arrow-back",
  "arrow-forward",
  "birthday",
  "calculator",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "comparison",
  "cross-small",
  "cross",
  "download",
  "edit",
  "external-link",
  "eye-hidden",
  "eye-visible",
  "face-id",
  "fingerprint",
  "hamburger",
  "lock-small",
  "lock",
  "mail",
  "message",
  "notification-new",
  "notification",
  "overflow-menu",
  "person",
  "question",
  "search",
  "shield",
  "stopwatch-alt",
  "stopwatch",
  "tick-small",
  "tick",
  "time",
  "triangle-down",
  "triangle-up"
];
export const COLORS = [
  "grey.t75",
  "primary.blue.t100",
  "highlight.blue.t100",
  "conditional.positive.graphics",
  "conditional.negative.graphics",
  "white"
];
export const SECONDARY_COLORS = ["highlight.blue.t100"];

export const DEFAULT_PROPS = {
  color: "grey.t75",
  secondaryColor: "highlight.blue.t100"
};

function Icon(_props) {
  const props = { ...DEFAULT_PROPS, ..._props };
  const { name, color, secondaryColor } = props;
  const theme = useTheme();
  const IconComponent = require(`../icons/${name}`).default;

  return (
    <IconComponent
      primaryColor={theme[`icon.${color}`].fill}
      secondaryColor={theme[`icon.${secondaryColor}`].fill}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf(NAMES).isRequired,
  color: PropTypes.oneOf(COLORS),
  secondaryColor: PropTypes.oneOf(SECONDARY_COLORS)
};

export default Icon;

/* 
  Tools used to simplify the icons:
  - https://svgomg.firebaseapp.com/
  - https://transform.tools/svg-to-jsx
*/
