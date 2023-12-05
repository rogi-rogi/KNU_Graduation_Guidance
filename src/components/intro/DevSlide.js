import ReactMarkdown from "react-markdown";

const DevSlide = () => {
  return (
    <div className="dev-wrapper">
      <div className="dev-icon-wrapper">
        <div className="title-wrapper">
          <div className="title">Use Stack</div>
        </div>
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
    </div>
  );
};

const SkillIcons = `

[![My Skills](https://skillicons.dev/icons?i=js,react,scss,figma,vscode,git)](https://github.com/rogi-rogi/KNU_Graduation_Guidance)

`;

export default DevSlide;
