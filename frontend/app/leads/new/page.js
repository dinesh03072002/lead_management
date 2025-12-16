"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddLeadPage() {
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
    lead_status: "",
    source: "",
    industry: "",
    lead_reference: "",
    plant_capacity_kwp: "",
    lead_assigned_to: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitLead = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:8000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Lead saved successfully");
      router.push("/leads");

    } catch (error) {
      console.error(error);
      alert("Backend not reachable");
    }
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>

      <form
        onSubmit={submitLead}
        className="bg-white p-6 rounded shadow space-y-6"
      >
        
        <h3 className="font-semibold">Lead Information</h3>
        <div className="grid grid-cols-2 gap-4">
          
          <input className="border p-2 rounded" name="lead_type" placeholder="Lead Type" onChange={handleChange} />
          <input className="border p-2 rounded" name="project_type" placeholder="Project Type" onChange={handleChange} />
          <input className="border p-2 rounded" name="company" placeholder="Company" onChange={handleChange} />
          <input className="border p-2 rounded" name="client_name" placeholder="Client Name" onChange={handleChange} />
          <input className="border p-2 rounded" name="client_position" placeholder="Client Position" onChange={handleChange} />
          <input className="border p-2 rounded" name="client_contact" placeholder="Client Contact" onChange={handleChange} />
          <input className="border p-2 rounded" name="email" placeholder="Email" onChange={handleChange} />
          <input className="border p-2 rounded" name="website" placeholder="Website" onChange={handleChange} />
          <input className="border p-2 rounded" name="status" placeholder="Status" onChange={handleChange} />
          <input className="border p-2 rounded" name="source" placeholder="Source" onChange={handleChange} />
          <input className="border p-2 rounded" name="industry" placeholder="Industry" onChange={handleChange} />
          <input className="border p-2 rounded" name="lead_reference" placeholder="Lead Reference" onChange={handleChange} />
          <input className="border p-2 rounded" name="plant_capacity_kwp" placeholder="Plant Capacity (kWp)" onChange={handleChange}
/>

          <input className="border p-2 rounded col-span-2" name="lead_assigned" placeholder="Lead Assigned To" onChange={handleChange} />
        </div>

        
        <h3 className="font-semibold">Address Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <input className="border p-2 rounded col-span-2" name="address" placeholder="Address" onChange={handleChange} />
          <input className="border p-2 rounded" name="city" placeholder="City" onChange={handleChange} />
          <input className="border p-2 rounded" name="state" placeholder="State" onChange={handleChange} />
          <input className="border p-2 rounded" name="pincode" placeholder="Pincode" onChange={handleChange} />
          <input className="border p-2 rounded" name="country" placeholder="Country" value={data.country} onChange={handleChange} />
          <input className="border p-2 rounded" name="location" placeholder="Location" onChange={handleChange} />
        </div>

        {/* Description */}
        <textarea
          className="border p-2 rounded w-full"
          name="description"
          placeholder="Description"
          rows="4"
          onChange={handleChange}
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded">
            SAVE
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
