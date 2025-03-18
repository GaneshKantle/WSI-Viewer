import React from 'react';
import './Sidebar.css';

const Sidebar = ({ data }) => {
  if (!data) return <div className="sidebar">Loading...</div>;

  return (
    <div className="sidebar">
      <h2>Blood Analysis</h2>

      {/* RBC Table */}
      <table className="blood-table">
        <thead>
          <tr>
            <th>RBC</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.rbc && data.rbc.length > 0 ? (
            data.rbc.map((cell, index) => (
              <tr key={index}>
                <td>{cell.type || 'N/A'}</td>
                <td>{cell.count || 'N/A'}</td>
                <td>{cell.percentage ? `${cell.percentage}%` : 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No RBC data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* WBC Table */}
      <table className="blood-table">
        <thead>
          <tr>
            <th>WBC</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.wbc && data.wbc.length > 0 ? (
            data.wbc.map((cell, index) => (
              <tr key={index}>
                <td>{cell.type || 'N/A'}</td>
                <td>{cell.count || 'N/A'}</td>
                <td>{cell.percentage ? `${cell.percentage}%` : 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No WBC data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Platelets Table */}
      <table className="blood-table">
        <thead>
          <tr>
            <th>Platelets</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.platelets && data.platelets.count !== undefined ? (
            <tr>
              <td>Platelets</td>
              <td>{data.platelets.count || 'N/A'}</td>
              <td>{data.platelets.percentage ? `${data.platelets.percentage}%` : 'N/A'}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3">No Platelet data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
