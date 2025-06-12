import React, { MouseEvent } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";

type ColorPreset =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";
type SizePreset = "small" | "medium" | "large";
type PositionPreset = "left" | "center" | "right";

interface CustomButtonProps extends Omit<MuiButtonProps, "color"> {
  // Color Customization
  colorPreset?: ColorPreset;
  customColor?: string;
  hoverColor?: string;
  activeColor?: string;
  textColor?: string;
  disabledColor?: string;

  // Size & Layout
  sizePreset?: SizePreset;
  customHeight?: number | string;
  customWidth?: number | string;
  fullWidth?: boolean;
  minWidth?: number | string;

  // Position & Spacing
  positionPreset?: PositionPreset;
  margin?: string | number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: string | number;

  // Border & Shape
  borderRadius?: number | string;
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: string;

  // Shadow & Effects
  shadow?: string;
  hoverShadow?: string;
  activeShadow?: string;

  // Typography
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number | string;
  letterSpacing?: number | string;

  // Event Handlers
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    ![
      "colorPreset",
      "customColor",
      "hoverColor",
      "activeColor",
      "textColor",
      "disabledColor",
      "sizePreset",
      "customHeight",
      "customWidth",
      "minWidth",
      "positionPreset",
      "marginTop",
      "marginBottom",
      "marginLeft",
      "marginRight",
      "borderRadius",
      "borderWidth",
      "borderColor",
      "borderStyle",
      "shadow",
      "hoverShadow",
      "activeShadow",
      "fontFamily",
      "fontWeight",
      "fontSize",
      "letterSpacing",
    ].includes(prop as string),
})<CustomButtonProps>(
  ({
    theme,
    colorPreset = "primary",
    customColor,
    hoverColor,
    activeColor,
    textColor,
    disabledColor,
    sizePreset = "medium",
    customHeight,
    customWidth,
    minWidth,
    positionPreset,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    borderRadius = "50px",
    borderWidth = 1,
    borderColor,
    borderStyle = "solid",
    shadow,
    hoverShadow,
    activeShadow,
    fontFamily = "Gotham",
    fontWeight = 500,
    fontSize,
    letterSpacing,
    fullWidth,
    variant,
  }) => {
    // Color calculations
    const backgroundColor = customColor || theme.palette[colorPreset].main;
    const hoverBgColor = hoverColor || theme.palette[colorPreset].dark;
    const activeBgColor = activeColor || theme.palette[colorPreset].dark;
    const textColorFinal =
      textColor ||
      (variant === "contained"
        ? theme.palette.getContrastText(backgroundColor)
        : backgroundColor);
    const disabledBgColor =
      disabledColor || theme.palette.action.disabledBackground;

    // Size calculations
    const sizes = {
      small: { padding: "4px 16px", fontSize: "0.8125rem" },
      medium: { padding: "6px 20px", fontSize: "0.875rem" },
      large: { padding: "8px 24px", fontSize: "0.9375rem" },
    };

    // Position calculations
    const positionMap = {
      left: { marginRight: "auto" },
      center: { margin: "0 auto" },
      right: { marginLeft: "auto" },
    };

    return {
      fontFamily,
      fontWeight,
      fontSize: fontSize || sizes[sizePreset].fontSize,
      letterSpacing,
      textTransform: "none",
      borderRadius,
      border: `${borderWidth}px ${borderStyle} ${
        borderColor || backgroundColor
      }`,
      boxShadow: shadow,
      padding: padding || sizes[sizePreset].padding,
      height: customHeight,
      width: customWidth,
      minWidth,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      ...(positionPreset ? positionMap[positionPreset] : {}),
      color: textColorFinal,
      backgroundColor:
        variant === "contained" ? backgroundColor : "transparent",
      "&:hover": {
        backgroundColor:
          variant === "contained" ? hoverBgColor : `${hoverBgColor}20`,
        boxShadow: hoverShadow || shadow,
        borderColor: hoverColor || borderColor || backgroundColor,
      },
      "&:active": {
        backgroundColor:
          variant === "contained" ? activeBgColor : `${activeBgColor}20`,
        boxShadow: activeShadow || shadow,
        transform: "scale(0.98)",
      },
      "&.Mui-disabled": {
        backgroundColor:
          variant === "contained" ? disabledBgColor : "transparent",
        color: theme.palette.action.disabled,
        borderColor: theme.palette.action.disabled,
      },
      "&.Mui-focusVisible": {
        boxShadow: `0 0 0 3px ${theme.palette[colorPreset].light}`,
      },
      ...(fullWidth && { width: "100%" }),
      transition: theme.transitions.create(
        ["background-color", "box-shadow", "border-color", "transform"],
        { duration: theme.transitions.duration.short }
      ),
    };
  }
);

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  onDoubleClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  const handleDoubleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onDoubleClick?.(event);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
    onMouseEnter?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
    onMouseLeave?.(event);
  };

  return (
    <StyledButton
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
