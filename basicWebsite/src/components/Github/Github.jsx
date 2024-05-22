import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/LakshayJain458')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData()
    return (
        <div className='bg-gray-700 text-white p-4'>
            Github followers : {data.following}
            <br />
            <a href="https://github.com/LakshayJain458" className='hover:underline'>GithHub Link - https://github.com/LakshayJain458</a>
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/LakshayJain458')
    return response.json()
}