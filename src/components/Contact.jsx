import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="lg:px-12 px-4">
      <div className="mb-10 text-center">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          Get In Touch
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Contact me
        </h2>
        <p className="mt-5">
          I am very fun loving guy. Dont hesitate to contact me if you have work
          for me. I am a quick learner and want to give back to the community
          once learnt. So, please approach me and give me a chance.
        </p>
      </div>
      <div className="md:w-2/3 mx-auto mb-10">
        <div className="flex ">
          My Contact Number :
          <a href="">
            <FaPhone />
          </a>
          7007067341
        </div>
        <div className="flex">
          My Github Account:
          <FaGithub />
          https://github.com/youngwolf0412?tab=repositories
        </div>
        <div className="flex">
          My Linkedin Account :
          <FaLinkedin />
          https://www.linkedin.com/in/brijesh-yadav-1647a2188/
        </div>
      </div>
    </div>
  );
};

export default Contact;
