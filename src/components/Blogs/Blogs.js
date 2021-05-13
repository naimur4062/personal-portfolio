import React from 'react';
import SideBar from '../SideBar/SideBar';
import Method from '../../images/method.jpg';
import Fundamentals from '../../images/fundamental.jpg';
import Interview from '../../images/interview.jpg';
import Blog from './Blog';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            name: 'Some JavaScript Methods',
            description: 'In this article we are going to know about a small portion of JavaScript which is known as JavaScript methods.',
            img: Method,
            link: 'https://naimur4062.medium.com/some-javascript-methods-f49a9cb510f3',
        }, 
        {
            id: 2,
            name: '10 Fundamentals of React',
            description: 'Hello, everyone. Today, in this article, I am going to discuss a little bit about react fundamental topics.',
            img: Fundamentals,
            link: 'https://naimur4062.medium.com/10-fundamentals-of-react-453e353fe22f',
        },
        {
            id: 3,
            name: 'Some JavaScript Topics.',
            description: 'There are some basic JavaScript topics which you should learn. These are also important for interview questions',
            img: Interview,
            link: 'https://naimur4062.medium.com/some-random-topics-for-javascript-interview-question-f401165ebef6',
        }
        
    ]
    return (
        <div>
            <div className="text-center">
                <SideBar />
            </div>
            <div style={{backgroundColor: '#00101a' }}>
                <h1 style={{color: '#ccd6f6'}}className="text-center py-5">My Blogs</h1>
                <div className="container">
                    <div className="row">
                        {
                            blogs.map(blog => <Blog key={blog.id} blog={blog}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;