import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditCampusView = ({ fetchCampus, updateCampus, campus }) => {
  const { id } = useParams(); // Get campus ID from the route
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  // Fetch the campus data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      await fetchCampus(id);
    };
    fetchData();
  }, [id, fetchCampus]);

  // Update form data when the campus data is fetched
  useEffect(() => {
    if (campus) {
      setFormData({
        name: campus.name || "",
        address: campus.address || "",
        description: campus.description || "",
        imageUrl: campus.imageUrl || "",
      });
    }
  }, [campus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCampus(id, formData); // Call the updateCampus thunk
    history.push(`/campus/${id}`); // Navigate back to the Campus View
  };

  return (
    <div>
      <h1>Edit Campus</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCampusView;
