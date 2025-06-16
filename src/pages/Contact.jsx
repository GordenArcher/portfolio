import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader } from "lucide-react";

const Contact = () => {

    const email_templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
    const email_serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID
    const email_publicID = import.meta.env.VITE_EMAIL_PUBLIC_ID

  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
        email_serviceID,
        email_templateID,
        formRef.current,
        email_publicID
      ).then(() => {
          setSuccess("Your message was sent successfully!");
          setLoading(false);
          formRef.current.reset();
          setTimeout(() => setSuccess(null), 4000);
        },(error) => {
          setSuccess("Something went wrong. Try again.");
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <div className="space-x-1.5">
      <div className="relative !mb-7">
        <span className="text-4xl">✉️</span>
        <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-primary to-secondary !font-black text-gray-200">
          Contact Me
        </h1>
        <p className="text-sm lg:text-base font-normal text-secondary !mb-10 max-w-xl text-gray-200">
          Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.
        </p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="!mt-9">
        <div className="flex flex-col gap-3.5">
          <div className="relative">
            <div className="flex items-center gap-2.5 w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-slate-600 focus:outline-none focus:ring-2 focus:ring-black !px-3 !py-3 rounded-md text-sm text-gray-100 w-full"
                />
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  className="bg-slate-600 focus:outline-none focus:ring-2 focus:ring-black !px-3 !py-3 rounded-md text-sm text-gray-100 w-full"
                />
              </div>

              <input type="hidden" name="time" value={new Date().toLocaleString()} />
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              required
              placeholder="Your Message"
              id="user_message"
              rows="10"
              className="bg-slate-600 focus:outline-none resize-none focus:ring-2 focus:ring-black !px-2 !mt-4 !py-2 rounded-md text-sm text-gray-100 w-full"
            ></textarea>
          </div>

          {success && (
            <p className="text-green-400 text-sm mt-2 transition-all duration-300">
              {success}
            </p>
          )}

          <div className="relative">
            <button
              type="submit"
              title="Send Mail"
              disabled={loading}
              className="w-full !px-3 !py-3 !mt-4 bg-slate-950 rounded-md cursor-pointer !font-bold text-neutral-100"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                    <Loader size={16} className="animate-spin" />
                    <span>Sending...</span>
                </div>
              ) : "Send"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
