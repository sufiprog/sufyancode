import React from 'react';
import footerBgColor from '../assets/footer-bg-color.png';
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isSending, setIsSending] = React.useState(false); // Add loading state

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
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center' style={{ backgroundImage: `url(${footerBgColor})` }}>
      <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
      <h2 className='text-center text-5xl'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>If you have any questions, comments, or feedback, please leave your query below!</p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <input required type="text" name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' placeholder='Enter your name' />
          <input required type="email" name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' placeholder='Enter your email' />
        </div>
        <textarea required rows={6} name='message' placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
        <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type="submit" disabled={isSending}>
          Send now <IoMdSend />
        </button>
      </form>
      <div className='text-center mt-4'>
      {isSending ? (
        <span className='text-center text-green-800'>{result}</span> 
      ) : (
        result && (
          <span className={`text-center ${result === "Message sent!🤗" ? 'text-green-600' : 'text-green-600 hidden'}`}>
            {result} 
          </span>
        )
      )}
      </div>
    </div>
  );
}

export default Contact;
