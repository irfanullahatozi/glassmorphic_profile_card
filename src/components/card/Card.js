import React from 'react'
import classes from './Card.module.css'
const Card = () => {
  return (
    <div className={`${classes.container}`}>
            <div className={`${classes.circle}`}></div>
            <div className={`${classes.circle}`}></div>
            <div className={`${classes.card}`}>
                <div className={`${classes["profile-img"]}`}>
                    <img src={window.location.origin + "/profile1.png"} alt="profile"/>
                </div>
                <h4 className={`${classes.name}`}>Irfan Ullah</h4>
                <p className={`${classes.designation}`}>Full Stack Developer</p>
                <className class={`${classes["glass-btn"]}`}>View Profile</className>
                <div className={`${classes.ratings}`}>
                    <p>
                        <span>80%</span>
                        <span>Rating</span>
                    </p>
                    <p className={`${classes.partition}`}></p>
                    <p>
                        <span>90%</span>
                        <span>Activity</span>
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Card
