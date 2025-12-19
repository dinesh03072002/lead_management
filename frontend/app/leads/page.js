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
    <div className="p-8 bg-gray-400 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Leads</h2>

        <Link href="/leads/new">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition">
            + Add New Lead
          </button>
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left font-semibold">Lead Title</th>
              <th className="p-4 text-left font-semibold">Client Name</th>
              <th className="p-4 text-left font-semibold">Client Contact</th>
              <th className="p-4 text-left font-semibold">Client Position</th>
              <th className="p-4 text-left font-semibold">Project Type</th>
              <th className="p-4 text-left font-semibold">Plant Capacity</th>
              <th className="p-4 text-left font-semibold">Assigned To</th>
              <th className="p-4 text-left font-semibold">Reference</th>
              <th className="p-4 text-left font-semibold">Status</th>
              <th className="p-4 text-left font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map(lead => (
              <tr
                key={lead.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium text-gray-800">
                  {lead.lead_title}
                </td>
                <td className="p-4">{lead.client_name}</td>
                <td className="p-4">{lead.client_contact}</td>
                <td className="p-4">{lead.client_position}</td>
                <td className="p-4">{lead.project_type}</td>
                <td className="p-4">
                  {lead.plant_capacity_kwp}
                </td>
                <td className="p-4">{lead.lead_assigned_to}</td>
                <td className="p-4">{lead.lead_reference}</td>

                <td className="p-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    {lead.lead_status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-4">
                    <Link href={`/leads/view/${lead.id}`} title="View Lead">
                      <Eye className="w-5 h-5 text-blue-600 hover:text-blue-800 cursor-pointer transition" />
                    </Link>

                    <Link href={`/leads/edit/${lead.id}`} title="Edit Lead">
                      <SquarePen className="w-5 h-5 text-green-600 hover:text-green-800 cursor-pointer transition" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {leads.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No leads found.
          </div>
        )}
      </div>
    </div>
  );
}