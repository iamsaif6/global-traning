import React from 'react';
import { trainingData } from '@/data/trainingData';
import { notFound } from 'next/navigation';
import Header from '@/app/component/courageous-conversations-training/Header';
import Video from '@/app/component/courageous-conversations-training/Video';
import Form from '@/app/component/services/Form';
import SendForm from '@/app/component/services/SendForm';
import FoundationForm from '@/app/component/services/FoundationForm';
import TrainingForm from '@/app/component/services/TrainingForm';
import Image from 'next/image';

const TrainingDetailPage = async ({ params }) => {
  const { slug } = params;
  const training = trainingData[slug];

  // If training not found, show 404
  if (!training) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header and Video - Same for all articles */}
      <Header subtitle={training.subtitle} cover={training?.cover} title={training.title} />
      {/* <Video /> */}

      {/* Intro Section */}
      {training.intro && (
        <section className="py-16 mt-16 px-5 lg:px-[40px] bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl lg:text-3xl font-semibold text-[#3E0065] text-center italic">{training.intro}</p>
          </div>
        </section>
      )}

      {/* Description Section */}
      <section className="py-16 px-5 lg:px-[40px]">
        <div className="max-w-4xl mx-auto">
          {/* <p className="text-lg whitespace-pre-line lg:text-xl text-gray-700 leading-relaxed">{training.description}</p> */}
          <p className="text-lg whitespace-pre-line lg:text-xl text-gray-700 leading-relaxed">
            {training?.description?.split(/(Global Mediation)/g).map((part, index) =>
              part === 'Global Mediation' ? (
                <a
                  key={index}
                  href="https://www.globalmediation.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {part}
                </a>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </p>
        </div>
      </section>

      {/* Expectations Section */}
      {training.expectations && training.expectations.length > 0 && (
        <section className="py-16 px-5 lg:px-[40px] bg-primary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-medium text-[#3E0065] mb-12 text-center">What can you expect?</h2>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                training.expectations.length === 4 ? 'lg:[&>*:last-child]:col-start-2' : ''
              } ${slug == 'compassionate-leadership-development-programme' ? 'lg:[&>*:last-child]:col-start-3' : ''}`}
            >
              {training.expectations.map((item, index) => (
                <div key={index} className=" rounded-3xl bg-white px-6 py-10 flex items-start ">
                  <div className="">
                    <div className="mb-5 flex items-center gap-3">
                      {/* <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px]  h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
                        {index + 1}
                      </div> */}
                      {item.title && <p className="text-[#511A75] font-medium text-[18px] lg:text-[20px] leading-[120%]">{item.title}</p>}
                    </div>

                    <p className=" text-base lg:text-lg font-normal leading-[140%]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section */}
      {training.outcomes && training.outcomes.length > 0 && (
        <section className="pt-16 px-5 lg:px-[40px]">
          <div className="max-w-4xl mx-auto">
            {slug !== 'send-mediation-course' && (
              <h2 className="text-3xl lg:text-5xl font-medium text-[#3E0065] mb-12 text-center">What will you bring back to work?</h2>
            )}
            <div className="space-y-6">
              {training.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-purple-50 p-6 rounded-xl hover:bg-purple-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3E0065] text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed flex-1">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quotes Section */}
      {training.quote && training.quote.length > 0 && (
        <section className="py-16 px-5 lg:px-[40px] bg-white">
          <div className="max-w-5xl mx-auto">
            {/* <h2 className="text-3xl lg:text-5xl font-medium text-[#3E0065] mb-12 text-center">What Participants Say</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {training.quote.map((quoteStr, index) => {
                const separator = '” - ';
                let text = quoteStr;
                let author = '';
                if (quoteStr.includes(separator)) {
                  const parts = quoteStr?.split(separator);
                  author = parts[parts.length - 1]; // Take the last part as author
                  text = parts.slice(0, -1).join(separator) + '”'; // Join the rest logic
                }

                return (
                  <div
                    key={index}
                    className="bg-white p-6 border border-[#18181b12] rounded-3xl flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path
                            d="M14.5 9V20C14.4983 21.5908 13.8657 23.116 12.7408 24.2408C11.616 25.3657 10.0908 25.9983 8.5 26C8.23478 26 7.98043 25.8946 7.79289 25.7071C7.60536 25.5196 7.5 25.2652 7.5 25C7.5 24.7348 7.60536 24.4804 7.79289 24.2929C7.98043 24.1054 8.23478 24 8.5 24C9.56087 24 10.5783 23.5786 11.3284 22.8284C12.0786 22.0783 12.5 21.0609 12.5 20V19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H12.5C13.0304 7 13.5391 7.21071 13.9142 7.58579C14.2893 7.96086 14.5 8.46957 14.5 9ZM27 7H19.5C18.9696 7 18.4609 7.21071 18.0858 7.58579C17.7107 7.96086 17.5 8.46957 17.5 9V17C17.5 17.5304 17.7107 18.0391 18.0858 18.4142C18.4609 18.7893 18.9696 19 19.5 19H27V20C27 21.0609 26.5786 22.0783 25.8284 22.8284C25.0783 23.5786 24.0609 24 23 24C22.7348 24 22.4804 24.1054 22.2929 24.2929C22.1054 24.4804 22 24.7348 22 25C22 25.2652 22.1054 25.5196 22.2929 25.7071C22.4804 25.8946 22.7348 26 23 26C24.5908 25.9983 26.116 25.3657 27.2408 24.2408C28.3657 23.116 28.9983 21.5908 29 20V9C29 8.46957 28.7893 7.96086 28.4142 7.58579C28.0391 7.21071 27.5304 7 27 7Z"
                            fill="#794D94"
                          />
                        </svg>
                      </div>
                      <p className="text-[#18181B] font-medium text-lg italic leading-[120%] mb-6">{text}</p>
                    </div>
                    {author && (
                      <div>
                        <p className="block text-sm text-[#18181B] font-medium">— {author}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {/* {training.cta && (
        <section className="py-16 px-5 lg:px-[40px] bg-gradient-to-br from-[#3E0065] to-[#5A0A8F] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl lg:text-2xl leading-relaxed mb-8">{training.cta}</p>
            <a
              href="mailto:georgie@globaltraining.uk"
              className="inline-block bg-primary text-[#fff] px-8 py-4 rounded-full font-bold text-lg  transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </section>
      )} */}

      <section className="px-5  py-[80px] lg:py-[120px]  lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {training.img &&
            training.img.map((imageSrc, idx) => (
              <div key={idx} className="col-span-1 h-[480px] relative overflow-hidden bg-gray-300 rounded-3xl">
                <Image
                  width={1200}
                  height={900}
                  alt="Grid 2"
                  src={imageSrc.src}
                  className=" absolute left-0 top-0 w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </section>
      {slug == 'send-mediation-course' ? <SendForm /> : slug == 'foundation-mediation-course' ? <FoundationForm /> : <TrainingForm />}
    </div>
  );
};

export default TrainingDetailPage;
