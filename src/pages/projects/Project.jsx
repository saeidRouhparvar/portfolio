import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../components/SectionHeader";
import { pxToRem } from "../../components/Utils";
import ProjectDescriptionCard from "./ProjectDescriptionCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import projectDescriptionDatas from "../../components/Data";

const projectData = [
  {id:1,title:"test",description:"dsfdsfdsfdsfs fdsfds fdsfdsf dsfdsf"},
  {id:2,title:"test",description:"dsfdsfdsfdsfs fdsfds fdsfdsf dsfdsf"},
  {id:3,title:"test",description:"dsfdsfdsfdsfs fdsfds fdsfdsf dsfdsf"},
  {id:4,title:"test",description:"dsfdsfdsfdsfs fdsfds fdsfdsf dsfdsf"},
  {id:5,title:"test",description:"dsfdsfdsfdsfs fdsfds fdsfdsf dsfdsf"},
  {id:5,title:"test",description:"dsfdsfdsfdsfs fdsfds fdsfdsf dsfdsf"},

]

const Project = () => {

  // const [projectData,setProjectData] = useState(projectDescriptionDatas)

  // const navigate = useNavigate()

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
        <SimpleGrid gap={pxToRem(32)} columns={{ base: 1, lg: 2 }}>
          {projectData.map((item) => (
            <ProjectDescriptionCard
            // onClick={() => {
            //   navigate(`/projectSiglePage/${item.id}`)
            // }}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Project;
