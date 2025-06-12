import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomTextField, {
  CustomTextFieldProps,
} from "@/components/shared/TextInput";

// A simple custom icon substitute (not MUI)
const CustomIcon = () => (
  <span
    style={{
      display: "inline-block",
      width: 16,
      height: 16,
      backgroundColor: "#999",
      borderRadius: "50%",
    }}
  />
);

const meta: Meta<typeof CustomTextField> = {
  title: "Components/CustomTextField",
  component: CustomTextField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },

    // Color Presets
    colorPreset: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    customColor: { control: "color" },
    focusedColor: { control: "color" },
    labelColor: { control: "color" },
    helperTextColor: { control: "color" },
    textColor: { control: "color" },
    errorColor: { control: "color" },

    // Size and Shape
    sizePreset: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    customHeight: { control: "text" },
    customWidth: { control: "text" },
    fullWidth: { control: "boolean" },
    borderRadius: { control: "text" },
    borderColor: { control: "color" },
    borderWidth: { control: "number" },
    borderStyle: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
    },

    // Typography
    fontSize: { control: "text" },
    fontWeight: { control: "text" },
    fontFamily: { control: "text" },

    // Icons
    iconStart: { control: false },
    iconEnd: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof CustomTextField>;

export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Type something...",
    helperText: "Helper text",
    sizePreset: "medium",
  },
};

export const WithCustomIcons: Story = {
  args: {
    label: "With Icons",
    placeholder: "Enter text",
    iconStart: <CustomIcon />,
    iconEnd: <CustomIcon />,
    helperText: "With custom (non-MUI) icons",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Error",
    placeholder: "Something went wrong",
    error: true,
    helperText: "This field has an error",
  },
};

export const CustomStyles: Story = {
  args: {
    label: "Custom Styles",
    placeholder: "Styled input",
    customColor: "#8e44ad",
    focusedColor: "#9b59b6",
    labelColor: "#34495e",
    helperTextColor: "#95a5a6",
    textColor: "#2c3e50",
    borderColor: "#8e44ad",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: 500,
    fontFamily: "Courier New",
    helperText: "Styled with custom props",
    customWidth: "300px",
  },
};
