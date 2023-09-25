import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../components/SectionHeader";
import { pxToRem } from "../../components/Utils";
import ProjectDescriptionCard from "./ProjectDescriptionCard";

const Project = () => {
  return (
    <Flex
      w={{
        base: pxToRem(360),
        sm: pxToRem(476),
        md: pxToRem(640),
        lg: pxToRem(1020),
      }}
      justify={"center"}
    >
      <Flex direction={"column"}>
        <SectionHeader
          title={"Portfolio"}
          text_1={"Amet minim mollit non deserunt ullamco est sit aliqua"}
          text_2={"dolor do amet sint. Velit officia consequat duis enim velit"}
          text_3={"mollit. lorem ipsum"}
        />
        <SimpleGrid gap={pxToRem(32)} columns={{base:1,lg:2}}>
          <ProjectDescriptionCard 
            title={"Google"}
            description={"Senior Front End Developer"}
          />
          <ProjectDescriptionCard
            title={"Yahoo"}
            description={"Mid Level Front End Developer"}
          />
          <ProjectDescriptionCard
            title={"Yahoo"}
            description={"Mid Level Front End Developer"}
          />
          <ProjectDescriptionCard
            title={"Yahoo"}
            description={"Mid Level Front End Developer"}
          />
          <ProjectDescriptionCard
            title={"Yahoo"}
            description={"Mid Level Front End Developer"}
          />
          <ProjectDescriptionCard
            title={"Yahoo"}
            description={"Mid Level Front End Developer"}
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Project;
