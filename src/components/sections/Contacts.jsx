import emailjs from "emailjs-com"
import { useState } from "react";
import useThemeStore from '../../store/themeStore'; // Importa el store

export const Contact = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })

  const SERVICE_ID = "service_tc2tywh";
  const TEMPLATE_ID = "template_oaemzzk";
  const PUBLIC_KEY = "HC37JmLslnz-LGjKW";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(SERVICE_ID,TEMPLATE_ID,e.target, PUBLIC_KEY)
    .then((result) => {
      alert("Messeage Sent!");
      setFormData({name:"",email:"",message:""});
    })
    .catch(() => alert("Oops! Something went wrong. Please try again."))
  };

  const { darkMode } = useThemeStore(); // Obtiene el estado darkMode del store

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            className={`w-full rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ${
              darkMode
                ? "bg-white/5 border border-white/10 text-white"
                : "bg-gray-100 border border-gray-300 text-gray-800"
            }`}
            placeholder="Name ..."
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            className={`w-full rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ${
              darkMode
                ? "bg-white/5 border border-white/10 text-white"
                : "bg-gray-100 border border-gray-300 text-gray-800"
            }`}
            placeholder="example@gmail.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            className={`w-full rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ${
              darkMode
                ? "bg-white/5 border border-white/10 text-white"
                : "bg-gray-100 border border-gray-300 text-gray-800"
            }`}
            placeholder="Your Message ..."
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-7 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0-0-15px-rgba(59,130,246,0.4)]">
            Send Message
        </button>
        </form>
      </div>
    </section>
  );
};

export default Contact