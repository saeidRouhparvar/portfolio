import { Box, Flex, Text } from "@chakra-ui/react";
import {useState} from "react";
import project_single_1 from "../../assets/img/project_single_1.png";
import { pxToRem } from "../../components/Utils";
import { useParams } from "react-router-dom";
import projectDescriptionDatas from '../../components/Data'

const ProjectSinglePage = () => {

  let params = useParams()
  const [projectDescriptionData,setProjectDescriptionData] = useState(projectDescriptionDatas)

  console.log(params);
  

  return (
    <Flex direction={"column"}>
      <Box as={"img"} src={project_single_1} />
      <Flex gap={pxToRem(48)}>
        <Flex direction={"column"} gap={pxToRem(48)}>
          <Box>Simple and Awesome Product Title Here Lorem Ipsum</Box>
          <Text>
         {projectDescriptionData.find((desc:any) => desc.id == params.id).title}
          </Text>
          <Text>
          {projectDescriptionData.find((desc:any) => desc.id == params.id).description}
          </Text>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};
export default ProjectSinglePage;
