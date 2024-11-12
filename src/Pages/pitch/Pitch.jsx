import React from 'react';
import Calendar from 'react-calendar';

const Pitch = () => {
  return (
    <div>
   <div className="md:flex ml-5">
  {/* Header Section */}
  <div className="md:w-3/6">
    <div className="flex bg-blue-50 rounded-3xl h-12 mt-10 md:ml-56 md:w-64  ">
      <div className="bg-blue-500 cursor-pointer w-12 md:w-16 h-6 rounded-lg ml-6 mt-4 flex items-center justify-center ">
        <h1 className="text-white text-sm">New</h1>
      </div>
      <h1 className="md:ml-9 ml-36 mt-4 text-gray-600 font-semibold md:text-sm">Cutting Edge Stuff</h1>
    </div>
    <div className="relative md:w-[670px]  mt-8 z-0 md:left-36">
      <h1 className="text-blue-600 font-bold md:text-4xl text-2xl">
        Do More than Just a Sales Pitch
      </h1>
      <p className="md:text-2xl font-semibold font-serif mt-2 text-gray-700">
        Understand the personality of your prospects globally and personalize your pitch to a default win.
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center md:w-1/2 mt-10 md:mt-0 md:mr-56">
    <img
      className="md:w-[50rem] md:h-[40rem] w-[20rem] h-[20rem]"
      src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fpersonality_hHm8XQCyf3.png%3Ftr%3Doptimized&w=1080&q=75"
      alt="Cutting Edge Image"
    />
  </div>
</div>

      {/* Features section */}
      <div className='absolute top-[185rem] left-[25rem] w-auto hidden md:block '>
  {[
    {
      title: "Curated database",
      description1: "Access millions of",
      boldText1: "verified Indian",
      description2: "Business and",
      boldText2: "their Decision makers",
      class:" relative left-2"
    },
    {
      title: "Targeted lead generation",
      description1: "Identifying",
      boldText1: "key decision-makers",
      description2: "Phone Numbers with",
      boldText2: "advanced filters",
      class:" right-24 relative"

    },
    {
      title: "Accurate & up-to-date data",
      description1: "Get real-time information on company",
      boldText1: "size,",
      description2: "industry, revenue, and", 
      boldText2: "more.",
      class:" relative right-48"
    },
  ].map((item, index) => (
    <div
      key={index}
      className={`border-2 border-blue-600 rounded-xl mt-10  w-[40rem] h-32 flex bg-white ${item.class}`}
      // style={{ left: index * 12 + "rem" }}
    >
      <div className="ml-16">
        <h1 className="text-blue-600 font-bold mt-4 font-serif text-xl">{item.title}</h1>
        <p className="text-lg font-serif">
          {item.description1} <span className="font-semibold">{item.boldText1}</span>
        </p>
        <p className="text-lg font-serif">
          {item.description2 } <span className="font-semibold">{item.boldText2}</span>
        </p>
      </div>
      <img
        className="h-24 w-24 mt-6 ml-24"
        src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fcomprehensive_gXiMpKI5Hx.png%3Ftr%3Doptimized&w=256&q=75"
        alt=""
      />
    </div>
  ))}
</div>


      {/* Call to Action section */}
      <div className="bg-pink-100 w-full py-20  bottom-72 relative -z-10 md:py-28 h-[66rem]"></div>
        <div className=" flex flex-col md:flex-row items-center justify-center  w-[22rem] border-2 md:w-[77rem] relative bottom-[30rem] border-red-600 rounded-xl bg-white mx-auto px-4  md:h-[35rem] h-[42rem] ">
          <div className="md:w-1/2 mb-3 ">
            <h1 className="font-bold text-2xl md:text-4xl">zPersonality</h1>
            <p className="text-blue-600 font-semibold text-lg md:text-2xl mt-3">
              Foster everlasting connections on the first call
            </p>
            <div className="flex md:block mt-10 gap-6 md:space-y-7">
              {[
                { title: "Personality Intel", description: "Get personality insights of anyone with our LinkedIn extension." },
                { title: "Calendar Intel", description: "Know what to say before the meeting and prepare accordingly." },
                { title: "Buyer Committee", description: "Learn how to convince people without trial and error." },
              ].map((item, idx) => (
                <div key={idx}>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="bg-blue-200 rounded-xl w-3/4 p-5">
              <img
                className="w-full max-w-[320px] md:ml-20"
                src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Flp%2Fzs%2Fpr_home%2Fbuyer_commitee_wmWR5bwjOA.png%3Ftr%3Doptimized&w=640&q=75"
                alt="Zintlr Visual"
              />
            </div>
            <button className="bg-black text-white rounded-2xl py-3 px-6 mt-8   text-lg">Try Now</button>
          </div>
        </div>
      

      {/* Demo Booking Section */}
      <div className="bg-blue-100 py-20 relative bottom-48 mb:mt-32  mt-8">
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-4xl">Book a Demo with Us!</h1>
        </div>
        <div className="bg-white max-w-screen-md mx-auto flex flex-col md:flex-row items-center p-10 rounded-xl mt-10 md:h-[35rem] border-2 border-red-500">
          <div className="text-center md:text-left md:space-y-9">
            <img
              className="w-16 md:w-20 mx-auto md:mx-0"
              src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/17854248/7c4cec75.png"
              alt="Zintlr Logo"
            />
            <div className='border-y-1'></div>
            <p className="text-lg mt-">Zintlr Team</p>
            <h1 className="font-bold text-2xl">30-Minute Meeting</h1>
            <h1 className='mt-3 text-gray-600'>30 minute</h1>
            <p className="mt-3 text-gray-600">Web conferencing details provided upon confirmation.</p>
          </div>
          <div className="mt-10 md:mt-0 md:ml-10">
            <h2 className="text-center font-semibold text-xl">Select a Day</h2>
            <Calendar className="mt-4" />
          </div>
        </div>
      </div>

      {/* Final Call to Action Section */}
      <div className="bg-yellow py-20 px-5 mt-16 ">
        <div className="max-w-screen-lg mx-auto text-center bg-white md:h-[42rem] h-[45rem] rounded-xl   ">
          <h1 className="font-bold text-2xl md:text-4xl pt-16">
            Be Among the First to Experience the Power of Zintlr
          </h1>
          <p className="text-lg md:text-2xl text-blue-700 mt-4">
            Join the waitlist now and get early access to the platform.
          </p>
          <button className="bg-black text-white font-semibold text-lg py-2 px-10 rounded-lg mt-6">
            Join the Waitlist
          </button>

          <div className='md:max-w-screen-sm   mx-auto text-center bg-blue-50 md:h-72 h-72 rounded-xl mt-20  '>
          <h1 className='font-bold text-xl md:text-2xl md:pt-10 pt-6'>We appreciate your time on our website. Please accept
          </h1>
          <p className='font-bold text-xl md:text-2xl md:pt-1'> this handbook as a token of our thanks</p>
          <p className='text-lg md:text-2xl text-blue-700 mt-4'>Kindly provide your email address where we can send the handbook.</p>
          <button className="bg-blue-400 text-white font-semibold text-lg py-2 px-10 rounded-lg mt-6">
            Download Handbook
          </button>
      </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Pitch;
