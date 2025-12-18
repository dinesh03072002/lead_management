"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const LEAD_TYPE = ["Marketing", "Sales"];
const LEAD_STATUSES = ["Pending", "Completed"];
const LEAD_SOURCE=["Social Media", "Website"];
const LEAD_INDUSTRY=["IT", "Healthcare"];

export default function EditLeadPage() {
  const { id } = useParams();
  const router = useRouter();

  const [data, setData] = useState({
    lead_type: "",
    project_type: "",
    company: "",
    client_name: "",
    client_position: "",
    client_contact: "",
    email: "",
    website: "",
    lead_reference: "",
    plant_capacity_kwp: "",
    lead_assigned_to: "",
    lead_status: "",
    source: "",
    industry: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    location: "",
    description: "",
  });

  
  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8000/api/leads/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("FETCH ERROR:", err));
  }, [id]);

  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
  const updateLead = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8000/api/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          plant_capacity_kwp: Number(data.plant_capacity_kwp),
        }),
      });

      if (!res.ok) throw new Error("Failed to update lead");

      alert("Lead updated successfully");
      router.push("/leads");
    } catch (error) {
      alert("Failed to update lead");
    }
  };

  return (
    <div className="p-6 bg-neutral-500 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Edit Lead</h2>

      <form onSubmit={updateLead} className="bg-white p-6 rounded shadow space-y-6">

        
        <h3 className="font-semibold">Lead Information</h3>
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="text-sm font-medium">Lead Type</label>
            <select
              name="lead_type"
              value={data.lead_type}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Lead Type</option>
              {LEAD_TYPE.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Project Type</label>
            <input
              className="border p-2 rounded w-full"
              name="project_type"
              value={data.project_type}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Company</label>
            <span className="text-red-500"> *</span>
            <input className="border p-2 rounded w-full" required name="company" value={data.company} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Client Name</label>
            <span className="text-red-500"> *</span>
            <input className="border p-2 rounded w-full" required name="client_name" value={data.client_name} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Client Position</label>
            <input className="border p-2 rounded w-full" name="client_position" value={data.client_position} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Client Contact</label>
            <input className="border p-2 rounded w-full" name="client_contact" value={data.client_contact} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <span className="text-red-500"> *</span>
            <input className="border p-2 rounded w-full" required name="email" value={data.email} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Website</label>
            <input className="border p-2 rounded w-full" name="website" value={data.website} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Lead Reference</label>
            <input className="border p-2 rounded w-full" name="lead_reference" value={data.lead_reference} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Plant Capacity (kWp)</label>
            <span className="text-red-500"> *</span>
            <input className="border p-2 rounded w-full" required name="plant_capacity_kwp" value={data.plant_capacity_kwp} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Lead Assigned To</label>
            <input className="border p-2 rounded w-full" name="lead_assigned_to" value={data.lead_assigned_to} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Lead Status</label>
            <select
              name="lead_status"
              value={data.lead_status}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Status</option>
              {LEAD_STATUSES.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Source</label>
            
            <select className="border p-2 rounded w-full" name="source" value={data.source} onChange={handleChange}>
              <option value="">Select Source</option>
              {LEAD_SOURCE.map(source => (
                <option key={source} value={source}>{source}</option>
              ))}
              </select>
          </div>

          <div>
            <label className="text-sm font-medium">Industry</label>
            <select className="border p-2 rounded w-full" name="industry" value={data.industry} onChange={handleChange}>
              <option value="">Select Industry</option>
              {LEAD_INDUSTRY.map(industry => (
                <option key={industry} value={industry}>{industry}</option> 
              ))}  
              </select>
          </div>

        </div>


        <h3 className="font-semibold">Address Information</h3>
        <div className="grid grid-cols-2 gap-4">

          <div className="col-span-2">
            <label className="text-sm font-medium">Address</label>
            <input className="border p-2 rounded w-full" name="address" value={data.address} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">City</label>
            <input className="border p-2 rounded w-full" name="city" value={data.city} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">State</label>
            <input className="border p-2 rounded w-full" name="state" value={data.state} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Pincode</label>
            <input className="border p-2 rounded w-full" name="pincode" value={data.pincode} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Country</label>
            <input className="border p-2 rounded w-full" name="country" value={data.country} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Location</label>
            <input className="border p-2 rounded w-full" name="location" value={data.location} onChange={handleChange} />
          </div>

        </div>

        
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            className="border p-2 rounded w-full"
            name="description"
            rows="4"
            value={data.description}
            onChange={handleChange}
          />
        </div>

        
        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded">
            UPDATE
          </button>
          <button
            type="button"
            onClick={() => router.push("/leads")}
            className="bg-red-500 text-white px-6 py-2 rounded"
          >
            CANCEL
          </button>
        </div>

      </form>
    </div>
  );
}