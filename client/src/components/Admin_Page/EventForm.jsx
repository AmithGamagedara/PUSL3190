import React, { useState } from "react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    startDate: "",
    startMonth: "",
    endDate: "",
    endMonth: "",
    location: "",
    moreInfo: "",
    registrationStatus: "",
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submits the form data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Event added successfully");
        // Optionally reset the form or handle the UI response
        setFormData({
          title: "",
          image: "",
          startDate: "",
          startMonth: "",
          endDate: "",
          endMonth: "",
          location: "",
          moreInfo: "",
          registrationStatus: "",
        });
      } else {
        console.error("Failed to add event: " + response.statusText);
      }
    } catch (error) {
      console.error("Failed to add event", error);
    }
  };

  return (
  
    <div className="pt-24 pb-8">
    <form
      onSubmit={handleSubmit}
      className="max-w-lg p-5 mx-auto mt-10 bg-white rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Event Title:
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          required
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Image URL:
        </label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label
            htmlFor="startDate"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Start Date:
          </label>
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            placeholder="Start Date"
            required
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="startMonth"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Start Month:
          </label>
          <input
            type="text"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleChange}
            placeholder="Start Month"
            required
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label
            htmlFor="endDate"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            End Date:
          </label>
          <input
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="End Date"
            required
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="endMonth"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            End Month:
          </label>
          <input
            type="text"
            name="endMonth"
            value={formData.endMonth}
            onChange={handleChange}
            placeholder="End Month"
            required
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Location:
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="moreInfo"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          More Info:
        </label>
        <input
          type="text"
          name="moreInfo"
          value={formData.moreInfo}
          onChange={handleChange}
          placeholder="+ Info"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="registrationStatus"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Registration Status:
        </label>
        <select
          name="registrationStatus"
          value={formData.registrationStatus}
          onChange={handleChange}
          className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Registration Status</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-4 font-bold text-white bg-[#FF1616] rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 focus:shadow-outline"
      >
        Submit
      </button>
    </form>
    </div>
  );
}

export default EventForm;
