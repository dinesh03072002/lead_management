"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, SquarePen } from "lucide-react";


export default function LeadsPage() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/leads")
      .then(res => res.json())
      .then(data => setLeads(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Leads</h2>

      <div className="mb-4">
        <Link href="/leads/new">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            + Add New Lead
          </button>
        </Link>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Lead Title</th>
              <th className="p-3">Client Name</th>
              <th className="p-3">Client Contact</th>
              <th className="p-3">Client Position</th>
              <th className="p-3">Project Type</th>
              <th className="p-3">Plant Capacity (kWp)</th>
              <th className="p-3">Lead Assigned To</th>
              <th className="p-3">Lead Reference</th>
              <th className="p-3">Lead Status</th>
             
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map(lead => (
              <tr key={lead.id} className="border-t">
                <td className="p-3">{lead.lead_title}</td>
                <td className="p-3">{lead.client_name}</td>
                <td className="p-3">{lead.client_contact}</td>
                <td className="p-3">{lead.client_position}</td>
                <td className="p-3">{lead.project_type}</td>
                <td className="p-3">{lead.plant_capacity_kwp}</td>
                <td className="p-3">{lead.lead_assigned_to}</td>
                <td className="p-3">{lead.lead_reference}</td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    {lead.lead_status}
                  </span>
                </td>
                
                <td className="p-3 flex gap-3">
                   <Link href={`/leads/view/${lead.id}`}>
                    <Eye className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800" />
                    </Link>



                  <Link href={`/leads/edit/${lead.id}`} title="Edit Lead">
                  <SquarePen className="w-5 h-5 text-green-600 cursor-pointer hover:text-green-800" />
                  </Link>

              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}