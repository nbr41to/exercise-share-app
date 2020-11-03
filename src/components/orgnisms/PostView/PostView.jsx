import React from 'react';
import { useRecoilValue } from 'recoil';
import { postsState } from 'recoil/atoms.js'
import Post from "../../molecules/Post"
import StylePostView from "./PostView.styled"


const PostView = () => {
    const posts = useRecoilValue(postsState)
    return (
        <StylePostView>
            <div>
                {posts?.map((post, index) => < Post post={post} index={index} key={index} />)}
            </div>
        </StylePostView>
    );
}

export default PostView;
