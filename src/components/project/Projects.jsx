import { Box, Flex } from "@chakra-ui/react";
// import Color from "../Color";
// import TypographyWeb from "../Typography";
import ProjectsInfo from "./ProjectsInfo";
import ProjectBox from "./ProjectBox";
import SectionDescription from "../SectionDescription";

const Projects = () => {
  // const { colormode } = useColorMode();

  return (
    <Box>
      <SectionDescription
       title={"Projects"}
      description_1={" I’ve worked with start-ups and small companies, also I’ve"} 
        description_2={"created some mini app for my personal side projects."}/>
      <Flex px={"8rem"} py={"40px"} align={"center"} justify={"space-between"}>
        <ProjectsInfo title={"rre"} description={"sddsdsdsadsadsaa"} />
        <ProjectBox/>
      </Flex>
    </Box>
  );
};

export default Projects;
