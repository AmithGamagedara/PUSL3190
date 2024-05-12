import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newsData from '../../helpers/News_n_Media.json';
import { FaPlus } from 'react-icons/fa';

export default function AdminNews() {
  const [news, setNews] = useState(newsData);
  const [editingNews, setEditingNews] = useState(null);
  const [updatedNews, setUpdatedNews] = useState({});

  const deleteNews = (id) => {
    setNews(news.filter(item => item.id !== id));
  };

  const startEditing = (item) => {
    setEditingNews(item);
    setUpdatedNews(item);
  };

  const handleInputChange = (e, field) => {
    setUpdatedNews({ ...updatedNews, [field]: e.target.value });
  };

  const updateNews = () => {
    setNews(news.map(item => (item.id === updatedNews.id ? updatedNews : item)));
    setEditingNews(null);
    setUpdatedNews({});
  };

  return (
    <div className='p-12 py-24'>
      <table className="w-full table-auto">
      <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
            <th className="px-6 py-3 text-left">Title</th>
            {/* <th className="px-6 py-3 text-left">Link</th> */}
            <th className="px-6 py-3 text-left">Description</th>
            <th className="px-6 py-3 text-left">Actions</th>
            
          </tr>
        <tbody className="text-sm font-light text-gray-600">
          {news.map(item => (
            <tr className="border-b border-gray-200 hover:bg-gray-100" key={item.id}>
              <td className="px-6 py-3 text-left">
                {editingNews?.id === item.id ? (
                  <input type="text" value={updatedNews.title} onChange={(e) => handleInputChange(e, 'title')} />
                ) : item.title}
              </td>
              {/* <td className="px-6 py-3 text-left">
                {editingNews?.id === item.id ? (
                  <input type="text" value={updatedNews.image} onChange={(e) => handleInputChange(e, 'image')} />
                ) : item.image}
              </td> */}
              <td className="px-6 py-3 text-left">
                {editingNews?.id === item.id ? (
                  <textarea value={updatedNews.description} onChange={(e) => handleInputChange(e, 'description')} />
                ) : item.description}
              </td>
              <td className="px-6 py-3 text-center">
                <div className="flex justify-center space-x-4">
                  {editingNews?.id === item.id ? (
                    <>
                      <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700" onClick={updateNews}>Save</button>
                      <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700" onClick={() => setEditingNews(null)}>Cancel</button>
                    </>
                  ) : (
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => startEditing(item)}>Edit</button>
                  )}
                  <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onClick={() => deleteNews(item.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/news_add_form" className="fixed p-6 text-white bg-[#FF1616] hover:bg-red-600  rounded-full bottom-12 right-12">
        <FaPlus />
      </Link>
    </div>
  );
}