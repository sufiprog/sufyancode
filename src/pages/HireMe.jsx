import React from 'react';
import { FlipWords } from '../components/ui/flip-words';
import footerBgColor from '../assets/footer-bg-color.png';
import { IoMdSend } from "react-icons/io";
import { FiMail, FiLinkedin, FiCopy } from 'react-icons/fi';

const HireMe = () => {
  const email = 'sufidemo@gmail.com';
  const linkedInUrl = 'https://www.linkedin.com/in/sufidemo/';
  const words = ['clean', 'optimize', 'quality', 'efficient'];
  const [result, setResult] = React.useState("");
  const [isSending, setIsSending] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSending(true); // Set loading state to true
    const formData = new FormData(event.target);

    formData.append("access_key", "8f7853f7-9b64-4159-a815-adf9683e4553");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setIsSending(false); // Reset loading state
  };

  return (
    <div className='w-full  pt-32 pb-10 lg:pt-22 '>
      <h2 className='text-center px-[12%] text-4xl font-semibold text-gray-800 mb-8'>Hire Me!</h2>
      <div className="text-3xl mt-7 mx-auto font-normal text-center text-gray-500 max-w-[450px]">
        SufiProg writes
        <span className='font-semibold playwrite text-blue-500'>
          <FlipWords words={words} />
        </span>
        code for their clients with dedication.
      </div>
      <div className='flex  mt-12 mb-4flex-row items-center gap-4 md:gap-7 justify-center mx-auto'>
        {/* Email Contact Card */}
        <div className='flex items-center justify-center flex-col bg-gray-100 shadow-xl px-8 py-10 rounded-lg transform transition duration-500 hover:scale-105'>
          <FiMail className='text-4xl text-purple-500 mb-4' />
          <h4 className='text-gray-800 font-medium text-xl mb-2'>Contact via Email</h4>
          <p className='text-sm text-gray-600 mb-4'>{email}</p>
          <button
            onClick={copyToClipboard}
            className='flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-purple-600'
          >
            <FiCopy />
            Copy Email
          </button>
        </div>
        {/* LinkedIn Contact Card */}
        <div className='flex items-center justify-center flex-col bg-gray-100 shadow-xl px-8 py-10 rounded-lg transform transition duration-500 hover:scale-105'>
          <FiLinkedin className='text-4xl text-blue-500 mb-4' />
          <h4 className='text-gray-800 font-medium text-xl mb-2'>Contact via LinkedIn</h4>
          <p className='text-sm text-gray-600 mb-4'>linkedin.com/in/sufiprog</p>
          <button
            onClick={() => window.open(linkedInUrl, '_blank')}
            className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-600'
          >
            <FiLinkedin />
            View Profile
          </button>
        </div>
      </div>
      <div  className=' bg-white mt-16 w-full px-[12%] py-10 bg-no-repeat bg-[length:90%_auto] bg-center' style={{ backgroundImage: `url(${footerBgColor})` }}>
        <h2 className='text-center text-4xl'>Get a quote</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Enter your project details below and we will get back to you with a quote.</p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
            <input required type="text" name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' placeholder='Enter full name' />
            <input required type="email" name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' placeholder='Enter your email' />
            <input required type="text" name='project-name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' placeholder='Enter project name' />
            <input required type="number" name='phone' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' placeholder='Enter your phone number' />
          </div>
          <textarea required rows={6} name='message' placeholder='Enter your instructions briefly 😄 ...' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
          <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type="submit" disabled={isSending}>
            Send now <IoMdSend />
          </button>
        </form>
        <div className='text-center mt-4'>
          {isSending ? (
            <span className='text-center text-green-800'>{result}</span>
          ) : (
            result && (
              <span className={`text-center ${result === "Message sent!" ? 'text-green-600' : 'text-green-600 hidden'}`}>
                {result}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HireMe;