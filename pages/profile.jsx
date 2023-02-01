import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { Card } from 'react-bootstrap'
import  Router  from "next/router";
import { database } from '../services/firebase'
import { ref, child, get } from 'firebase/database'
import jwt_decode from "jwt-decode";

const Profile = () => {
    const [data, setData] = useState({})
    const [isUser, setUser] = useState('')
    const [isUserId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [hobby, setHobby] = useState('')
    const [age, setAge] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [bio, setBio] = useState('')

    const authenticate = () => {
        let storage = localStorage.getItem("accesstoken")
        if (storage === "" || storage === null){
          Router.push('/login')
        } else {
          let decode = jwt_decode(storage)
          setUser(decode.email)
          setUserId(decode.user_id)
        }
      }

    const firebaseData = async () => {
        try {
            const db = await get(child(ref(database),`Histories/`)) 
            const item = db.val() 
            // console.log(isUserId)
            setName(item?.[isUserId]?.['name'])
            setAge(item?.[isUserId]?.['age'])
            setPhoneNumber(item?.[isUserId]?.['phoneNumber'])
            setHobby(item?.[isUserId]?.['hobby'])
            setBio(item?.[isUserId]?.['bio'])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        firebaseData();
        authenticate(); 
    },[isUserId])

    return (
    <div className="profile text-dark">
        <div className="title-section">
           User Profile
        </div>
        <div className="main-section">
            <Card className="left-container" style={{ width: '18rem' }}>
                <Card.Title className="profile-title">User Detail</Card.Title>
                <Card.Img className="profile-image" variant="top" src='https://www.qoala.app/id/blog/wp-content/uploads/2020/12/Bill-Gates-Profil-Biografi-Fakta-Terkini-2020.jpg' />
                <Card.Body>
                    <div className="username">{bio}</div>
                    <hr />
                    <div className="rank">
                        Your Rank 
                        <img className="rank-image" alt="your rank" src="https://w7.pngwing.com/pngs/477/877/png-transparent-trophy-silver-medal-gold-trophy-glass-medal-sticker-thumbnail.png" />
                        <div className="rank-title">Silver</div>
                    </div>
                </Card.Body>
            </Card>
            <div className="main-info">
                <div className="info-title-section">
                <Link className="to-edit" href="/update-profile">edit profile</Link> <p className="info-title">ABOUT ME </p> 
                </div>
                <hr />
                <div className="main-detail">
                {/* <article className="info">
                    <span className="info-prop">Name</span><span className="info-val">Bill Gates</span>
                </article> */}
                    <div className="info-prop">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Phone</p>
                        <p>Hobby</p>
                    </div>
                    <div className="info-val">
                        <p>{name} </p>
                        <p>{age}</p>
                        <p>{phoneNumber}</p>
                        <p>{hobby} </p>
                    </div>
                </div>
                <br />
                <div className="info-title">RECORD</div>
                <hr />
                <div className="record">
                    <div className="count-title">
                        WIN count
                        <div className="count"><span>60</span></div>
                    </div>
                    <div className="count-title">
                        LOSE count
                    <div className="count"><span>50</span></div>
                    </div>
                    <div className="count-title">
                        YOUR SCORE
                        <div className="count"><span>180</span></div>
                        </div>
                </div>
                </div>
        </div>
    </div>
    )
}

export default Profile