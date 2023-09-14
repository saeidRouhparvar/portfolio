import { SimpleGrid, Flex } from "@chakra-ui/react";
// import Color from "../Color";
import SectionHeader from "../SectionHeader";
import PortfolioBox from "./PortfolioBox";

import port_1 from "../../assets/img/port_1.svg";
import port_2 from "../../assets/img/port_2.svg";
import port_3 from "../../assets/img/port_3.svg";
import port_4 from "../../assets/img/port_4.svg";
import port_5 from "../../assets/img/port_5.svg";
import port_6 from "../../assets/img/port_6.svg";
import { pxToRem } from "../Utils";

const PortData = [
  { src: port_1 },
  { src: port_2 },
  { src: port_3 },
  { src: port_4 },
  { src: port_5 },
  { src: port_6 },
];
const Portfolio = () => {
  // const { colormode } = useColorMode();

  return (
    <Flex direction={"column"}>
      <SectionHeader
        title={"Portfolio"}
        text_1={"Amet minim mollit non deserunt ullamco est sit aliqua"}
        text_2={"dolor do amet sint. Velit officia consequat duis enim velit"}
        text_3={"mollit. lorem ipsum"}
      />

      <SimpleGrid
        columns={{ base: 2,lg:3}}
        justify={{ base: "center", md: "space-between" }}
        m={"auto"}
        gap={pxToRem(24)}
      >
        {PortData.map((item) => (
          <PortfolioBox key={item.id} src={item.src} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Portfolio;
