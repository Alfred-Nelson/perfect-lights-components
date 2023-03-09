import { ComponentStory } from '@storybook/react';
import { RightArrowIcon } from '../assets/ArrowIcons';
import HeartIcon from '../assets/HeartIcon';
import Button from '../components/Button';

export default {
    title: "PerfectLights/Button",
    component: Button,
}

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: "Button",
    leftIcon: <HeartIcon />,
    rightIcon: <RightArrowIcon />
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    label: "Button",
    variant: "primary-dark",
    leftIcon: <HeartIcon />,
    rightIcon: <RightArrowIcon />
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: "Button",
    variant: "secondary",
    leftIcon: <HeartIcon />,
    rightIcon: <RightArrowIcon />
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
    label: "Button",
    variant: "secondary-outline",
    leftIcon: <HeartIcon />,
    rightIcon: <RightArrowIcon />
}

