import React, { useState, useEffect } from "react";
import NotificationDataService from "../services/notification";
import "../CSS/notifications.css";
// import Notification from "../img/notification.svg";

const RestaurantsList = (props) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [isRead, setIsRead] = useState([]);
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

  // return (
  //   <div className="row">
  //     {reviews.map((notification) => {
  //       return (
  //         <div key={notification._id}>
  //           <h3>Notification title: {notification.notification_title}</h3>
  //           <p>Notification message: {notification.message}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
    setIsRead(false);
  };

  return (
    <div className="row">
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <button
            type="button"
            class="icon-button"
            onClick={() => setOpen(!open)}
          >
            <span class="material-icons">notifications</span>
            <span class="icon-button__badge">0</span>
          </button>
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
      </div>

      {open && (
        <div className="notifications">
          {notifications.map((notification) => {
            return (
              <div key={notification._id}>
                <h3>Notification title: {notification.notification_title}</h3>
                <p>Notification message: {notification.message}</p>
              </div>
            );
          })}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantsList;
