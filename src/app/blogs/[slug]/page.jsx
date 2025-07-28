import BLockWrapper from '@/component/blocks/BLockWrapper';
import FacebookBtn from '@/component/FacebookBtn';
import LinkedinBtn from '@/component/LinkedinBtn';
import TwitterBtn from '@/component/TwitterBtn';
import { fetchArticleBySlug, fetchAuthors } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export async function generateMetadata({ params }) {
  const article = await fetchArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article?.title,
    description: article?.description,
  };
}

const page = async ({ params }) => {
  const article = await fetchArticleBySlug(params.slug);
  const authors = await fetchAuthors();
  const authorsPhoto = authors?.data?.find(item => item.email == article?.author?.email)?.avatar?.url;
  if (!article) {
    notFound();
  }
  return (
    <div>
      {/* Header Here */}
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(255, 255, 255, 1) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[137px] relative md:pt-[178px] pb-[50px] lg:pb-[153px] px-5 md:px-[60px]"
      >
        <div className="text-xs lg:text-sm mb-6 lg:mb-[80px] text-white font-normal flex items-center gap-2">
          <Link className="" href={'/blogs'}>
            Blogs
          </Link>
          {article?.title && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="#fff" strokeWidth="1.5" />
            </svg>
          )}
          {article?.title && <span className="inline-block bg-[#FCFCFD1A] py-1 px-[10px] rounded-[8px]">{article?.title}</span>}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full relative z-10  mx-auto text-left">
            <h2 className="font-medium tracking-[-4%] leading-[120%] text-[36px]  lg:text-[60px] text-[#FCFCFD]">{article?.title}</h2>
            <div className="block mt-10 lg:hidden max-w-[600px] max-h-[400px] rounded-2xl overflow-hidden w-full">
              <Image className="w-full h-full object-cover" height={200} width={200} alt={article.title} src={article?.cover?.url} />
            </div>
            <p className="text-black mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full  font-normal text-sm md:text-lg">
              {article?.description}
            </p>
            <span className="text-[#18181B] font-normal flex items-center gap-2 text-sm">
              {article?.author?.name} <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>{' '}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>3 min reading time</span>
            </span>
          </div>
          {/* Cover Photo */}
          <div className="hidden lg:block max-w-[600px] max-h-[400px] rounded-2xl overflow-hidden w-full">
            <Image className="w-full h-full object-cover" height={200} width={200} alt={article.title} src={article?.cover?.url} />
          </div>
        </div>
      </header>
      {/* Top bar */}
      <section className="pb-16  px-5 md:pb-[80px] md:px-[140px]">
        <div className="flex border-t pt-[80px] border-[#D1D1D6] flex-col md:flex-row mb-[68px] gap-6 md:items-center justify-between">
          {/* <div className=" text-base font-normal flex items-center gap-2">
            <Link className="text-secondary" href={'/blogs'}>
              Blogs
            </Link>
            {article?.category?.name && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#43006A" strokeWidth="1.5" />
              </svg>
            )}
            {article?.category?.name && <span>{article?.category?.name}</span>}
          </div> */}
          <div className="flex items-center gap-5">
            <p>Share </p>
            <ul className="flex items-center gap-2">
              <li>
                <LinkedinBtn />
              </li>
              <li>
                <TwitterBtn />
              </li>
              <li>
                <FacebookBtn />
              </li>
            </ul>
          </div>
        </div>
        <article className="md:text-lg text-base leading-[150%]">
          <h2 className="md:text-[40px] text-4xl font-medium md:font-semibold mb-5 md:mb-8">{article.title}</h2>
          <p>{article?.description}</p>
          {article.cover && (
            <figure className="h-[370px] rounded-xl md:h-[630px] py-10 mb-10 ">
              {(article?.cover?.formats?.large?.url && (
                <Image
                  width={article?.cover.width}
                  height={article?.cover.height}
                  className="w-full rounded-xl h-full max-h-[630px] object-cover"
                  alt={article?.cover?.alternativeText}
                  src={`${article?.cover?.formats?.large?.url || article?.cover?.formats?.medium?.url}`}
                />
              )) ||
                (article?.cover?.formats?.medium?.url && (
                  <Image
                    width={article?.cover.width}
                    height={article?.cover.height}
                    className="w-full rounded-xl h-full max-h-[630px] object-cover"
                    alt={article?.cover?.alternativeText}
                    src={`${article?.cover?.formats?.medium?.url}`}
                  />
                )) ||
                (article?.cover?.formats?.small?.url && (
                  <Image
                    width={article?.cover.width}
                    height={article?.cover.height}
                    className="w-full rounded-xl h-full max-h-[630px] object-cover"
                    alt={article?.cover?.alternativeText}
                    src={`${article?.cover?.formats?.small?.url}`}
                  />
                ))}
              {article?.cover?.caption && <figcaption className="mt-4 text-sm pl-2 border-l-2">{article?.cover?.caption}</figcaption>}
            </figure>
          )}
          <BLockWrapper article={article} />
          <div className="flex pb-12 border-b-[0.5px] border-secondary mb-12 items-center flex-col mt-16">
            <p className="font-semibold text-lg mb-4">Share this post</p>

            <ul className="flex mb-12 items-center gap-2">
              <li>
                <LinkedinBtn />
              </li>
              <li>
                <TwitterBtn />
              </li>
              <li>
                <FacebookBtn />
              </li>
            </ul>
            <ul className=" text-secondary flex items-center gap-2 text-sm  font-normal">
              {article?.tags?.map(item => (
                <li key={item.id} className="px-3 py-1 bg-[#F3F1FF] rounded-xl">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center flex-col">
            {authorsPhoto ? (
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <Image width={100} height={100} alt="user name" className="w-full h-full object-cover" src={authorsPhoto} />
              </div>
            ) : (
              <div className="w-12 flex items-center justify-center font-bold text-2xl text-gray-600 h-12 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <p>{article?.author?.name[0]}</p>
              </div>
            )}
            <p className="text-sm font-semibold">{article?.author?.name || 'Unknown'}</p>
            <p className="text-sm ">
              {article?.author?.job_title}
              {article?.author?.company && ','} {article?.author?.company}
            </p>
          </div>
        </article>
      </section>
      {/* Related Post */}
    </div>
  );
};

export default page;
