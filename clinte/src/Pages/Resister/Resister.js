import React, { useState } from 'react'
import "./Resister.css" 
import axios from 'axios'


function Resister() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [profile, setProfile] = useState("https://i.stack.imgur.com/dr5qp.jpg")
    const [password, setPassword] = useState("")
    const [pic, setPic] = useState({})

    const [checkImg, setCheckImg] = useState(false)

   

    const resisterUser = (e) => {
        e.preventDefault();

        if(!checkImg){return alert("Profile file is mandatory !")}
        const formData = new FormData();
        formData.append("file", pic)
        formData.append("fileName", pic.name)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
        };

        const options = {
            name:name,
            email: email,
            password: password,
            profile: pic
        }


        axios.post("http://localhost:4000/user", options, config).then(() => {
            alert("Account created succesfully")
            window.location.replace("/")
        }).catch((err) => alert(err.message))
    }

    const displayDP = (e) => {
        e.preventDefault()

        setCheckImg(true)
        setPic(e.target.files[0])

        let imgFile = e.target.files[0]
        var reader = new FileReader();

        var imgtag = document.getElementById("profilePicture");
        imgtag.title = imgFile.name;

        reader.onload = function (e) {
            setProfile(e.target.result);
        };
        reader.readAsDataURL(imgFile);
    }



    return (
        <div id='bigBox'>

            <div className="userResister">
                <form onSubmit={resisterUser}>
                    <div id="imageBox" className="eachInputBox">
                        <div id="DPBOX">
                            <img id="profilePicture" src={profile} alt='Error' />
                            <label htmlFor='addDP'><i className="DPIcon fa-solid fa-camera"></i></label>
                        </div>
                        <input type="file" id='addDP' alt='erorr' style={{ display: "none" }} onChange={(e)=>displayDP(e)} />
                    </div>
                    
                    <div className="resister-form">
                        <span>Name</span>
                        <input type="text" className='inputs' placeholder='Write your name' required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    
                    <div className="resister-form">
                        <span>Email</span>
                        <input type="email" className='inputs' placeholder='Write your email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="resister-form">
                        <span>Password</span>
                        <input type="password" className='inputs' placeholder='Write your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" id='btn' className="btn btn-primary">Create Account</button>
                    <a id='logins' href='/'>Login</a>
                </form>
            </div>
        </div>
    )
}

export default Resister
