import Accordian, { AccordianItem } from "../../components/Accordian";
import designedImage from "../../assets/hope.gif";
import HoverImageComponent from "../../components/HoverImageComponent";
import workExperiences from "../../data/workExperience";

function Work() {
  return (
    <main
      id="work"
      className="bg-customBlack mt-20 pb-2 relative overflow-x-hidden"
    >
      <div className="introwork w-5/6 mx-auto pt-5">
        <div className="grid xl:grid-cols-2 sm:py-5 py-10 ">
          <span className=" sm:text-7xl text-5xl text-customExperience font-black">
            Experiences
          </span>
          <span className=" items-center justify-center sm:text-justify font-semibold text-md text-customUl">
            <HoverImageComponent
              imageSrc={designedImage}
              alt="Designed Image"
              className="inline-block"
              text="Hope is a good thing..."
            />{" "}
            it fuels my perseverance as I approach every project as a learning
            adventure. These experiences ignited my curiosity, transforming the
            challenge into an opportunity for growth and sharpening my skills.
          </span>
        </div>
      </div>
      <hr className="w-5/6 mx-auto border-teal-500" />

      <div className="w-fit flex flex-col items-center justify-center mx-auto">
        <Accordian className="parent flex flex-col items-center justify-center">
          {workExperiences.map((experience) => (
            <AccordianItem
              key={experience.id}
              value={experience.id}
              trigger={experience.company}
              subText={experience.role}
              dateText={experience.period}
              additionalContent={
                <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-3xl bg-teal-50 text-customBlack font-black whitespace-nowrap mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              }
            >
              <ul className="break-words">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </AccordianItem>
          ))}
        </Accordian>
      </div>
    </main>
  );
}

export default Work;
