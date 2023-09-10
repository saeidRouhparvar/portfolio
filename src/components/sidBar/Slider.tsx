import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

import React from "react";
import Color from "../Color";

const Sliders = ({ value }: any) => {
  return (
    <Slider
      aria-label="slider-ex-1"
      defaultValue={value}
      colorScheme={"orange"}
      isDisabled
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      {/* <SliderThumb /> */}
    </Slider>
  );
};
export default Sliders;
