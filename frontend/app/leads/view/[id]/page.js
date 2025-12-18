"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ViewLeadPage() {
  const { id } = useParams();
  const router = useRouter();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/leads/${id}`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  // reusable field
  const Field = ({ label, value }) => (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        className="border p-2 rounded w-full bg-gray-100"
        value={value || ""}
        disabled
      />
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">View Lead</h2>

      <div className="bg-white p-6 rounded shadow space-y-6">

        {/* Lead Information */}
        <h3 className="font-semibold">Lead Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Lead Type" value={data.lead_type} />
          <Field label="Project Type" value={data.project_type} />
          <Field label="Company" value={data.company} />
          <Field label="Client Name" value={data.client_name} />
          <Field label="Client Position" value={data.client_position} />
          <Field label="Client Contact" value={data.client_contact} />
          <Field label="Email" value={data.email} />
          <Field label="Website" value={data.website} />
          <Field label="Lead Reference" value={data.lead_reference} />
          <Field label="Plant Capacity (kWp)" value={data.plant_capacity_kwp} />
          <Field label="Lead Assigned To" value={data.lead_assigned_to} />
          <Field label="Lead Status" value={data.lead_status} />
          <Field label="Source" value={data.source} />
          <Field label="Industry" value={data.industry} />
        </div>

        {/* Address Information */}
        <h3 className="font-semibold">Address Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Address</label>
            <input
              className="border p-2 rounded w-full bg-gray-100"
              value={data.address || ""}
              disabled
            />
          </div>
          <Field label="City" value={data.city} />
          <Field label="State" value={data.state} />
          <Field label="Pincode" value={data.pincode} />
          <Field label="Country" value={data.country} />
          <Field label="Location" value={data.location} />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            className="border p-2 rounded w-full bg-gray-100"
            rows="4"
            value={data.description || ""}
            disabled
          />
        </div>

        <button
          onClick={() => router.push("/leads")}
          className="bg-black text-white px-6 py-2 rounded"
        >
          BACK
        </button>
      </div>
    </div>
  );
}
