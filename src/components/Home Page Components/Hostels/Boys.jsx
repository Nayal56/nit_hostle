import React from "react";
import {pdfjs } from "react-pdf";
import pdfFile from './Boys_Hostels.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Boys = () => {
  return (
    <iframe
    src={pdfFile}
    height={630}
    width={1350}
  />
  );
};

export default Boys;
