"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LEAD_TYPE = ["Marketing", "Sales"];
const LEAD_STATUSES = ["Pending", "Completed"];
const LEAD_SOURCE = ["Social Media", "Website"];
const LEAD_INDUSTRY = ["IT", "Healthcare"];

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
    lead_generated_by: "Admin",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitLead = async (e) => {
    e.preventDefault();

    const payload = {
      ...data,
      plant_capacity_kwp: Number(data.plant_capacity_kwp),
      lead_generated_by: "Admin",
    };

    try {
      const res = await fetch("http://localhost:8000/api/leads/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save lead");

      alert("Lead saved successfully");
      router.push("/leads");
    } catch (error) {
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
              <div>
                <label className="text-sm font-medium">Lead Type</label>
                <select
                  name="lead_type"
                  value={data.lead_type}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Lead Type</option>
                  {LEAD_TYPE.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Project Type</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="project_type"
                  value={data.project_type}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Company</label>
                <span className="text-red-500"> *</span>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="company"
                  required
                  value={data.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Client Name</label>
                <span className="text-red-500"> *</span>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="client_name"
                  required
                  value={data.client_name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Client Position</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="client_position"
                  value={data.client_position}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Client Contact</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="client_contact"
                  value={data.client_contact}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <span className="text-red-500"> *</span>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Website</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="website"
                  value={data.website}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Lead Reference</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="lead_reference"
                  value={data.lead_reference}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Plant Capacity (kWp)
                </label>
                <span className="text-red-500"> *</span>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="plant_capacity_kwp"
                  required
                  value={data.plant_capacity_kwp}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Lead Assigned To</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="lead_assigned_to"
                  value={data.lead_assigned_to}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Lead Status</label>
                <select
                  name="lead_status"
                  value={data.lead_status}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Status</option>
                  {LEAD_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Source</label>
                <select
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="source"
                  value={data.source}
                  onChange={handleChange}
                >
                  <option value="">Select Source</option>
                  {LEAD_SOURCE.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Industry</label>
                <select
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="industry"
                  value={data.industry}
                  onChange={handleChange}
                >
                  <option value="">Select Industry</option>
                  {LEAD_INDUSTRY.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
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
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">City</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">State</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="state"
                  value={data.state}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Pincode</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="pincode"
                  value={data.pincode}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Country</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="country"
                  value={data.country}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Location</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="location"
                  value={data.location}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
              name="description"
              rows="4"
              value={data.description}
              onChange={handleChange}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={() => router.push("/leads")}
              className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
