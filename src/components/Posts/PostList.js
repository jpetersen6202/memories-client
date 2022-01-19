import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'

export default function PostList() {
    const classes = useStyles()
    
    return (
        <>
            <h1>POST LIST</h1>
            <Post />
            <Post />
        </>
    )
}
