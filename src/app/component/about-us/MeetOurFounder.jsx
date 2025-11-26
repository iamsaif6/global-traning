'use client';
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import emma from '/public/Emma Gersch Photo 1.jpg';
import Georgie from '/public/Gorge.jpg';
import Suneta from '/public/sunita.jpeg';
import Alison from '/public/Alison Bennett Photo 2.jpg';
import Anup from '/public/Anup Ravi Photo.jpg';
import Lizzie from '/public/Lizzie .jpg';
import Ash from '/public/Ash Stent Photo 2.jpg';
import shilhoute from '/public/female-silhouette.jpg';

const memberData = [
  {
    name: 'Emma Gersch',
    role: 'Founder and Director',
    image: emma,
    bio: (
      <p>
        Emma is the Founder and Director of Global Training, and is a coach, mediator and facilitator. Emma’s background as a theatre
        director has allowed her to blend the skills and experience gained from leading rehearsal rooms to offer creative, meaningful and
        engaging people skills training for the business world.​​ <br />
        <br />
        Emma’s passion lies in unearthing people’s core purpose and value in their work, and using this to connect teams to enable them to
        work effectively and happily. Emma has designed and delivered training programmes for clients including the NHS, British Red Cross,
        Lloyds TSB, ZSL,Trafalgar Entertainment, TripAdvisor, trainee psychologists and lawyers and the education sector. Emma’s areas of
        expertise are in leadership and management training, positive communication, culture and change management, relationship building,
        and conflict resolution. ​​ <br />
        <br />
        As an academic, Emma has worked for the Higher Education Faculty at Shakespeare’s Globe, was Senior Teaching Fellow at Bath Spa
        University, and has taught at Drama Schools including Royal Central School of Speech, Lamda and E15. Emma is Artistic Director of
        Moving Stories Theatre Company, which specialises in modern staging of Shakespeare, and more recently in social justice projects,
        for example working with homeless women and women in refuge, using theatre as a transformational life tool. ​
      </p>
    ),
  },

  {
    name: 'Georgie Farwell',
    role: 'Training Coordinator',
    image: Georgie,
    bio: (
      <p>
        Georgie holds a Postgraduate Degree in Secondary Education from Goldsmiths, University of London, where she specialised in Drama.
        With over a decade of experience in education, she brings a genuine passion for communication, creativity, and human connection to
        everything she does.
        <br />
        <br />
        Before joining Emma at Global Training, Georgie built her expertise through a range of people-centred roles — most notably as Head
        of Drama and Teacher of English in London secondary schools.
        <br />
        <br />
        Her time in education gave her a deep appreciation for and understanding of the transformational power of open, courageous
        conversations — the very foundation of Global Training’s approach.
        <br />
        <br />
        As the first point of contact for Global Training, Georgie manages course coordination and client relationships, ensuring the
        journey of all Mediation Training and Commercial Workshops run smoothly from initial enquiry through delivery to completion.
        <br />
        <br />
        She also brings our role play demonstrations to life through her background in drama, using her acting skills to portray realistic
        characters in conflict and create powerful, engaging learning experiences.
      </p>
    ),
  },

  {
    name: 'Suneta Bagri',
    role: 'Head of Mediation Training',
    image: Suneta,
    bio: (
      <p>
        Suneta is a Senior Mediator and Course Leader at Global Mediation, following a 25-year career in education. She has withheld several
        senior leadership roles, including headteacher and executive headteacher, in varying contexts of schools, including Special
        Educational Needs. She has a passion and expertise in SEND, working with schools to improve provision and outcomes for children and
        young people with Special Educational Needs. <br />
        <br />
        In her leadership roles, she has applied and assisted in numerous workplace mediations as a means of creating harmonious workplace
        cultures committed to transparency, trust and honesty. She is a fellow of the Chartered College of Teaching, an award-winning
        wellbeing and leadership development coach and is qualified in reflective supervision.
        <br />
        <br />
        Suneta is a member of the College of Mediators and is an accredited SEND mediator.
      </p>
    ),
  },

  {
    name: 'Alison Bennett',
    role: 'Associate Trainer and Coach',
    image: Alison,
    bio: (
      <p>
        Alison has years of experience and an in-depth understanding of 'People in Organisations' gained from challenging roles in
        Organisational development, Human Resources & Consultancy. Before setting up her own business, her career in the Food and Healthcare
        industries exposed her to the employment challenges of both high-performing, rapidly growing commercial organisations, and those
        declining in the face of severe market pressures.
        <br />
        <br />
        Her career in HR involved her in many aspects of employee relations and often necessitated her dealing with conflict in the
        workplace. Her experience includes local and national pay bargaining and being the primary managerial interface with Trade Union
        officials seeking to represent their members. She was no stranger to industrial conflict including 'walk outs', 'strike ballots' and
        'industrial tribunals'.
        <br />
        <br />
        Alison is now an experienced, skilled & passionate Executive Coach/Mentor who enables business leaders to find the clarity,
        motivation, resilience and personal development they need to take their organisations forward in a positive way.
      </p>
    ),
  },

  {
    name: 'Anup Ravi',
    role: 'Associate Trainer and Coach',
    image: Anup,
    bio: (
      <p>
        Anup Ravi brings an adventurous spirit to conflict resolution and coaching. With a diverse background as a former Marine Engineering
        Officer, Rescue Deep-Sea Diver, Project Coordinator, Humanitarian Aid Worker, and Business Development Manager, Anup's journey has
        taken him across over 50 countries. His adaptability and cross-cultural perspective form the core of his approach to conflict
        mediation and leadership coaching. <br />
        <br />
        Anup started his career navigating oceans as a marine engineer, followed by leading humanitarian logistics in regions affected by
        natural disasters and conflicts, including South Sudan, Ethiopia and Nepal with Médecins Sans Frontières. Now based in the UK, Anup
        works as a Conflict Mediator and ICF accredited Coach, supporting individuals and teams to build courage and drive positive change.
        <br />
        <br />
        Drawing on experiences that range from managing the flooding engine room of a ship to coordinating evacuations in crisis situations,
        Anup helps clients navigate uncertainty and achieve their goals. He is passionate about helping people step outside their comfort
        zones, discover their potential, and foster growth—whether in the corporate sector, public service, or humanitarian settings.
        <br />
        <br />
        Clients consistently describe Anup as an insightful listener with a unique ability to understand challenges from multiple
        perspectives. His facilitation style is kind yet challenging, helping individuals and teams find alignment and focus. Whether it's
        delivering leadership workshops, guiding mediation sessions, or facilitating transformative team days, Anup is dedicated to
        supporting others in their professional journeys.
        <br />
        <br />
        Outside work, Anup enjoys spending time with his family and their energetic labrador. He is always ready for an adventure—whether on
        land, at sea, or helping teams achieve ambitious visions.
      </p>
    ),
  },

  {
    name: 'Lizzie Lister',
    role: 'Social Media Manager',
    image: Lizzie,
    bio: (
      <p>
        Lizzie is the creative lead on Global Training's social media, and is also our resident writer - crafting copy that captures the
        heart of our work. Occasionally, you’ll find her appearing in our role-play simulations as an actor, helping to bring learning to
        life.
        <br /> <br />
        Since graduating from the Royal Central School of Speech and Drama in 2020, she has built a career around her two great loves:
        writing and performing. With several years’ experience in digital marketing, she is keen to utilise her skills for meaningful
        causes, and to work in people-centric sectors.
        <br /> <br />
        Lizzie is the Lyricist, Book Writer & Co-Composer of ‘Wuthering Heights - The Musical’, and played Cathy Earnshaw in its recent
        workshop. She also recently played Titania/Hippolyta in ‘A Midsummer Night’s Dream’ at the Bush Theatre, in collaboration with
        charity Compass Collective, and was featured in short film ‘Immodest’ which premiered at Cannes Film Festival 2025. In tandem with
        her performing work, Lizzie currently writes for a number of clients in sectors including education, psychology, social impact and
        the arts.
        <br /> <br />A trained Listening Volunteer for Samaritans and ghostwriter for LifeBook Memoirs, Lizzie brings deep compassion to her
        creative practice. Her long-standing collaboration with Global Training reflects her belief in the power of words - and people - to
        create poignant, lasting change.
      </p>
    ),
  },

  {
    name: 'Anni Williams',
    role: 'Commercial and Business Development Manager',
    image: shilhoute,
    bio: (
      <p>
        Anni has a Drama degree from the University of the Witwatersrand and is a qualified Speech Teacher. She has over 20 years’
        experience in sales and marketing in the media arena both in South Africa and the UK. She is also a qualified Professional Organiser
        who ran her own Organising company in South Africa until her return to the UK in 2020. Her passion is in delivering solutions
        tailored to meet clients’ needs and budgets.
        <br />
        <br />
        Anni has been a member of the Global team since 2022 and is looking forward to the continued growth of our training offerings across
        various market sectors.
      </p>
    ),
  },

  {
    name: 'Ashleigh Stent',
    role: 'Fractional Marketing Director',
    image: Ash,
    bio: (
      <p>
        Ashleigh is a board-level marketing leader with 20 years’ experience. She builds the vision, the tech stack and the talent that
        fuses brand, demand and digital commerce into one revenue engine - then proves it in numbers. Ashleigh is at her best when driving
        strategy that blends creativity, data, and technology to drive real business impact.
        <br /> <br />
        Throughout her career, Ashleigh has done the full spectrum of roles through marketing and has a strong brand and digital background.
        She has scaled global teams, brokered partnerships to drive growth, and kept a tight grip on the P&L the whole way. A natural
        communicator and restless problem-solver, Ashleigh enjoys pushing boundaries and finding fresh ways to connect products with people.
      </p>
    ),
  },
];

const MeetOurFounder = () => {
  return (
    <section className="pb-[120px] px-5 lg:px-[80px]">
      <SectionTitle
        badge={'MEET OUR TEAM'}
        title={'The people behind the practice'}
        subtitle={
          'Our facilitators, coaches and actor-roleplayers bring decades of experience across numerous sectors — but more importantly, they bring compassion, creativity, and commitment to your full potential. '
        }
        center
        large
      />
      <div className={`grid mt-[80px] grid-cols-1 px-5 lg:grid-cols-2 items-center  gap-[90px] lg:max-w-[1318px] mx-auto `}>
        {memberData?.map((member, index) => (
          <div className="rounded-2xl group relative">
            <div className="bg-[#f9fafb] hidden lg:block shadow-2xl opacity-0  group-hover:opacity-100  transition-all duration-500 ease-in-out   px-8 overflow-y-scroll py-8 absolute h-full w-full left-0 z-10 rounded-2xl top-0">
              {member?.bio}
            </div>
            <div className={`h-[500px]  rounded-2xl overflow-hidden`}>
              {member.image ? (
                <Image alt={member.name} src={member.image} className="w-full h-full  object-cover object-top" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">No Image Available</div>
              )}
            </div>
            <div className="mt-3">
              <p className="font-semibold text-2xl">{member.name}</p>
              <p className=" text-lg">{member.role}</p>
            </div>
            <p className="mt-5 block lg:hidden">{member?.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurFounder;
