import React, { useState, useEffect } from "react";
import { FaVideo, FaImage, FaSmile, FaTimes, FaUpload } from "react-icons/fa";
import axiosClient from "../../api/axiosClient";
const PostCreate = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const fileInputRef = React.createRef();
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("authToken");
  console.log ("token: ",token)
  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPostContent(""); // Clear content when modal closes
    setMediaFiles([]); // Clear uploaded files
  };

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    let currentImages = mediaFiles.filter(
      (file) => !file.type.startsWith("video/")
    );
    let currentVideo = mediaFiles.find((file) =>
      file.type.startsWith("video/")
    );

    // Check if there's already a video
    if (currentVideo && files.some((file) => file.type.startsWith("video/"))) {
      alert("You can only upload one video.");
      return;
    }

    // Count existing images and check the limit
    if (
      currentImages.length +
        files.filter((file) => file.type.startsWith("image/")).length >
      5
    ) {
      alert("You can only upload a maximum of 5 images.");
      return;
    }

    // Update media files
    setMediaFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("contents", postContent);

      // Tách ảnh và video từ mediaFiles
      const images = mediaFiles.filter((file) =>
        file.type.startsWith("image/")
      );
      const video = mediaFiles.find((file) => file.type.startsWith("video/"));

      // Thêm ảnh vào formData
      images.forEach((image) => {
        formData.append("images", image); // Thêm nhiều ảnh với key là "images"
      });

      // Thêm video vào formData nếu có
      if (video) {
        formData.append("video", video); // Chỉ thêm 1 video với key là "video"
      }

      // Gửi dữ liệu lên server
      const response = await axiosClient.post("/api/userpost/v1/post", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setPosts((prevPosts) => [response.data.data, ...prevPosts]); // Thêm bài viết mới vào danh sách
      handleCloseModal(); // Đóng modal sau khi thành công
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Failed to submit post. Please try again.");
    }
  };

  return (
    <div className="post create">
      <div className="post-top flex items-center p-2">
        <div className="dp">
          <img
            src="./images/girl.jpg"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
        <button
          className="ml-2 p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all"
          onClick={handleButtonClick}
        >
          Bạn đang nghĩ gì ?
        </button>
      </div>

      <div className="post-bottom flex space-x-4 mt-2">
        <div
          className="action cursor-pointer flex items-center"
          onClick={handleButtonClick}
        >
          <FaVideo className="text-blue-500 mr-1" />
          <span>Live video</span>
        </div>
        <div
          className="action cursor-pointer flex items-center"
          onClick={handleButtonClick}
        >
          <FaImage className="text-green-500 mr-1" />
          <span>Photo/Video</span>
        </div>
        <div
          className="action cursor-pointer flex items-center"
          onClick={handleButtonClick}
        >
          <FaSmile className="text-yellow-500 mr-1" />
          <span>Feeling/Activity</span>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-2xl overflow-y-auto ${
              mediaFiles.length > 0 ? "h-3/4" : "h-1/3"
            }`}
          >
            <h2 className="text-lg font-bold mb-4">Create a Post</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Write your post here..."
              value={postContent}
              onChange={handleInputChange}
            />
            <div className="mt-4">
              <label className="block mb-2 font-semibold">
                Upload Images or Videos:
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
                />
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="flex items-center p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all"
                >
                  <FaUpload className="mr-2 text-blue-500" />
                  <span>Select Files</span>
                </button>
              </div>
              {mediaFiles.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {mediaFiles.slice(0, 6).map((file, index) => (
                    <div
                      key={index}
                      className="relative w-full h-auto rounded-md overflow-hidden"
                    >
                      {file.type.startsWith("video/") ? (
                        <video
                          controls
                          src={URL.createObjectURL(file)}
                          className="w-full h-auto object-cover"
                          alt={`upload-${index}`}
                        />
                      ) : (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`upload-${index}`}
                          className="w-full h-auto object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 p-2 text-gray-700 hover:bg-gray-200 rounded-md"
                onClick={handleCloseModal}
              >
                <FaTimes className="inline mr-1" /> Cancel
              </button>
              <button
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreate;
