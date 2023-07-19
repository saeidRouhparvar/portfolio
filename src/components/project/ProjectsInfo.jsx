import { Box,Button, Flex } from "@chakra-ui/react";
import TypographyWeb from "../Typography";
// import Button from "../Form/Button";

const ProjectsInfo = ({title,description}) => {
  return (
    <Flex direction={"column"} gap={"16px"}>
      <Box {...TypographyWeb.Heading_3_medium}>{title}</Box>
      <Box {...TypographyWeb.Body_regular}>{description}</Box>
      <Flex mt={"24px"}>
        <Button>Read About Project</Button>
        <Box>dfdsdf</Box>
      </Flex>
    </Flex>
  );
};

export default ProjectsInfo;
