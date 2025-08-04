import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function VisitorTable() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      const response = await fetch("/get-visitors"); // backend API
      const data = await response.json();
      setVisitors(data); // assuming you have a state to store visitors
    } catch (err) {
      console.error("Failed to fetch visitors", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="p-card-title">
        <i className="pi pi-users mr-2"></i>Site Visitors
      </h3>
      <DataTable
        stripedRows
        value={visitors}
        sortMode="multiple"
        paginator
        rows={10}
        loading={loading}
        responsiveLayout="scroll"
      >
        <Column sortable field="ip" header="IP Address" />
        <Column
          field="location.city"
          header="Location"
          sortable
          body={(row) =>
            row.location
              ? `${row.location.city || ""}, ${row.location.region || ""}, ${
                  row.location.country || ""
                }`
              : "Unknown"
          }
        />
        <Column
          field="location.network"
          header="Network"
          sortable
          body={(row) =>
            row.location ? `${row.location?.network}` : "Unknown"
          }
        />
        <Column sortable field="visitCount" header="Visits" />
        <Column
          sortable
          field="lastVisit"
          header="Last Visit"
          body={(row) => new Date(row.lastVisit).toLocaleString()}
        />
      </DataTable>
    </div>
  );
}
