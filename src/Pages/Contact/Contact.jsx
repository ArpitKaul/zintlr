import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='bg-[#0d1c28] w-full md:h-[42rem] md:pt-28 pt-28 h-[53rem]'>
                <div className='md:flex '>
                    <div className='md:w-96 md:mt-32 md:ml-28 space-y-6 ml-7'>
                        <h1 className='md:text-5xl font-semibold font-serif text-white text-4xl'>
                            Connect With <br />
                            <span className='text-yellow'>Team Zintlr</span>
                        </h1>
                        <p className='text-white'>
                            If you need assistance with a general or specific department query, Zintlr is here to help. You can rely on us for all your inquiries.
                        </p>
                    </div>
                    <div className='md:ml-[30rem] mt-12 mr-9'>
                        <img className='w-96 h-96 ' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcontact%2Fzintlr-contact-us-overview-075_jCEKe7C7_.png%3Ftr%3Doptimized&w=640&q=75" alt="Contact Us Overview" />
                    </div>
                </div>
            </div>

            <div className='md:flex ml-16'>
                <div className='md:absolute md:ml-28 '>
                    <img className='w-2/4 h-2/4 md:block hidden' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fcontact%2Fzintlr-contact-us-img-077_GClxMkXYSJ.png%3Ftr%3Doptimized&w=384&q=75" alt="Zintlr Contact" />
                </div>

                <div className='bg-yellow md:w-[66rem] md:h-[45rem] md:pt-5 rounded-xl h-[69rem] mt-16 md:ml-56 w-56'>
                    <div className='bg-white md:w-[63rem] md:ml-7 rounded-xl md:h-[42rem]'>
                        <div className='md:flex md:ml-20 '>
                            <div className='w-56'>
                                <h2 className='text-3xl md:ml-5 md:mt-6 w-56'>Write to Zintlr!</h2>
                                <form className='md:mt-20'>
                                    <div>
                                        <label className="text-2xl" htmlFor='name'>
                                            Your Full Name 
                                        </label>
                                        <input type="text" className='md:w-full border-b border-black py-6 focus:outline-none focus:border-black' placeholder="Your Full Name"/>
                                    </div>
                                    <div>
                                        <label className="text-2xl" htmlFor='email'>
                                            Your Email 
                                        </label>
                                        <input type="email" className='md:w-full mr-9 border-b border-black  py-6 focus:outline-none focus:border-black' placeholder="Your Email"/>
                                    </div>
                                    <div>
                                        <label className="text-2xl pt-6" htmlFor='message'>
                                            Your Message
                                        </label>
                                        <input type="text" className='md:w-full border-b border-black py-6 focus:outline-none focus:border-black' placeholder="Your Message" />
                                    </div>
                                </form>  
                                <div className='w-56'>
                                    <button className='bg-black text-white py-2 px-6 rounded-full w-56 text-lg mt-9 focus:outline-none focus:ring-2 focus:ring-blue-600 pr-9'>
                                        Contact Us
                                    </button>
                                </div> 
                            </div>
                            <div className='w-56 md:ml-56 mt-8  md:w-72  '>
                                <h2 className='font-semibold text-xl'>Email Us At</h2>
                                <p className='text-gray-600'>hey@zintlr.com</p>
                                <h2 className='mt-5 text-xl font-semibold'>Call us on</h2>
                                <p className='text-gray-600'>+91 - 8310760719</p>
                                <h2 className='mt-9 text-xl font-semibold'>Meet Us Directly</h2>
                                <p className='text-gray-600 mt-2'>ZINTLR PRIVATE LIMITED
                                    3rd Floor, No. 38, GKR Sapthagiri Vaishtadhama, 12th Cross, off Central Bureau of Investigation Road, Lakshmayya Layout, Vishveshvaraiah Nagar, Ganganagar, Bengaluru, Karnataka 560032
                                </p>
                                <div className='mr-9 w-9'>
                                    <iframe className='rounded-2xl mt-2  w-48 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1276558485342!2d77.58440567465195!3d13.027541787293012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17991e7d1d03%3A0x84b11f97e1e1b2fa!2sZintlr%20Private%20Limited!5e0!3m2!1sen!2sin!4v1729405222152!5m2!1sen!2sin" width="300" height="150" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="Zintlr Location"></iframe>
                                </div>
                                <h2 className='text-xl font-semibold mt-4'>Connect with us and follow us on our social media pages.</h2>
                                <div className='md:mt-6 flex cursor-pointer mt-10 md:ml-16'>
                                <a href="https://twitter.com/ZintlrHQ">
                                 <img className="w-9 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgCeVF_mpx6Wd50ZWOZVn-nrOl-NJ9SYd-A&s" alt="Twitter" />
                                 </a>
                                 <a href="https://www.linkedin.com/company/zintlr/">
                                 <img className="w-9 rounded-xl" src="https://banner2.cleanpng.com/20180619/kyf/aa668hp3e.webp" alt="LinkedIn" />
                                 </a>
                                 <a href="https://m.facebook.com/100089859531116/">
                                 <img className="w-9 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43HQpKFjAd-Ka_tLRdM37RKIsJMpEmh7Wgw&s" alt="Facebook" />
                                 </a>
                                <a href="https://www.instagram.com/zintlrhq/">
                                <img className="w-9 rounded-xl" src="https://w7.pngwing.com/pngs/877/705/png-transparent-instagram-photo-picture-social-brands-and-logos-icon.png" alt="Instagram" />
                                 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-32'></div>
        </div>
    );
};

export default Contact;
