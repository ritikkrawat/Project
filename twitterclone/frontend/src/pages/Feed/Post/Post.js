import { Avatar } from '@mui/material';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import '../Post/Post.css';

const Post = ({ p }) => {
    const { name, username, photo, post, profilePhoto, audio } = p;

    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar src={profilePhoto} />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>
                            {name}{" "}
                            <span className='post_headerSpecial'>
                                <VerifiedIcon className='post_badge' /> @{username}
                            </span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>{post}</p>
                    </div>
                    {photo && <img src={photo} alt='' width='500' />}
                    {audio && (
                        <div className='post_audio'>
                            <audio controls>
                                <source src={audio} type='audio/mpeg' />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    )}
                    <div className='post_footer'>
                        <ChatBubbleOutlineIcon className='post_footer_icon' fontSize='small' />
                        <RepeatIcon className='post_footer_icon' fontSize='small' />
                        <FavoriteBorderIcon className='post_footer_icon' fontSize='small' />
                        <PublishIcon className='post_footer_icon' fontSize='small' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
