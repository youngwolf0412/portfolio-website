import proPic from "../assets/Infosys.png";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2">
          <img src={proPic} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            My Work
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            My Experience
          </h2>
          <p className="mt-8 md:pr-8 mb-8">
            INFOSYS | Senior Systems Engineer( Used ReactJS to create function
            based components) August 2021 - Present | Noida
            <br /> <br />
            Worked on developing new features and Provided production support
            for Players and coach portal for International Tennis Tournaments
            (Australia Open 2023 and Roland Garros 2022 and 2023 ). <br /> •
            Build functional based reusable components by using various type of
            hooks and developed fully dynamic experience for international
            tennis players and coaches.
            <br /> • Followed industry coding standard and proper atomic file
            structure. <br /> • Refactored and optimised existing code by using
            memo, useCallback and context to avoid unnecessary rendering.
            <br /> • Used SASS or SCSS to style the feature leads to less and
            optimised style implementation.
            <br /> • Used Jest for unit test cases
            <br /> • Worked with MongoDB using mongoose.
          </p>
          <button className="btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
