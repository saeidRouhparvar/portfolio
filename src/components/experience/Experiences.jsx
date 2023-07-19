import { Box } from "@chakra-ui/react";
import SectionDescription from "../SectionDescription";
import BlogBg from '../../assets/img/blogBg.svg'

const Experiences = () => {
  return (
    <Box mt={"256px"}>
      <SectionDescription
        title={"Blog"}
        description_1={
          "Articles about my experience and ideas of what I’ve learned"
        }
        description_2={"so far."}
      />
      <Box as={"img"} src={BlogBg} filter={"blur(400px)"}/>
      
    </Box>
  );
};

export default Experiences;
