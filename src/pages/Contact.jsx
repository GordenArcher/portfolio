
const Contact = () => {
  return (
    <div className="w-full h-full !p-2" data-aos="fade-up">
        <section className="max-sm:!p-1 !p-10 relative flex flex-col gap[20px]">
            <div className="relative !p-2 !mb-1" data-aos="fade-up">
                <span className="text-slate-700 text-lg !font-bold">Contact</span>
            </div>

            <div className="flex flex-row !p-1 gap-[20px] max-sm:flex-col justify-between">
                <div className="w-full h-full relative">
                    <div className="w-full flex flex-col gap-4 space-x-1">
                        <div className="text-[#b05cff] max-md:text-2xl text-3xl !font-semibold" data-aos="fade-up">
                            Have Questions or a Project in Mind? Feel Free to Reach Out via Email!
                        </div>

                        <div className="full flex flex-col gap-1.5">
                            <div className="text-[1rem]" data-aos="fade-up">
                                <span>Prefer texting instead? No worries! Feel free to reach out, and I&apos;ll get back to you as soon as possible.</span>
                            </div>

                            <div className="!mt-5 relative">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex items-center flex-row gap-[20px]" data-aos="fade-up">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill text-[#b05cff] !font-extrabold" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                            </svg>
                                        <span className="!font-extrabold text-slate-700">0546214293 / 0208729505 </span>
                                    </div>

                                    <div className="flex items-center flex-row gap-[20px]" data-aos="fade-up">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo text-[#b05cff] !font-extrabold" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                                            </svg>
                                        <span className="!font-extrabold text-slate-700">Accra - Ghana </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full relative">
                    <div className="!p-3 max-sm:!p-0" data-aos="fade-up">
                        <section className="w-full h-full shadow-2xl inset-shadow-white shadow-[#ccc] max-sm:!p-0 !p-5">
                            <div className="container mx-auto">
                                <div className="mx-auto">
                                    <div className="w-full mx-auto !px-8 !py-6">
                                        <form className="w-full flex flex-col gap-[20px]">
                                            <div className="!mb-4">
                                                <label className="block !font-bold text-slate-800 !mb-1" htmlFor="name">Your Name</label>
                                                <input
                                                    className="w-full h-[55px] !px-4 !py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b05cff] transition duration-300"
                                                    placeholder="Enter your name"
                                                    type="text"
                                                />
                                            </div>

                                            <div className="!mb-4">
                                                <label className="block !font-bold text-slate-800 !mb-1" htmlFor="email">Your Email</label>
                                                <input
                                                    className="w-full h-[55px] !px-4 !py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b05cff] transition duration-300"
                                                    placeholder="Enter your email"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                />
                                            </div>

                                            <div className="!mb-4">
                                                <label className="block !font-bold text-slate-800 !mb-1" htmlFor="subject">Subject</label>
                                                <input
                                                    className="w-full h-[55px] !px-4 !py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b05cff] transition duration-300"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    id="subject"
                                                    type="text"
                                                />
                                            </div>

                                            <div className="!mb-4">
                                                <label className="block text-slate-800 !font-bold !mb-1" htmlFor="message">Your Message</label>
                                                <textarea
                                                    className="w-full resize-none  max-sm:h-[155px] h-[205px] !px-4 !py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b05cff] transition duration-300"
                                                    rows="4"
                                                    placeholder="Enter your message"
                                                    name="message"
                                                    id="message"
                                                ></textarea>
                                            </div>

                                            <div>
                                                <button className="text-xl w-32 h-12 rounded bg-[#b05cff] text-white cursor-pointer relative overflow-hidden group z-10 hover:text-white duration-1000">
                                                    <span  className="absolute bg-slate-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                                                    <span className="absolute bg-slate-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                                                    <span className="relative">Send</span>
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact