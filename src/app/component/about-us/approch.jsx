import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const Approch = () => {
  return (
    <section className="py-[120px] px-[40px]">
      <SectionTitle badge={'OUR APPROACH'} title={'Experiential Learning that Lasts'} />
      <p className="mt-8 max-w-[800px]">
        Our training blends theatre-based techniques, live coaching, real-time facilitation and tailored leadership frameworks — always
        balancing structure with creativity, compassion with challenge, theory with real-world action. Learning should be felt, not forced.
        <br /> <br />
        At Global Training, we design every experience to be human, grounded and transformational.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="rounded-3xl p-8">
          <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center gap-6">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              1
            </span>
            <h4 className="text-secondary text-2xl font-medium">Immersive Learning</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-lg">Training is hands-on, ensuring participants learn by doing.</p>
        </div>

        <div className="rounded-3xl p-8">
          <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center gap-6">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              2
            </span>
            <h4 className="text-secondary text-2xl font-medium">Real-World Application</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-lg">
            Sessions are tailored to address practical challenges faced by leaders and teams.
          </p>
        </div>

        <div className="rounded-3xl p-8">
          <div className="flex mb-6 pb-6 border-b border-[#D1D1D6] items-center gap-6">
            <span className="w-10  rounded-[8px] h-10 bg-secondary flex items-center justify-center text-[#FCFCFD] font-medium text-2xl">
              3
            </span>
            <h4 className="text-secondary text-2xl font-medium">Inspiring Environments</h4>
          </div>

          <p className="text-[#6E7381] font-normal text-lg">
            Whether in-person or virtual, our training spaces encourage creativity and focus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approch;
