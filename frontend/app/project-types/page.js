"use client";

import { useEffect, useState } from "react";

export default function ProjectTypesPage() {
  const [projectTypes, setProjectTypes] = useState([]);
  const [form, setForm] = useState({
    project_type_name: "",
    description: ""
  });
  const [editId, setEditId] = useState(null);


  const fetchProjectTypes = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/project-types");
      const data = await res.json();
      setProjectTypes(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProjectTypes();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

 
    const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form:", form);

    let url = "http://localhost:8000/api/project-types";
    let httpMethod = "POST";

    if (editId) {
      url = `http://localhost:8000/api/project-types/${editId}`;
      httpMethod = "PUT";
    }

    try {
      const res = await fetch(url, {
        method: httpMethod, 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          project_type_name: form.project_type_name,
          description: form.description
        })
      });

      if (!res.ok) {
        throw new Error("Failed to save project type");
      }

      const result = await res.json();
      console.log("Response:", result);

      setForm({ project_type_name: "", description: "" });
      setEditId(null);
      fetchProjectTypes();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };


  const handleEdit = (item) => {
    setForm({
      project_type_name: item.project_type_name,
      description: item.description
    });
    setEditId(item.id);
  };

 
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await fetch(`http://localhost:8000/api/project-types/${id}`, {
        method: "DELETE"
      });
      fetchProjectTypes();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Project Types</h1>

      {/* ---------------- Form ---------------- */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block font-medium">Project Type Name *</label>
          <input
            type="text"
            name="project_type_name"
            value={form.project_type_name}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId ? "Update Project Type" : "Add Project Type"}
        </button>
      </form>

      {/* ---------------- Table ---------------- */}
      <table className="w-full border border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectTypes.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No project types found
              </td>
            </tr>
          ) : (
            projectTypes.map((pt) => (
              <tr key={pt.id}>
                <td className="border p-2">{pt.project_type_name}</td>
                <td className="border p-2">{pt.description}</td>
                <td className="border p-2 text-center space-x-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(pt)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(pt.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}