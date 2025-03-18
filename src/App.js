import React, { useEffect, useState } from 'react';
import './App.css';
import ImageViewer from './components/ImageViewer';
import Sidebar from './components/Sidebar';
import data from './data.json'; // Import JSON directly

function App() {
  const [image, setImage] = useState(null);
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [reportData, setReportData] = useState({});

  useEffect(() => {
    if (data) {
      setImage(data.filename || 'default-image.png');
      const results = data.inference_results?.output?.detection_results || [];
      setBoundingBoxes(results);

      // Check if data is available, otherwise set default values
      setReportData({
        rbc: data.rbc?.length
          ? data.rbc
          : [{ type: 'Normal RBC', count: 5.2, percentage: 45 }],
        wbc: data.wbc?.length
          ? data.wbc
          : [{ type: 'Neutrophil', count: 7.5, percentage: 65 }],
        platelets: data.platelets?.count
          ? data.platelets
          : { count: 250, percentage: 30 },
      });
    }
  }, []);

  // Function to generate and download the report
  const generateReport = () => {
    const reportContent = `
    🔬 Blood Analysis Report
    ============================
    🩸 RBC Data:
    ${reportData.rbc
      .map(
        (cell) =>
          `${cell.type} - Count: ${cell.count} million/µL, Percentage: ${cell.percentage}%`
      )
      .join('\n')}
    
    🛡️ WBC Data:
    ${reportData.wbc
      .map(
        (cell) =>
          `${cell.type} - Count: ${cell.count} thousand/µL, Percentage: ${cell.percentage}%`
      )
      .join('\n')}
    
    🧬 Platelets:
    Count: ${reportData.platelets.count || 'N/A'} thousand/µL
    Percentage: ${reportData.platelets.percentage || 'N/A'}%
    
    ============================
    Report Generated Successfully! ✅
  `;

    // Create a Blob and download as a .txt file
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Blood_Analysis_Report.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app-container">
      <Sidebar data={reportData} />
      <ImageViewer image={image} boundingBoxes={boundingBoxes} />
      <button className="report-button" onClick={generateReport}>
        Generate Report
      </button>
    </div>
  );
}

export default App;
