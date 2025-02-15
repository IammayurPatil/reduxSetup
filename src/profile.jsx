import { useEffect, useState } from "react";
import axiosInstance from "../axios";

export function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchprofile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("response",response)
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchprofile()
  }, []);

  return (
    <>
      <h2>Profile</h2>
      {user ? <p>Welcome, {user.username}!</p> : <p>Loading...</p>}
    </>
  );
}
