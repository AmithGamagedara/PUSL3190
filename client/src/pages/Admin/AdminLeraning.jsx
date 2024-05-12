import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import videosData from '../../helpers/videos.json';
import { FaPlus } from 'react-icons/fa';

export default function AdminLearning() {
  const [videos, setVideos] = useState(videosData);
  const [editingVideo, setEditingVideo] = useState(null);
  const [updatedVideo, setUpdatedVideo] = useState({});

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const startEditing = (video) => {
    setEditingVideo(video);
    setUpdatedVideo(video);
  };

  const handleInputChange = (e, field) => {
    setUpdatedVideo({ ...updatedVideo, [field]: e.target.value });
  };

  const updateVideo = () => {
    setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
    setEditingVideo(null);
    setUpdatedVideo({});
  };

  return (
    <div className='p-12 py-24'>
      <table className="w-full table-auto">
      <thead>
          <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
            <th className="px-6 py-3 text-left">Title</th>
            {/* <th className="px-6 py-3 text-left">Link</th> */}
            <th className="px-6 py-3 text-left">Actions</th>
            
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-600">
        {videos.map(video => (
  <tr className="border-b border-gray-200 hover:bg-gray-100" key={video.id}>
    <td className="px-6 py-3 text-left">
      {editingVideo?.id === video.id ? (
        <input type="text" value={updatedVideo.title} onChange={(e) => handleInputChange(e, 'title')} />
      ) : video.title}
    </td>
    {/* <td className="px-6 py-3 text-left">
      {editingVideo?.id === video.id ? (
        <input type="text" value={updatedVideo.src} onChange={(e) => handleInputChange(e, 'src')} />
      ) : video.src}
    </td> */}
    <td className="px-6 py-3 text-center">
      <div className="flex justify-center space-x-4">
        {editingVideo?.id === video.id ? (
          <>
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700" onClick={updateVideo}>Save</button>
            <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700" onClick={() => setEditingVideo(null)}>Cancel</button>
          </>
        ) : (
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => startEditing(video)}>Edit</button>
        )}
        <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onClick={() => deleteVideo(video.id)}>Delete</button>
      </div>
    </td>
  </tr>
))}
        </tbody>
      </table>
      <Link to="" className="fixed p-6 text-white bg-[#FF1616] hover:bg-red-600  rounded-full bottom-12 right-12">
        <FaPlus />
      </Link>
    </div>
  );
}