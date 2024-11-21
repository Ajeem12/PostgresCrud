import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://postgrescrud-bakend.onrender.com/api/v1/users/:id", {
          headers: { Authorization: token },
        });
        setUser(res.data);
      } catch (err) {
        alert("Failed to load user profile");
      }
    };
    fetchUser();
  }, []);

  return user ? (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserProfile;
