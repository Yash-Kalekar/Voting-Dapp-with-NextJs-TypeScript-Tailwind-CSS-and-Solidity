import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="w-full h-[192px] py-[37px]
      rounded-t-[24px] flex flex-col items-center justify-center
      bg-white bg-opacity-20 px-5"
    >
      <div className="flex justify-center items-center space-x-4">
        <a href="https://www.linkedin.com/in/yash-kalekar-8bb736284/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={27} />
        </a>
        <a href="https://github.com/Yash-Kalekar" target="_blank" rel="noopener noreferrer">
          <FaGithub size={27} />
        </a>
        <a href="https://x.com/yashkalekar19?t=g_Y7PfpSqba3b1UF2PkAeQ&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={27} />
        </a>
      </div>

      <hr className="w-full sm:w-[450px] border-t border-gray-400 mt-3" />

      <p className="text-sm font-[500px] mt-5">©️{new Date().getFullYear()}</p>
      <p className="text-sm font-[500px]">With Love ❤️ by Yash Kalekar</p>
    </footer>
  )
}

export default Footer
