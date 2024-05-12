import React from "react";

export default function AdminDashboard() {
  return (
    <div className="p-8 py-24">
      <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
      
      <div className="flex justify-center gap-4">
      <div className="flex-1 p-4 text-center border border-gray-300 rounded hover:bg-gray-200">
  <h2 className="mb-2 font-bold">Users</h2>
  <p className="text-3xl font-bold">2</p>
</div>
<div className="flex-1 p-4 text-center border border-gray-300 rounded hover:bg-gray-200">
  <h2 className="mb-2 font-bold">Associations</h2>
  <p className="text-3xl font-bold">1</p>
</div>
<div className="flex-1 p-4 text-center border border-gray-300 rounded hover:bg-gray-200">
  <h2 className="mb-2 font-bold">Events</h2>
  <p className="text-3xl font-bold">4</p>
</div>
<div className="flex-1 p-4 text-center border border-gray-300 rounded hover:bg-gray-200">
  <h2 className="mb-2 font-bold">News & Media</h2>
  <p className="text-3xl font-bold">3</p>
</div>
</div>
        </div>
      
  );
}
