import { Flex } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../Utils";
import ContactMeBox from "./ContactMeBox";
import { CellPhone18, Loc, Post } from "../Svg";

const LocationData = [
  {
    logo:Loc,
    title_1: "Country:",
    title_2: "City:",
    title_3: "Street:",
    description_1: "Iran",
    description_2: "Tabriz",
    description_3: "Saeb",
  },
];
const SocialData = [
  {
    logo:Post,
    title_1: "Email:",
    title_2: "Skype:",
    title_3: "Telegram:",
    description_1: "saeid.rohparvar@gmail.com",
    description_2: "hjgjgjh",
    description_3: "Saeid.Rouhparvar",
  },
];
const ContactData = [
  {
    logo:CellPhone18,
    title_1: "Support:",
    title_2: "Office:",
    title_3: "Personal:",
    description_1: "4435435",
    description_2: "+989357736232",
    description_3: "+989141245860",
  },
];

export const ContactMe = () => {
  return (
    <Flex direction={"column"} gap={pxToRem(24)}>
      {LocationData.map((item) => (
        <ContactMeBox
        logo={item.logo}
          title_1={item.title_1}
          title_2={item.title_2}
          title_3={item.title_3}
          description_1={item.description_1}
          description_2={item.description_2}
          description_3={item.description_3}
        />
      ))}
      {SocialData.map((item) => (
        <ContactMeBox
        logo={item.logo}
          title_1={item.title_1}
          title_2={item.title_2}
          title_3={item.title_3}
          description_1={item.description_1}
          description_2={item.description_2}
          description_3={item.description_3}
        />
      ))}
      {ContactData.map((item) => (
        <ContactMeBox
        logo={item.logo}
          title_1={item.title_1}
          title_2={item.title_2}
          title_3={item.title_3}
          description_1={item.description_1}
          description_2={item.description_2}
          description_3={item.description_3}
        />
      ))}
    </Flex>
  );
};
export default ContactMe;
