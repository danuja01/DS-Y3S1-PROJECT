import React, { useState, useEffect } from "react";
import NotificationDataService from "../services/notification";

const RestaurantsList = (props) => {
  const [reviews, setNotifications] = useState([]);

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  const retrieveRestaurants = (page) => {
    NotificationDataService.getAll(page)
      .then((response) => {
        setNotifications(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="row">
      {reviews.map((notification) => {
        return (
          <div key={notification._id}>
            <h3>Notification title: {notification.notification_title}</h3>
            <p>Notification message: {notification.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantsList;
