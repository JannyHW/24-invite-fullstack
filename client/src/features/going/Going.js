import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGoing, goingUser, selectGoing } from "./goingSlice";

export function Going() {
  const user = useSelector(selectGoing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoing());
  }, []);

  return (
    <>
    <h1>Going</h1>
    <div className="containerBig">
      {user.map((user) => (
      <div className="containerSmall">
      <div className="userCard">
          <div className="image" style={{ backgroundImage: `url(${user.pic})` }}></div>
          <div className="card">
            <div><span>Name:</span> {user.first} {user.last}</div>
            <div><span>Email:</span> {user.email}</div>
            <div><span>Phone:</span> {user.phone}</div>
          </div>
      </div>
      </div>
      ))}
    </div>
    </>
  );
}