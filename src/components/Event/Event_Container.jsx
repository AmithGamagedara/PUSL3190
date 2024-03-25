import React from "react";
import { useParams } from "react-router-dom";
import data from "../../helpers/Upcoming_data.json";

export default function Event_Details() {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));

  if (!card) {
    return <div className="py-16">Event not found</div>;
  }

  return (
    <div className="py-16">
      Event_Container
      <h2 className="mb-2 text-2xl font-semibold text-[#ffd600]">
        {card.title}
      </h2>
    </div>
  );
}
