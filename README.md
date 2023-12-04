# 🏫 KNU Graduation Guidance

강남대학교(Kangnam University) 졸업 여건을 미리 확인할 수 있도록 도움을 주는 홈페이지 입니다.

> 강남대학교 소프트웨어학과 웹개발응용 자율프로젝트
>
> 개발기간 : 2023.11 ~ 12

<hr/><br>

## 🤝 Member

|                                     김영록                                      |                                     이건이                                     |                                      차승준                                      |
| :-----------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/95115004?v=4" width="150px"/> | <img src="https://avatars.githubusercontent.com/u/8115130?v=4" width="150px"/> | <img src="https://avatars.githubusercontent.com/u/151488428?v=4" width="150px"/> |
|                   [@rogi-rogi](https://github.com/rogi-rogi)                    |                     [@geoni-ara](https://github.com/geoni)                     |                  [@seungjuncha](https://github.com/seungjuncha)                  |
|                  <p style="white-space:nowrap">기획, 개발</p>                   |                                     데이터수집                                     |                                      디자인                                      |

<hr/><br>

## 👋 Intro

친구들에게 무엇이 필요한지 고민했습니다.

대학교를 다니며 누구나 졸업 조건이 맞는지 확인하거나, 수강 신청을 위해 앞으로 들을 과목들을 미리 생각해본 경험이 있습니다.

다른 사람들은 어떤 수업을 듣는지, 전공 수업을 앞으로 얼만큼 들어야 하나 궁금하기도 합니다.

그래서 준비했습니다!

<hr/><br>

### 🔢 학점 계산 시뮬레이션 : "졸업 조건을 모르면 초과 학기?"

입학학번, 전공에 따라 졸업에 필요한 학점이 다릅니다.

이를 위해 종합정보시스템과, i로드맵이 있습니다.

하지만 전공변경시 인정되는 학점과 필요한 학점을 미리 계산하거나, i-로드맵의 상시 이용이 불가능합니다.

졸업 조건 미충족시 초과학기를 통해 졸업이 가능합니다.
초과학기는 한국장학재단에서의 국가장학금 지원이 불가능하기에 꼭 졸업조건을 확인해야 합니다.

위와 같은 고민을 해결하기 위해 자신의 학점과 이수/희망 수업목록을 입력해 앞으로의 전공 선택과 수업선택에 도움을 받을 수 있습니다.

지금까지 듣고싶은 수업, 남는 수업을 들으셨나요?
이제는 졸업 조건을 살펴보며 학점을 계산할 시간 입니다.

#### how use?

.
.
.

<hr/><br>

### 👆 i로드맵 게시판 : "너는 어떤 수업 들을꺼야?"

다른 사람은 i로드맵을 어떻게 작성했을까? 선행과목은 무엇일까? 라는 고민을 해결하기 위해 게시판에 익명으로 자신의 i로드맵을 올려 정보를 공유하기 위한 게시판 입니다.

#### how use?

.
.
.

<hr/><br>

## 📚 Stack

### 💻 PL

![JavaScript](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=0D1117)

### 🌐 Frontend

![React](https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=0D1117)
![Styled_Components](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

### 📦 Backend
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

### 🎨 UI/UX

![Figma](https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

### ⚙️ Enviroment

![VSCode](https://img.shields.io/badge/VSCODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white)

<hr/><br>

## 🛤️ Guide

### init

```cmd
npm install -g yarn
```

### git Clone

```bash
git clone https://github.com/rogi-rogi/KNU_Graduation_Guidance.git

cd KNU_Graduation_Guidance
```

### Frontend

```cmd
yarn

yarn start
```

<hr/><br>

## 🗂️ Directory

```bash
📦KNU_Graduation_Guidance
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┗ 📜KNU_MAIN.jpg
 ┃ ┣ 📜index.html
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂calc_graduation
 ┃ ┃ ┃ ┣ 📜CalcBox.js
 ┃ ┃ ┃ ┣ 📜CalcGraph.js
 ┃ ┃ ┃ ┣ 📜GroupListBox.js
 ┃ ┃ ┃ ┣ 📜MajorCalcOptionBox.js
 ┃ ┃ ┃ ┗ 📜ViewCredit.js
 ┃ ┃ ┣ 📂intro
 ┃ ┃ ┃ ┣ 📜DevSlide.js
 ┃ ┃ ┃ ┣ 📜IntroCard.js
 ┃ ┃ ┃ ┗ 📜IntroHeader.js
 ┃ ┃ ┗ 📂menu_bar
 ┃ ┃ ┃ ┣ 📜MenuBar.js
 ┃ ┃ ┃ ┣ 📜MenuBar.scss
 ┃ ┃ ┃ ┗ 📜MenuBtn.js
 ┃ ┣ 📂contexts
 ┃ ┃ ┣ 📜CreditContext.js
 ┃ ┃ ┗ 📜GroupContext.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Board.js
 ┃ ┃ ┣ 📜CalcCredit.js
 ┃ ┃ ┣ 📜Home.js
 ┃ ┃ ┣ 📜Intro.js
 ┃ ┃ ┣ 📜LoadPage.js
 ┃ ┃ ┣ 📜Page.scss
 ┃ ┃ ┗ 📜TestPage.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock
```
