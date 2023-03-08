import { ComponentStory } from '@storybook/react';
import HeartIcon from '../assets/HeartIcon';
import IconButton from '../components/IconButton';

export default {
    title: "PerfectLights/IconButton",
    component: IconButton,
}

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args={
    children: <HeartIcon />,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args={
    variant: "primary-dark",
    children: <HeartIcon />,
}

export const Secondary = Template.bind({})
Secondary.args={
    children: <HeartIcon />,
    variant: "secondary",
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args={
    children: <HeartIcon />,
    variant: "secondary-outline",
}

