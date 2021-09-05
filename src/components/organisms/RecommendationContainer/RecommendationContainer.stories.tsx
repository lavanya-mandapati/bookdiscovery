import React from "react";
import {bookData} from './constants';
import RecommendationContainer from "./RecommendationContainer";

export default {
  title: "organisms/RecommendationContainer",
  component: RecommendationContainer,
};

const Template = () => <RecommendationContainer data={bookData} />;

export const Default = Template.bind({});
