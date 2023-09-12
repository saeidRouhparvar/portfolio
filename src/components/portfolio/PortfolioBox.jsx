import { Box } from "@chakra-ui/react";

const PortfolioBox = ({src}) => {
  return <Box borderRadius={"12px"} as="img" src={src} />;
};

export default PortfolioBox;
