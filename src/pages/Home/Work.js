import Accordian, { AccordianItem } from "../../components/Accordian";
import designedImage from "../../assets/hope.gif";
import HoverImageComponent from "../../components/HoverImageComponent";

function Work() {
  return (
    <main id="work" className="bg-customBlack mt-20 pb-2 relative">
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
      <div className="w-fit flex flex-col items-center justify-center">
        <div className="w-fit flex flex-col items-center justify-center">
          <Accordian className="parent flex flex-col items-center justify-center">
            {/* experience1 */}
            <AccordianItem
              value="1"
              trigger="MakeitMVP"
              subText="Full Stack Developer"
              dateText="June 24 - August 24"
              additionalContent={
                <div className="flex flex-row gap-1 sm:gap-4 justify-center items-center">
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    React
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Sass
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    ChatGPT API
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Firebase
                  </span>
                </div>
              }
            >
              <ul>
                <li>
                  Implemented AI-driven user matching using ChatGPT API for
                  personalized accountability partnerships based on user profile
                </li>
                <li>
                  Engineered a Python backend integrated with Firebase for
                  secure data storage, supporting robust goal tracking
                </li>
                <li>
                  Developed a Python backend and used Firebase for secure data
                  storage, supporting goal tracking
                </li>
                <li>
                  Integrated scalable AI features within the platform, improving
                  performance and user satisfaction
                </li>
              </ul>
            </AccordianItem>
            {/* experience2 */}
            <AccordianItem
              value="2"
              trigger="Amerifab International Inc"
              subText="Full Stack developer"
              dateText="August 23-December 23"
              additionalContent={
                <div className="flex flex-row gap-0 sm:gap-4 justify-center items-center">
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Python
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    React
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Aws
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Postgres
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Docker
                  </span>
                </div>
              }
            >
              <ul>
                <li>
                  Led a transformative project with a five-member team to
                  enhance production floor efficiency
                </li>
                <li>
                  Oversaw the design and architecture of a scalable application
                  integrating various AWS services
                </li>
                <li>
                  Improved operation efficiency by 200% by automating data
                  retrieval from MyWay with Python scripts, SQS triggers
                </li>
                <li>
                  Optimized development workflow with GitHub Actions for rapid
                  updates and Docker for streamlined containerization
                </li>
                <li>
                  Boosted backend performance by 40% using Python, FAST API, and
                  Postgres SQL for efficient code execution
                </li>
                <li>
                  Enhanced UI responsiveness by 30% using HTML, CSS, JavaScript,
                  and React, resulting in a more engaging user experience.
                </li>
                <li>
                  Increased system reliability by 50% by leveraging AWS
                  services, including Postgres SQL, Lambda functions, SQS, and
                  EC2
                </li>
              </ul>
            </AccordianItem>

            {/* experience3 */}
            <AccordianItem
              value="3"
              trigger="Oregon State University"
              subText="IT Specialist - Data Integration and Automation"
              dateText="June 22 - March 23"
              additionalContent={
                <div className="flex flex-row gap-1 sm:gap-4 justify-center items-center">
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    SQL
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    OracleDB
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Python
                  </span>
                </div>
              }
            >
              <ul>
                <li>
                  Led data cleansing initiatives using SQL queries to eliminate
                  duplicate entries and ensure database integrity
                </li>
                <li>
                  Generated and dispatched weekly data retrieval reports,
                  enabling the dev team to optimize code for efficient data
                  storage
                </li>
                <li>
                  Developed SQL queries to extract and organize time-in/time-out
                  data of employees, facilitating strategic employee scheduling
                </li>
                <li>
                  Enhanced data integrity and efficiency by developing a data
                  cleansing strategy with SQL and Python, removing duplicates
                </li>
              </ul>
            </AccordianItem>

            {/* experience4 */}
            <AccordianItem
              value="4"
              trigger="Skela Technologies"
              subText="Software Developer"
              dateText="April 20 - March 21"
              additionalContent={
                <div className="flex flex-row gap-1 sm:gap-4 justify-center items-center">
                  <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Java
                  </span>
                  <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    AWS
                  </span>
                  <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    JDBC
                  </span>
                  <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Rest API
                  </span>
                  <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Postgres
                  </span>
                  <span className="px-2 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Spring Boot
                  </span>
                </div>
              }
            >
              <ul>
                <li>
                  Developed Java RESTful APIs and responsive web apps with HTML,
                  CSS, and JavaScript, boosting performance by 40%
                </li>
                <li>
                  Optimized SQL database schemas in PostgreSQL, resulting in 30%
                  faster data access and retrieval.
                </li>
                <li>
                  Integrated AWS services (S3 for storage, EC2 for hosting),
                  enhancing system architecture and scalability by 50%
                </li>
                <li>
                  Employed a comprehensive Java stack, utilizing Maven for
                  project management, JDBC for database connectivity, Servlets
                  for HTTP request handling, and Hibernate for efficient
                  object-relational mapping (ORM). Additionally, leveraged the
                  Spring framework and Spring Boot for scalable and streamlined
                  enterprise application development
                </li>
                <li>
                  Utilized a comprehensive Java stack: Maven for project
                  management, JDBC for database connectivity, Servlets for HTTP
                  requests, Hibernate for ORM, and Spring Boot for scalable
                  enterprise application development
                </li>
                <li>
                  Used Postman and JUnit for API testing, ensuring Java-based
                  RESTful API functionality, performance with automated scripts
                </li>
              </ul>
            </AccordianItem>

            {/* experience5 */}
            <AccordianItem
              value="5"
              trigger="Slarity"
              subText="Front-End Developer"
              dateText="December 18 - March 20"
              additionalContent={
                <div className="flex flex-row gap-1 sm:gap-4 justify-center items-center">
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    JavaScript
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    React
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    HTML
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    CSS
                  </span>
                  <span className="px-4 py-2 rounded-3xl bg-teal-50 text-customBlack">
                    Figma
                  </span>
                </div>
              }
            >
              <ul>
                <li>
                  Implemented a custom caching mechanism in JavaScript, reducing
                  API response time by 30%, improving overall performance
                </li>
                <li>
                  Enhanced front-end apps, reducing load times and improving
                  conversions by 20% with ReactJS HTML CSS and Javascript
                </li>
                <li>
                  Boosted profits by 15% using ReactJS and FramerMotion to
                  improve website performance and design, boosting user
                  engagement
                </li>
                <li>
                  Created quality mockups and prototypes by using Figma to
                  validate functionality, leading to a 14% rise in prototype
                  approval
                </li>
                <li>
                  Increased testing efficiency by 40% with Selenium automation,
                  improving coverage and detecting issues faster
                </li>
                <li>
                  Enhanced brand visibility and user engagement by 50% by logo
                  design, branding, and media posts using Adobe Creative Tools
                </li>
              </ul>
            </AccordianItem>
          </Accordian>
        </div>
      </div>
    </main>
  );
}

export default Work;
