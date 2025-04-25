import { motion } from "framer-motion";
import { MapPin, Linkedin ,Github} from "lucide-react";
import { logo, menu, close } from "../../assets";









const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      className="bg-transparent text-white py-10 mt-24 border-t border-zinc-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center px-6">
        {/* Main Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-300">
          {/* Location */}  {/* Smiley Icon */}
          <motion.img
            src={logo}
            alt="Smiley Icon"
            className="w-10 h-10"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-yellow-400" />
            <span>Toronto, ON</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-2">
            <Linkedin size={18} className="text-yellow-400" />
            <a
              href="https://www.linkedin.com/in/dhwani-sheth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              LinkedIn
            </a>
          </div>

        

          {/* GitHub */}
          <div className="flex items-center gap-2">
            <Github size={18} className="text-yellow-400" />
            <a
              href="https://github.com/dhwanisheth" // replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              GitHub
            </a>
          </div>

          {/* Quote */}
          <span className="italic text-zinc-400 text-center">
            “Code is like humor. When you have to explain it, it’s bad.”
          </span>
        </div>

        {/* Bottom - Copyright */}
        <p className="text-sm text-zinc-500 text-center">
          © {new Date().getFullYear()} Dhwani Sheth. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

