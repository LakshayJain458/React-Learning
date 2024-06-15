import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../Appwrite/config"
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const naviagte = useNavigate()
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            naviagte('/')
        }
    }, [slug, naviagte])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
