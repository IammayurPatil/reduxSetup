import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/loginThunk";

export function Profile() {
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state?.profile) 
  console.log(profileData);
  
  

  useEffect(() => {
    const fetchprofile = async () => {
      try {
        dispatch(fetchUserData());
      } catch (error) {
        console.log(error);
      }
    };
    fetchprofile()
  }, [dispatch]);

  return (
    <>
      <h2 onClick={()=> {dispatch(fetchUserData)}}>Profile</h2>
      {profileData ? <p>Welcome, {profileData?.userData?.user?.username}!</p> : <p>Loading...</p>}
    </>
  );
}
