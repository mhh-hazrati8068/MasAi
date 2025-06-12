// components/CustomButton.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomButton from "@/components/shared/Button";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  argTypes: {
    colorPreset: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    sizePreset: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    positionPreset: {
      control: "select",
      options: ["left", "center", "right"],
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    onClick: { action: "clicked" },
    onDoubleClick: { action: "double clicked" },
    onMouseEnter: { action: "mouse entered" },
    onMouseLeave: { action: "mouse left" },
  },
} as Meta<typeof CustomButton>;

const Template: StoryFn<typeof CustomButton> = (args) => (
  <CustomButton {...args}>{args.children}</CustomButton>
);

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
  colorPreset: "primary",
  sizePreset: "medium",
  variant: "contained",
  fullWidth: false,
  borderRadius: 12,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  children: "Custom Colors",
  variant: "contained",
  customColor: "#6a1b9a",
  hoverColor: "#4a148c",
  activeColor: "#38006b",
  textColor: "#fff",
  borderColor: "#4a148c",
  borderWidth: 2,
  borderRadius: 8,
  shadow: "0 4px 6px rgba(106,27,154,0.4)",
  hoverShadow: "0 6px 8px rgba(74,20,140,0.6)",
  activeShadow: "0 2px 4px rgba(56,0,107,0.8)",
};

export const SizesAndPositions = () => (
  <>
    <CustomButton sizePreset="small" positionPreset="left" marginBottom={2}>
      Small Left
    </CustomButton>
    <CustomButton sizePreset="medium" positionPreset="center" marginBottom={2}>
      Medium Center
    </CustomButton>
    <CustomButton sizePreset="large" positionPreset="right" fullWidth>
      Large Right (Full Width)
    </CustomButton>
  </>
);

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  variant: "contained",
  disabled: true,
};

export const EventHandlers = Template.bind({});
EventHandlers.args = {
  children: "With Events",
  onClick: () => alert("Button clicked!"),
  onDoubleClick: () => alert("Button double clicked!"),
  onMouseEnter: () => console.log("Mouse entered button"),
  onMouseLeave: () => console.log("Mouse left button"),
};
