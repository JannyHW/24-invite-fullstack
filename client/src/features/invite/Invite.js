//yarn install for client, server, outside
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectInvite, getInvite, addGoing, addNotGoing } from "./inviteSlice.js"


 export function Invite() {
  const dispatch = useDispatch();
  const user = useSelector(selectInvite)
  const [goingNum, setGoingNum] = useState(0);
  const [notGoingNum, setNotGoingNum] = useState(0);

  useEffect(() => {
    dispatch(getInvite())
  }, [])

    function handleGoing() {
      dispatch(addGoing(user));
      setGoingNum(goingNum + 1)
  }

  function handleNotGoing() {
      dispatch(addNotGoing(user));
      setNotGoingNum(notGoingNum + 1)
  }

  return(
    <>
      <div className="outside">
        <Link to={"/api/going/"} className="goingHeading"> Going: {goingNum}</Link>
        <Link to={"/api/notgoing/"} className="notGoingHeading">Not Going: {notGoingNum}</Link> 
      </div>
      <div className="container">
        <div className="image" style={{ backgroundImage: `url(${user.pic})` }}></div>
        <div className="card">
          <div><span>Name:</span> {user.first} {user.last}</div>
          <div><span>Email:</span> {user.email}</div>
          <div><span>Phone:</span> {user.phone}</div>
        </div>
        <div className="btns">
          <button 
          onClick={() => handleNotGoing()}
          className="notBtn">&#10006;
          </button>
          <button 
          onClick={() => handleGoing()}
          className="goBtn">&#10003;
          </button>
        </div>
      </div>
      </>
  )
 }