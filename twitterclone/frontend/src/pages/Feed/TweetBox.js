import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "./TweetBox.css";
// import MicIcon from '@mui/icons-material/Mic';
// import StopIcon from '@mui/icons-material/Stop';
import axios from 'axios';
import useLoggedInUser from '../../hooks/useLoggedInUser.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

// Function to check if current time is within allowed time range
// const isWithinTimeRange = () => {
//     const now = new Date();
//     const istOffset = 5.5; // IST is UTC+5:30
//     const istTime = new Date(now.getTime() + istOffset * 60 * 60 * 1000);

//     const hours = istTime.getHours();
//     return hours >= 14 && hours <= 19; // 2 PM to 7 PM
// };

const TweetBox = () => {
    const [post, setPost] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const email = user?.email;
    const [loggedInUser] = useLoggedInUser();
    // const [audioURL, setAudioURL] = useState('');
    // const [isRecording, setIsRecording] = useState(false);

    const userProfilePic = loggedInUser[0]?.profileImage || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

    const handleUploadImage = (e) => {
        setIsLoading(true);
        const image = e.target.files[0];

        const formData = new FormData();
        formData.set('image', image);

        axios.post('https://api.imgbb.com/1/upload?key=a5c43919316ba181b7f3fd763df9e725', formData)
            .then(res => {
                setImageURL(res.data.data.display_url);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    };

    // const handleStartRecording = () => {
    //     setIsRecording(true);
    // };

    // const handleStopRecording = () => {
    //     setIsRecording(false);
    // };

    // const handleAudioStop = (recordedBlob) => {
    //     setAudioURL(recordedBlob.blobURL);
    // };

    const handleTweet = (e) => {
        e.preventDefault();
        
        // if (!isWithinTimeRange()) {
        //     alert('Audio uploads are only allowed between 2 PM and 7 PM IST');
        //     setPost('');
        //     setImageURL('');
        //     setAudioURL('');
        //     return;
        // }

        if (user.providerData[0].providerId === 'password') {
            fetch(`http://localhost:5000/loggedInUser?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setName(data[0]?.name);
                    setUsername(data[0]?.username);
                });
        } else {
            setName(user?.displayName);
            setUsername(email?.split('@')[0]);
        }

        if (name) {
            const userPost = {
                profilePhoto: userProfilePic,
                post: post,
                photo: imageURL,
                // audio: audioURL,
                username: username,
                name: name,
                email: email
            };

            setPost('');
            setImageURL('');
            // setAudioURL('');
            fetch(`http://localhost:5000/post`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userPost)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                });
        }
    };

    return (
        <div className='tweetBox'>
            <form onSubmit={handleTweet}>
                <div className='tweetBox__input'>
                    <Avatar src={userProfilePic} />
                    <input
                        type='text'
                        placeholder="what's happening?"
                        onChange={(e) => setPost(e.target.value)}
                        value={post}
                        required
                    />
                </div>

                <div className='imageIcon_tweetButton'>
                    <label htmlFor='image' className='imageIcon'>
                        {
                            isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'Image uploaded' : <AddPhotoAlternateIcon />}</p>
                        }
                    </label>
                    <input
                        type='file'
                        id='image'
                        className='imageInput'
                        onChange={handleUploadImage}
                    />

                    {/* <div className='audioRecorder'>
                        <Button onClick={handleStartRecording} disabled={isRecording}>
                            <MicIcon />
                        </Button>
                        <Button onClick={handleStopRecording} disabled={!isRecording}>
                            <StopIcon />
                        </Button>

                        <ReactMic
                            record={isRecording}
                            className="sound-wave"
                            onStop={handleAudioStop}
                            strokeColor="#000000"
                            backgroundColor="#FF4081"
                        />
                        {audioURL && <audio src={audioURL} controls />}
                    </div> */}

                    <Button className='tweetBox__tweetButton' type='submit'>
                        Tweet
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TweetBox;
