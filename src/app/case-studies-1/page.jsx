import Blog from '@/component/case-studies/Blog';
import Header from '@/component/case-studies/Header';
import Post from '@/component/case-studies/Post';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header />
      <Post />
      <Blog />
    </div>
  );
};

export default page;
