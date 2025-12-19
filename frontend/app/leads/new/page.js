"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LEAD_TYPE = ["Marketing", "Sales"];
const LEAD_STATUSES = ["Pending", "Completed"];
const LEAD_SOURCE = ["Social Media", "Website"];
const LEAD_INDUSTRY = ["IT", "Healthcare"];

export default function AddLeadPage() {
  const router = useRouter();

  const [projectTypes, setProjectTypes] = useState([]);

  const [data, setData] = useState({
    lead_type: "",
    project_type_id: "",
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
    lead_generated_by: "Admin"
  });

  // 🔹 Fetch Project Types
  useEffect(() => {
    fetch("http://localhost:8000/api/project-types")
      .then(res => res.json())
      .then(data => setProjectTypes(data))
      .catch(err => console.error("Project type fetch error:", err));
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitLead = async (e) => {
    e.preventDefault();

    const payload = {
      ...data,
      plant_capacity_kwp: Number(data.plant_capacity_kwp),
      project_type_id: Number(data.project_type_id)
    };

    try {
      const res = await fetch("http://localhost:8000/api/leads/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error();

      alert("Lead saved successfully");
      router.push("/leads");
    } catch {
      alert("Failed to save lead");
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Add New Lead</h2>

        <form
          onSubmit={submitLead}
          className="bg-white rounded-xl shadow-lg p-8 space-y-8"
        >
          {/* Lead Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Lead Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Lead Type */}
              <div>
                <label className="text-sm font-medium">Lead Type</label>
                <select
                  name="lead_type"
                  value={data.lead_type}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                >
                  <option value="">Select Lead Type</option>
                  {LEAD_TYPE.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label className="text-sm font-medium">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="project_type_id"
                  value={data.project_type_id}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border p-2.5"
                >
                  <option value="">Select Project Type</option>
                  {projectTypes.map(pt => (
                    <option key={pt.id} value={pt.id}>
                      {pt.project_type_name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company */}
              <div>
                <label className="text-sm font-medium">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  name="company"
                  required
                  value={data.company}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Client Name */}
              <div>
                <label className="text-sm font-medium">
                  Client Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="client_name"
                  required
                  value={data.client_name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Client Position */}
              <div>
                <label className="text-sm font-medium">Client Position</label>
                <input
                  name="client_position"
                  value={data.client_position}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Client Contact */}
              <div>
                <label className="text-sm font-medium">Client Contact</label>
                <input
                  name="client_contact"
                  value={data.client_contact}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  required
                  value={data.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Website */}
              <div>
                <label className="text-sm font-medium">Website</label>
                <input
                  name="website"
                  value={data.website}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Lead Reference */}
              <div>
                <label className="text-sm font-medium">Lead Reference</label>
                <input
                  name="lead_reference"
                  value={data.lead_reference}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Plant Capacity */}
              <div>
                <label className="text-sm font-medium">
                  Plant Capacity (kWp) <span className="text-red-500">*</span>
                </label>
                <input
                  name="plant_capacity_kwp"
                  required
                  value={data.plant_capacity_kwp}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Lead Assigned To */}
              <div>
                <label className="text-sm font-medium">Lead Assigned To</label>
                <input
                  name="lead_assigned_to"
                  value={data.lead_assigned_to}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              {/* Lead Status */}
              <div>
                <label className="text-sm font-medium">Lead Status</label>
                <select
                  name="lead_status"
                  value={data.lead_status}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                >
                  <option value="">Select Status</option>
                  {LEAD_STATUSES.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              {/* Source */}
              <div>
                <label className="text-sm font-medium">Source</label>
                <select
                  name="source"
                  value={data.source}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                >
                  <option value="">Select Source</option>
                  {LEAD_SOURCE.map(src => (
                    <option key={src} value={src}>{src}</option>
                  ))}
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="text-sm font-medium">Industry</label>
                <select
                  name="industry"
                  value={data.industry}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                >
                  <option value="">Select Industry</option>
                  {LEAD_INDUSTRY.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Address Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Address</label>
                <input
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              <div>
                <label className="text-sm font-medium">City</label>
                <input
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              <div>
                <label className="text-sm font-medium">State</label>
                <input
                  name="state"
                  value={data.state}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Pincode</label>
                <input
                  name="pincode"
                  value={data.pincode}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Country</label>
                <input
                  name="country"
                  value={data.country}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Location</label>
                <input
                  name="location"
                  value={data.location}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2.5"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              rows="4"
              value={data.description}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-2.5"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={() => router.push("/leads")}
              className="px-6 py-2 border rounded-lg"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
