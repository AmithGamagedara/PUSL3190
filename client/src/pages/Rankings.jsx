import React, { useState } from "react";
import rankingsData from "../helpers/Rankings_Data.json";

export default function Rankings() {
  const [selectedCategory, setSelectedCategory] = useState(
    rankingsData.categories[0]
  );

  const handleChangeCategory = (event) => {
    const categoryName = event.target.value;
    const selectedCategory = rankingsData.categories.find(
      (category) => category.name === categoryName
    );
    setSelectedCategory(selectedCategory);
  };

  return (
    <div className="items-center justify-center min-h-screen px-32 py-16 bg-[#161616]">
      <div className="container px-4 py-8 mx-auto text-white">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-[#FF1616] sm:text-2xl">
            National Rankings
          </span>
          <div className="flex items-center">
            <span className="mr-2 text-gray-300">Category:</span>
            <select
              value={selectedCategory.name}
              onChange={handleChangeCategory}
              className="block w-3/4 px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              // Adjust the width here
            >
              {rankingsData.categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h2 className="mb-4 text-xl font-bold text-gray-300">
          {selectedCategory.name}
        </h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="text-white bg-red-600 rounded-lg">
              <tr>
                <th className="px-6 py-3 text-sm font-bold tracking-wider text-center uppercase">
                  Rank
                </th>
                <th className="px-6 py-3 text-sm font-bold tracking-wider text-left uppercase">
                  First Name
                </th>
                <th className="px-6 py-3 text-sm font-bold tracking-wider text-left uppercase">
                  Last Name
                </th>
                <th className="px-6 py-3 text-sm font-bold tracking-wider text-center uppercase ">
                  Total Points
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {selectedCategory.rankings.map((ranking) => (
                <tr
                  className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={ranking.rank}
                >
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center w-8 h-8 mx-auto border border-white rounded-full">
                      {ranking.rank}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {ranking.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {ranking.lastName}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {ranking.totalPoints}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
