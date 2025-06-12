// components/CustomTextField.tsx
import React, { ChangeEvent, FocusEvent } from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  styled,
  InputAdornment,
} from "@mui/material";

// --- Define Props ---
export interface CustomTextFieldProps extends Omit<MuiTextFieldProps, "color"> {
  // Color Props
  colorPreset?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  customColor?: string;
  focusedColor?: string;
  labelColor?: string;
  helperTextColor?: string;
  textColor?: string;
  errorColor?: string;

  // Size and Shape
  sizePreset?: "small" | "medium" | "large";
  customHeight?: string | number;
  customWidth?: string | number;
  fullWidth?: boolean;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number;
  borderStyle?: string;

  // Typography
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;

  // Icon Support (not MUI icons)
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;

  // Event handlers
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// --- Size Presets ---
const sizeStyles = {
  small: {
    fontSize: "0.8rem",
    padding: "6px 10px",
  },
  medium: {
    fontSize: "1rem",
    padding: "10px 12px",
  },
  large: {
    fontSize: "1.2rem",
    padding: "14px 16px",
  },
};

// --- Styled Component ---
const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) =>
    ![
      "colorPreset",
      "customColor",
      "focusedColor",
      "labelColor",
      "helperTextColor",
      "textColor",
      "errorColor",
      "sizePreset",
      "customHeight",
      "customWidth",
      "borderRadius",
      "borderColor",
      "borderWidth",
      "borderStyle",
      "fontSize",
      "fontWeight",
      "fontFamily",
    ].includes(prop as string),
})<CustomTextFieldProps>(
  ({
    theme,
    colorPreset = "primary",
    customColor,
    focusedColor,
    labelColor,
    helperTextColor,
    textColor,
    errorColor,
    sizePreset = "medium",
    customHeight,
    customWidth,
    borderRadius = 8,
    borderColor = "#ccc",
    borderWidth = 1,
    borderStyle = "solid",
    fontSize,
    fontWeight = 400,
    fontFamily = "inherit",
  }) => {
    const resolvedColor = customColor || theme.palette[colorPreset].main;
    const resolvedFocusColor = focusedColor || resolvedColor;
    const resolvedLabelColor = labelColor || theme.palette.text.primary;
    const resolvedHelperColor = helperTextColor || theme.palette.text.secondary;
    const resolvedErrorColor = errorColor || theme.palette.error.main;
    const size = sizeStyles[sizePreset];

    return {
      width: customWidth,
      "& .MuiInputBase-root": {
        padding: size.padding,
        height: customHeight,
        borderRadius,
        borderColor,
        borderWidth,
        borderStyle,
        fontFamily,
        fontSize: fontSize || size.fontSize,
        fontWeight,
        color: textColor || theme.palette.text.primary,
        "&:hover fieldset": {
          borderColor: resolvedColor,
        },
        "&.Mui-focused fieldset": {
          borderColor: resolvedFocusColor,
          borderWidth: 2,
        },
        "&.Mui-error fieldset": {
          borderColor: resolvedErrorColor,
        },
      },
      "& .MuiInputLabel-root": {
        color: resolvedLabelColor,
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: resolvedFocusColor,
      },
      "& .MuiFormHelperText-root": {
        color: resolvedHelperColor,
      },
    };
  }
);

// --- Final Component ---
const CustomTextField: React.FC<CustomTextFieldProps> = ({
  iconStart,
  iconEnd,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  return (
    <StyledTextField
      {...props}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      InputProps={{
        ...props.InputProps,
        startAdornment: iconStart && (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ),
        endAdornment: iconEnd && (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ),
      }}
    />
  );
};

export default CustomTextField;
