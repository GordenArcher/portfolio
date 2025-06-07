
const Contact = () => {
    return (
        <div className="space-x-1.5">
            <div className="relative !mb-7">
                <span className='text-4xl'>✉️</span>
                <h1 className='text-base md:text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-primary to-secondary !font-black text-gray-200'>Contact Me</h1>
                <p className="text-sm lg:text-base font-normal text-secondary !mb-10 max-w-xl text-gray-200">
                    Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.
                </p>
            </div>

            <div className="!mt-9">
                <div className="flex flex-col gap-3.5">
                    <div className="relative">
                        <div className="flex items-center gap-2.5 w-full">
                            <div className="relative w-full">
                                <input type="text" aria-autocomplete="false" placeholder="Your name" className="bg-slate-600 focus:outline-none focus:ring-2 focus:ring-black !px-3 !py-3 rounded-md text-sm text-gray-100 w-full" />
                            </div>

                            <div className="relative w-full">
                                <input type="email" aria-autocomplete="false" placeholder="Your Email Address" className="bg-slate-600 focus:outline-none focus:ring-2 focus:ring-black !px-3 !py-3 rounded-md text-sm text-gray-100 w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <textarea placeholder="Your Message" name="message" id="user_message" cols="100" rows="10" className="bg-slate-600 focus:outline-none resize-none focus:ring-2 focus:ring-black !px-2 !mt-4 !py-2 rounded-md text-sm text-gray-100 w-full"></textarea>
                    </div>

                    <div className="relative">
                        <button type="submit" title="send message" id="send_message" aria-details="sending user message and info" className="w-full !px-3 !py-3 !mt-4 bg-slate-950 rounded-md cursor-pointer !font-bold text-neutral-100">Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact