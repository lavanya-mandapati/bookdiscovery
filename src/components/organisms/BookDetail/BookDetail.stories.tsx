import React from "react";
import BookDetail from "./BookDetail";
import { description } from "./constants";

export default {
  title: "organisms/BookDetail",
  component: BookDetail,
};

const Template = () => (
  <BookDetail
    image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/19709E25-7BBE-4E66-8C4B-E83184539737.png"
    authorName="J D Lee"
    fieldName="Chemistry"
    title="Concise Inorganic Chemistry"
    desc1={description.desc1}
    desc2={description.desc2}
    releaseDate="12 sep 1998"
    language="English"
  />
);

export const Default = Template.bind({});
