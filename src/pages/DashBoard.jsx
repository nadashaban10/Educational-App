import React, { useState, useEffect } from "react";
import userImage from "../../public/images/UserPhoto.jpg";

const DashBoard = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors


  // Function to fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers(data || []); // Update state with fetched users
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("An error occurred while fetching users.");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Management</h1>

      {/* Loading or Error Message */}
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Table */}
          <table className="w-full border-collapse bg-white rounded-lg shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left text-gray-600 font-medium">Image</th>
                <th className="p-4 text-left text-gray-600 font-medium">Name</th>
                <th className="p-4 text-left text-gray-600 font-medium">Email</th>
                <th className="p-4 text-left text-gray-600 font-medium">Phone</th>
                <th className="p-4 text-left text-gray-600 font-medium">Gender</th>
                <th className="p-4 text-left text-gray-600 font-medium">Age</th>
                <th className="p-4 text-left text-gray-600 font-medium">Country</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-50`}
                >
                  <td className="p-4">
                    <img
                      src={userImage }
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="p-4 text-gray-700">{user.name}</td>
                  <td className="p-4 text-gray-700">{user.email}</td>
                  <td className="p-4 text-gray-700">{user.phone}</td>
                  <td className="p-4 text-gray-700">{user.gender || "N/A"}</td>
                  <td className="p-4 text-gray-700">{user.age !== null ? user.age : "N/A"}</td>
                  <td className="p-4 text-gray-700">{user.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashBoard;