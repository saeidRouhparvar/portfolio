import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Box,Button, BoxProps } from "@chakra-ui/react";

interface Interface extends BoxProps {
  reset?: any;
  data?: any;
}
const ExportToPDF = ({ data, ...reset }: Interface) => {
  const printDocument = () => {
    const input: any = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 100, 100, 10);
      // pdf.output('dataurlnewwindow');
      pdf.save("Resume.pdf");
      pdf.setFontSize(9);
      pdf.text("IRANSans", 60, 80);
    });
  };
  return (
    <>
      {/* <Button {reset}>Download PDF</Button> */}
      <Box  onClick={printDocument} id="divToPrint">{data}</Box>
    </>
  );
};

export default ExportToPDF;
