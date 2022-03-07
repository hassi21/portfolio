import "./skills.css";

const Skills = () => {
  return (
    <div className="Skills">
      <p className="skillsHeading">My Skills</p>
      <div className="skillSection">
        <div className="skill">
          <p className="skillText">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              className="svgs"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              ></path>
            </svg>
            <span className="skillName">ReactJs</span> &nbsp;as my Frontend
            framework
          </p>
        </div>
        <div className="skill">
          <p className="skillText">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              className="svgs"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              ></path>
            </svg>
            <span className="skillName">NodeJs</span> &nbsp;as my backend server
          </p>
        </div>
        <div className="skill">
          <p className="skillText">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              className="svgs"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              ></path>
            </svg>
            <span className="skillName">ExpressJs</span> &nbsp;as my API
            framework framework
          </p>
        </div>
        <div className="skill">
          <p className="skillText">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              className="svgs"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              ></path>
            </svg>
            <span className="skillName">React Native</span> &nbsp;as a
            cross-platform framework--Beginner :)
          </p>
        </div>
      </div>
      <p className="skill">
        ...more skills include <span className="skillName">redux,</span>
        <span className="skillName"> context api,</span>
        <span className="skillName"> figma</span>
      </p>
    </div>
  );
};

export default Skills;
