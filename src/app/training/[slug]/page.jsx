import React from 'react';
import { trainingData } from '@/data/trainingData';
import { notFound } from 'next/navigation';
import Header from '@/app/component/courageous-conversations-training/Header';
import Video from '@/app/component/courageous-conversations-training/Video';
import Form from '@/app/component/services/Form';
import SendForm from '@/app/component/services/SendForm';
import FoundationForm from '@/app/component/services/FoundationForm';
import TrainingForm from '@/app/component/services/TrainingForm';

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
      <Header cover={training?.cover} title={training.title} />
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
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">{training.description}</p>
        </div>
      </section>

      {/* Expectations Section */}
      {training.expectations && training.expectations.length > 0 && (
        <section className="py-16 px-5 lg:px-[40px] bg-primary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-medium text-[#3E0065] mb-12 text-center">What Can You Expect?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {training.expectations.map((item, index) => (
                <div className=" rounded-3xl bg-white p-6 flex items-center min-h-[200px] lg:min-h-[300px]">
                  <div className="">
                    <div className="mb-5 flex items-center gap-3">
                      {/* <div className="w-12 flex-shrink-0 text-secondary text-3xl font-semibold flex items-center justify-center lg:w-[60px]  h-12 lg:h-[60px] bg-[#511A7533] rounded-lg">
                        {index + 1}
                      </div> */}
                      <p className="text-[#511A75] font-medium text-[18px] lg:text-[20px] leading-[120%]">{item.title}</p>
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
            <h2 className="text-3xl lg:text-5xl font-medium text-[#3E0065] mb-12 text-center">What Will You Bring Back to Work?</h2>
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
      <div className="grid grid-cols-1  md:grid-cols-2 max-w-7xl mx-auto gap-8 py-10 my-10  px-5 lg:px-[40px] ">
        {training.img &&
          training.img.map((imageSrc, idx) => (
            <div key={idx} className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
              <img src={imageSrc.src} alt={`${training.title} image ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
      </div>
      {slug == 'send-mediation-course' ? <SendForm /> : slug == 'foundation-mediation-course' ? <FoundationForm /> : <TrainingForm />}
    </div>
  );
};

export default TrainingDetailPage;
