import React, { useEffect, useState } from "react";
import userService from "../apis/userService";

let TotalUsers = () => {
    const [totalUsers, settotalUsers] = useState(0);

    useEffect(() => {
      userService.getTotalUsers()
        .then(total => settotalUsers(total))
        .catch(error => console.error('Error fetching total products: ', error))
    },[])
    
    return (
        <div className="card">
          <h2 className="card-title">Total Users</h2>
          <p className="card-text">{totalUsers}</p>
        </div>
      );
};

export default TotalUsers;