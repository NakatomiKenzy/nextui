import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {parseToRgba, readableColor} from "color2k";

import {commonColors} from "../src/colors";

type ColorsItem = {
  color: string;
  className?: string;
  textClassName?: string;
};

type SwatchColors = {
  title: string;
  items: ColorsItem[];
};

type SwatchSetProps = {
  colors: SwatchColors[];
  isSematic?: boolean;
};

const Swatch = ({color}: {color: string}) => {
  const colorText = color
    ? `#${parseToRgba(color)
        .slice(0, 3)
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()}`
    : "N/A";

  return (
    <div
      className="flex flex-col items-center justify-center w-24 h-24 m-2 rounded-xl shadow-lg"
      style={{
        backgroundColor: color,
      }}
    >
      <span
        style={{
          color: readableColor(color),
        }}
      >
        {colorText}
      </span>
    </div>
  );
};

const SematicSwatch = ({
  color,
  className,
  textClassName,
}: {
  color: string;
  className?: string;
  textClassName?: string;
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center w-24 h-24 m-2 rounded-xl shadow-lg`}
    >
      <span className={`${textClassName} text-sm`}>{color}</span>
    </div>
  );
};

const SwatchSet = ({colors, isSematic = false}: SwatchSetProps) => (
  <div className="flex flex-row flex-wrap items-center justify-center w-full h-full p-2">
    {colors.map(({title, items}) => (
      <div key={title} className="flex flex-col items-start w-full h-full">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="flex flex-row flex-wrap items-center justify-start w-full h-full p-4">
          {items.map((c, index) =>
            isSematic ? (
              <SematicSwatch
                key={`${c.color}-${index}`}
                className={c.className}
                color={c.color}
                textClassName={c.textClassName}
              />
            ) : (
              <Swatch key={`${c.color}-${index}`} color={c.color} />
            ),
          )}
        </div>
      </div>
    ))}
  </div>
);

export default {
  title: "Foundations/Colors",
  component: SwatchSet,
  argTypes: {
    isSematic: {
      control: false,
    },
  },
} as ComponentMeta<typeof SwatchSet>;

const Template: ComponentStory<typeof SwatchSet> = (args: SwatchSetProps) => (
  <SwatchSet {...args} />
);

const getCommonItems = (colors: string[]) => {
  return colors.map((color) => ({
    color,
  }));
};

export const CommonColors = Template.bind({});
CommonColors.args = {
  colors: [
    {
      title: "App Colors",
      items: getCommonItems([commonColors.white, commonColors.black]),
    },
    {
      title: "Blue",
      items: getCommonItems([...Object.values(commonColors.blue)]),
    },
    {
      title: "Purple",
      items: getCommonItems([...Object.values(commonColors.purple)]),
    },
    {
      title: "Green",
      items: getCommonItems([...Object.values(commonColors.green)]),
    },
    {
      title: "Red",
      items: getCommonItems([...Object.values(commonColors.red)]),
    },
    {
      title: "Pink",
      items: getCommonItems([...Object.values(commonColors.pink)]),
    },
    {
      title: "Yellow",
      items: getCommonItems([...Object.values(commonColors.yellow)]),
    },
    {
      title: "Cyan",
      items: getCommonItems([...Object.values(commonColors.cyan)]),
    },
  ],
};

export const SemanticColors = Template.bind({});
SemanticColors.args = {
  isSematic: true,
  colors: [
    {
      title: "Layout",
      items: [
        {
          color: "background",
          className: "bg-background",
          textClassName: "text-foreground",
        },
        {
          color: "foreground",
          className: "bg-foreground",
          textClassName: "text-background",
        },
        {
          color: "border",
          className: "bg-border",
          textClassName: "text-foreground",
        },
      ],
    },
    {
      title: "Content",
      items: [
        {
          color: "content1",
          className: "bg-content1",
          textClassName: "text-content1-contrastText",
        },
        {
          color: "content2",
          className: "bg-content2",
          textClassName: "text-content2-contrastText",
        },
        {
          color: "content3",
          className: "bg-content3",
          textClassName: "text-content3-contrastText",
        },
        {
          color: "content4",
          className: "bg-content4",
          textClassName: "text-content4-contrastText",
        },
      ],
    },
    {
      title: "Base",
      items: [
        {
          color: "neutral",
          className: "bg-neutral",
          textClassName: "text-neutral-contrastText",
        },
        {
          color: "primary",
          className: "bg-primary",
          textClassName: "text-primary-contrastText",
        },
        {
          color: "secondary",
          className: "bg-secondary",
          textClassName: "text-secondary-contrastText",
        },
        {
          color: "success",
          className: "bg-success",
          textClassName: "text-success-contrastText",
        },
        {
          color: "warning",
          className: "bg-warning",
          textClassName: "text-warning-contrastText",
        },
        {
          color: "danger",
          className: "bg-danger",
          textClassName: "text-danger-contrastText",
        },
      ],
    },
    {
      title: "Neutral",
      items: [
        {
          color: "neutral-50",
          className: "bg-neutral-50",
          textClassName: "text-neutral-900",
        },
        {
          color: "neutral-100",
          className: "bg-neutral-100",
          textClassName: "text-neutral-900",
        },
        {
          color: "neutral-200",
          className: "bg-neutral-200",
          textClassName: "text-neutral-800",
        },
        {
          color: "neutral-300",
          className: "bg-neutral-300",
          textClassName: "text-neutral-800",
        },
        {
          color: "neutral-400",
          className: "bg-neutral-400",
          textClassName: "text-neutral-800",
        },
        {
          color: "neutral-500",
          className: "bg-neutral-500",
          textClassName: "text-neutral-contrastText",
        },
        {
          color: "neutral-600",
          className: "bg-neutral-600",
          textClassName: "text-neutral-50",
        },
        {
          color: "neutral-700",
          className: "bg-neutral-700",
          textClassName: "text-neutral-100",
        },
        {
          color: "neutral-800",
          className: "bg-neutral-800",
          textClassName: "text-neutral-100",
        },
        {
          color: "neutral-900",
          className: "bg-neutral-900",
          textClassName: "text-neutral-100",
        },
      ],
    },
    {
      title: "Primary",
      items: [
        {
          color: "primary-50",
          className: "bg-primary-50",
          textClassName: "text-primary-900",
        },
        {
          color: "primary-100",
          className: "bg-primary-100",
          textClassName: "text-primary-900",
        },
        {
          color: "primary-200",
          className: "bg-primary-200",
          textClassName: "text-primary-800",
        },
        {
          color: "primary-300",
          className: "bg-primary-300",
          textClassName: "text-primary-800",
        },
        {
          color: "primary-400",
          className: "bg-primary-400",
          textClassName: "text-primary-800",
        },
        {
          color: "primary-500",
          className: "bg-primary-500",
          textClassName: "text-primary-contrastText",
        },
        {
          color: "primary-600",
          className: "bg-primary-600",
          textClassName: "text-primary-50",
        },
        {
          color: "primary-700",
          className: "bg-primary-700",
          textClassName: "text-primary-100",
        },
        {
          color: "primary-800",
          className: "bg-primary-800",
          textClassName: "text-primary-100",
        },
        {
          color: "primary-900",
          className: "bg-primary-900",
          textClassName: "text-primary-100",
        },
      ],
    },
    {
      title: "Secondary",
      items: [
        {
          color: "secondary-50",
          className: "bg-secondary-50",
          textClassName: "text-secondary-900",
        },
        {
          color: "secondary-100",
          className: "bg-secondary-100",
          textClassName: "text-secondary-900",
        },
        {
          color: "secondary-200",
          className: "bg-secondary-200",
          textClassName: "text-secondary-800",
        },
        {
          color: "secondary-300",
          className: "bg-secondary-300",
          textClassName: "text-secondary-800",
        },
        {
          color: "secondary-400",
          className: "bg-secondary-400",
          textClassName: "text-secondary-800",
        },
        {
          color: "secondary-500",
          className: "bg-secondary-500",
          textClassName: "text-secondary-contrastText",
        },
        {
          color: "secondary-600",
          className: "bg-secondary-600",
          textClassName: "text-secondary-50",
        },
        {
          color: "secondary-700",
          className: "bg-secondary-700",
          textClassName: "text-secondary-100",
        },
        {
          color: "secondary-800",
          className: "bg-secondary-800",
          textClassName: "text-secondary-100",
        },
        {
          color: "secondary-900",
          className: "bg-secondary-900",
          textClassName: "text-secondary-100",
        },
      ],
    },
    {
      title: "Success",
      items: [
        {
          color: "success-50",
          className: "bg-success-50",
          textClassName: "text-success-900",
        },
        {
          color: "success-100",
          className: "bg-success-100",
          textClassName: "text-success-900",
        },
        {
          color: "success-200",
          className: "bg-success-200",
          textClassName: "text-success-800",
        },
        {
          color: "success-300",
          className: "bg-success-300",
          textClassName: "text-success-800",
        },
        {
          color: "success-400",
          className: "bg-success-400",
          textClassName: "text-success-800",
        },
        {
          color: "success-500",
          className: "bg-success-500",
          textClassName: "text-success-contrastText",
        },
        {
          color: "success-600",
          className: "bg-success-600",
          textClassName: "text-success-50",
        },
        {
          color: "success-700",
          className: "bg-success-700",
          textClassName: "text-success-100",
        },
        {
          color: "success-800",
          className: "bg-success-800",
          textClassName: "text-success-100",
        },
        {
          color: "success-900",
          className: "bg-success-900",
          textClassName: "text-success-100",
        },
      ],
    },
    {
      title: "Warning",
      items: [
        {
          color: "warning-50",
          className: "bg-warning-50",
          textClassName: "text-warning-900",
        },
        {
          color: "warning-100",
          className: "bg-warning-100",
          textClassName: "text-warning-900",
        },
        {
          color: "warning-200",
          className: "bg-warning-200",
          textClassName: "text-warning-800",
        },
        {
          color: "warning-300",
          className: "bg-warning-300",
          textClassName: "text-warning-800",
        },
        {
          color: "warning-400",
          className: "bg-warning-400",
          textClassName: "text-warning-800",
        },
        {
          color: "warning-500",
          className: "bg-warning-500",
          textClassName: "text-warning-contrastText",
        },
        {
          color: "warning-600",
          className: "bg-warning-600",
          textClassName: "text-warning-50",
        },
        {
          color: "warning-700",
          className: "bg-warning-700",
          textClassName: "text-warning-100",
        },
        {
          color: "warning-800",
          className: "bg-warning-800",
          textClassName: "text-warning-100",
        },
        {
          color: "warning-900",
          className: "bg-warning-900",
          textClassName: "text-warning-100",
        },
      ],
    },
    {
      title: "Danger",
      items: [
        {
          color: "danger-50",
          className: "bg-danger-50",
          textClassName: "text-danger-900",
        },
        {
          color: "danger-100",
          className: "bg-danger-100",
          textClassName: "text-danger-900",
        },
        {
          color: "danger-200",
          className: "bg-danger-200",
          textClassName: "text-danger-800",
        },
        {
          color: "danger-300",
          className: "bg-danger-300",
          textClassName: "text-danger-800",
        },
        {
          color: "danger-400",
          className: "bg-danger-400",
          textClassName: "text-danger-800",
        },
        {
          color: "danger-500",
          className: "bg-danger-500",
          textClassName: "text-danger-contrastText",
        },
        {
          color: "danger-600",
          className: "bg-danger-600",
          textClassName: "text-danger-50",
        },
        {
          color: "danger-700",
          className: "bg-danger-700",
          textClassName: "text-danger-100",
        },
        {
          color: "danger-800",
          className: "bg-danger-800",
          textClassName: "text-danger-100",
        },
        {
          color: "danger-900",
          className: "bg-danger-900",
          textClassName: "text-danger-100",
        },
      ],
    },
  ],
};