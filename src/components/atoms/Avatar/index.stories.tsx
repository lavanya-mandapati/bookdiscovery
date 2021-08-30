import React,{ComponentProps} from "react";
import {Story} from "@storybook/react";
import Avatar,{AvatarProps} from ".";

const AvatarStory={
    title:"Atoms/Avatar",
    component:Avatar,
};

const Template: Story<ComponentProps<typeof Avatar>>=(args:AvatarProps)=>
    <Avatar {...args} />;

export const ImageAvatar = Template.bind({});
ImageAvatar.args={
    image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
};


export const LetterAvatar = Template.bind({});
LetterAvatar.args={
    letter:"R"
};


export default AvatarStory;