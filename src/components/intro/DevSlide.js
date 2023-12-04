import ReactMarkdown from "react-markdown";

const DevSlide = () => {
  return (
    <div className="dev-wrapper">
      <div className="dev-icon-wrapper">
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              <img style={{ width: "700px" }} {...props} alt="dev-logo" />
            ),
          }}
        >
          {SkillIcons}
        </ReactMarkdown>
      </div>
      <div className="div-bar"></div>
      <div className="footer">2023-2 강남대학교 웹개발응용 기말프로젝트</div>
    </div>
  );
};
const SkillIcons = `

[![My Skills](https://skillicons.dev/icons?i=js,react,scss,figma,vscode,git)](https://github.com/rogi-rogi/KNU_Graduation_Guidance)

`;

export default DevSlide;
