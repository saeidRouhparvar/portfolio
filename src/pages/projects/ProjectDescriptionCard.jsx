import { Box, Flex } from "@chakra-ui/react";
import project_1 from "../../assets/img/project_1.png";
import { pxToRem } from "../../components/Utils";
import MoreData from "./MoreData";
import Typography from "../../components/Typography";
import Color from "../../components/Color";

const ProjectDescriptionCard = ({title,description}) => {
  return (
    <Flex gap={pxToRem(24)} direction={"column"}>
      <Box w={pxToRem(593)} as={"img"} src={project_1} />
      <Box color={Color.ColorBase.base_content}>
        <Box {...Typography.b4_medium}>{title}</Box>
        <Box {...Typography.h3_semiBold}>{description}</Box>
      </Box>
      <MoreData/>
    </Flex>
  );
};

export default ProjectDescriptionCard;
