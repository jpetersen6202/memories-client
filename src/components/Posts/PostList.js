import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'

export default function PostList() {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)

    console.log(posts)
    
    return (
        <>
            <h1>POST LIST</h1>
            <Post />
            <Post />
        </>
    )
}
