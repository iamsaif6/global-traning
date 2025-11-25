import React from 'react';
import { trainingData } from '@/data/trainingData';
import { notFound } from 'next/navigation';
import Header from '@/app/component/courageous-conversations-training/Header';
import Video from '@/app/component/courageous-conversations-training/Video';

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
      <Header title={training.title} />
      <Video />

      {/* Intro Section */}
      {training.intro && (
        <section className="py-16 mt-16 md:mt-0 px-5 lg:px-[40px] bg-gray-50">
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
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3E0065]"
                >
                  <h3 className="text-xl font-bold text-[#3E0065] mb-4">{item.title}</h3>
                  {item.description && <p className="text-gray-700 leading-relaxed">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section */}
      {training.outcomes && training.outcomes.length > 0 && (
        <section className="py-16 px-5 lg:px-[40px]">
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
      {training.cta && (
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
      )}
    </div>
  );
};

export default TrainingDetailPage;
