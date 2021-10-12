import React from 'react'
import '@progress/kendo-theme-default/dist/all.css';

import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from 'react';
import Home from './Home/Home';


function Report() {

    const pdfExportComponent = React.useRef(null);
    const contentArea  = useRef(null);

    const handleExportWithComponent = (event) =>{
        pdfExportComponent.current.save();
    }

    const handleExportWithMethod = (event) =>{
        savePDF(contentArea.current, {paperSize:"A4"});

    }

    return (
        <div>
        <div className="app-content">
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div ref={contentArea}>
            <div>
                <h1>nnnnnnnnnnnnnnnnnnn</h1>
                <Button primary={true} onClick={handleExportWithComponent}> Export Component</Button>
                <Button onClick={handleExportWithComponent}>Export Method</Button>
            </div>
            </div>
            </PDFExport>
        </div>
        </div>
    )
}

export default Report
