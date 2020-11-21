import styled, { keyframes } from "styled-components";

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.gainsboro};
  color: ${({ theme }) => theme.colors.indigoDye};
  padding: 3rem;
  display: grid;
  gap: 8rem;
  justify-items: center;
`;

const Underline = styled.span`
  border-bottom: 4px solid white;
  padding-bottom: 2px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const fadein = keyframes`
  100% {
    opacity: 1;
  }
`;

const Button = styled.a`
  display: inline;
  opacity: 0;
  border-radius: 0.5rem;
  text-decoration: none;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.indigoDye};
  background-color: ${({ theme }) => theme.colors.gainsboro};
  color: ${({ theme }) => theme.colors.indigoDye};
  padding: ${({ lg, md }) => (lg ? "1rem 1.5rem" : md ? ".25rem .5rem" : "0")};
  border-width: ${({ lg, md }) => (lg ? "4px" : md ? "3px" : "1px")};
  font-weight: ${({ lg, md }) => (lg ? "700" : md ? "600" : "400")};
  font-size: ${({ lg, md }) => (lg ? "2rem" : md ? "1rem" : ".7rem")};
  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.indigoDye};
    color: ${({ theme }) => theme.colors.white};
  }
  animation: ${fadein} 1s 4s ease-in forwards;
`;

const P = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.2rem;
`;

const ExternalLink = styled.a`
  display: inline;
  text-decoration: underline ${({ theme }) => theme.colors.indigoDye};
  color: ${({ theme }) => theme.colors.indigoDye};
  font-weight: 600;
  &:hover {
    text-decoration: underline ${({ theme }) => theme.colors.white};
  }
`;
const SvgLink = styled.a`
  display: inline;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.indigoDye};
  font-weight: 600;
`;

const Image = styled.img`
  width: ${({ square }) => (square ? "12rem" : "100%")};
  border-radius: 0.5rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const Project = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  max-width: 1024px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 35px;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Contact = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  gap: 12px;
  max-width: 1024px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`;

const Footer = styled.section`
  width: 100%;
  display: grid;
  text-align: center;
  font-size: 0.6rem;
`;

const push = keyframes`
  0% {
    opacity: 0;
  }

  33% {
    opacity: 1;
    transform: translateY(-30px);
  }
  66% {
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: ${({ banner }) => (banner ? "center" : "start")};
`;

const ListItem = styled.div`
  display: inline;
  color: ${({ theme }) => theme.colors.ming};
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.ming};
  padding: 1px 3px 0px 3px;
  opacity: 0;
  animation: ${push} 2s forwards;
  animation-delay: ${(props) =>
    props.d1
      ? ".1s"
      : props.d2
      ? ".2s"
      : props.d3
      ? ".3s"
      : props.d4
      ? ".4s"
      : props.d5
      ? ".5s"
      : props.d6
      ? ".6s"
      : props.d7
      ? ".7s"
      : props.d8
      ? ".8s"
      : props.d9
      ? ".9s"
      : props.d10
      ? "1.0s"
      : props.d11
      ? "1.1s"
      : props.d12
      ? "1.2s"
      : props.d13
      ? "1.3s"
      : props.d14
      ? "1.4s"
      : props.d15
      ? "1.5s"
      : props.d16
      ? "1.6s"
      : props.d17
      ? "1.7s"
      : props.d18
      ? "1.8s"
      : props.d19
      ? "1.9s"
      : props.d20
      ? "2.0s"
      : props.d21
      ? "2.1s"
      : props.d22
      ? "2.2s"
      : props.d23
      ? "2.3s"
      : "0"};
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const Svg = styled.svg`
  fill: ${({ theme }) => theme.colors.indigoDye};
  width: 50px;
  border-radius: 50px;
  padding: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.colors.gainsboro};
  &:hover {
    background-color: ${({ noLink }) =>
      noLink ? "${({ theme }) => theme.colors.gainsboro}" : "white"};
  }
`;

const Banner = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1024px;
`;

const point = keyframes`
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translateY(30px);
  }
`;

const CheveronContainer = styled.div`
  display: flex;
`;

const Chevron = styled.svg`
  animation: ${point} 4s ease-in-out infinite;
  animation-delay: ${({ first, second, third, fourth }) =>
    first ? "6s" : second ? "7s" : third ? "8s" : fourth ? "9s" : "10s"};
  animation-duration: ${({ first, second, third, fourth }) =>
    first ? "4s" : second ? "4.5s" : third ? "5s" : fourth ? "5.5s" : "6s"};
  width: 40px;
  opacity: 0;
  transform: translateY(-60px);
`;

export default function Home() {
  return (
    <>
      <Section>
        <Banner>
          <Title>
            Hey! I'm Jason. I Can Be Your{" "}
            <Underline>Full-Stack Web Developer</Underline>
          </Title>
          <List banner>
            <ListItem d1>CSS </ListItem>
            <ListItem d2>HTML</ListItem>
            <ListItem d3>Sass</ListItem>
            <ListItem d4>Styled Components</ListItem>
            <ListItem d5>JavaScript</ListItem>
            <ListItem d6>Python</ListItem>
            <ListItem d7>React</ListItem>
            <ListItem d8>Next JS</ListItem>
            <ListItem d9>Knex JS</ListItem>
            <ListItem d10>Git</ListItem>
            <ListItem d11>GitHub</ListItem>
            <ListItem d12>Material UI</ListItem>
            <ListItem d13>Bootstrap</ListItem>
            <ListItem d14>React Hooks</ListItem>
            <ListItem d15>Express</ListItem>
            <ListItem d16>Django</ListItem>
            <ListItem d17>Node JS</ListItem>
            <ListItem d18>SQLite3</ListItem>
            <ListItem d19>MySQL</ListItem>
            <ListItem d20>Netlify</ListItem>
            <ListItem d21>Heroku</ListItem>
            <ListItem d22>Algorithms</ListItem>
            <ListItem d23>Data Structures</ListItem>
          </List>
          <Button lg href="#contact" rel="noopener">
            Let's Talk
          </Button>
          <CheveronContainer>
            <Chevron
              second
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </Chevron>
            <Chevron
              first
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </Chevron>
            <Chevron
              fourth
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </Chevron>
            <Chevron
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </Chevron>
            <Chevron
              third
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </Chevron>
          </CheveronContainer>
        </Banner>
        <P>
          I have 20 years of experience in Information Technology with a
          Bachelor of Information Technology and a Secret security clearance
          with the Department of Defense. Recently, I completed the Full Stack
          Web Development track at{" "}
          <ExternalLink
            target="_blank"
            href="https://lambdaschool.com/courses/full-stack-web-development"
          >
            Lambda School
          </ExternalLink>
          .
        </P>
        <Image square src="jason.png" alt="Jason Prince"></Image>
        <Project>
          <Image src="reciepeEditor.png" alt="Reciepe Editor"></Image>
          <Details>
            <H3>Cooking With React</H3>
            <List>
              <ListItem>JavaScript</ListItem>
              <ListItem>React </ListItem>
              <ListItem>React Hooks</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>CSS Grid</ListItem>
              <ListItem>BEM</ListItem>
            </List>
            <P>This app provides a form to create, edit, or remove recipes.</P>
            <List>
              <ExternalLink
                md
                href="https://reciepes.netlify.app/"
                target="_blank"
              >
                Live Demo
              </ExternalLink>
              <ExternalLink
                md
                href="https://github.com/Jason-Prince/Cooking-With-React"
                target="_blank"
              >
                Github Repo
              </ExternalLink>
            </List>
          </Details>
        </Project>
        <Project>
          <Details>
            <H3>Pixabay Image Search</H3>
            <List>
              <ListItem>JavaScript</ListItem>
              <ListItem>React </ListItem>
              <ListItem>React Hooks</ListItem>
              <ListItem>Fetch</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>CSS Grid</ListItem>
              <ListItem>Tailwind</ListItem>
            </List>
            <P>
              This app allows a user to enter a search term in the Pixabay image
              gallery and produces a list of images and all the data associated
              with it.
            </P>
            <List>
              <ExternalLink
                md
                href="https://image-search-pixabay.netlify.app/"
                target="_blank"
              >
                Live Demo
              </ExternalLink>
              <ExternalLink
                md
                href="https://github.com/Jason-Prince/image-gallery"
                target="_blank"
              >
                Github Repo
              </ExternalLink>
            </List>
          </Details>
          <Image src="pixabay.png" alt="Pixabay Image Search"></Image>
        </Project>
        <Project>
          <Image src="portfolio.png" alt="portfolio"></Image>
          <Details>
            <H3>Web Portfolio</H3>
            <List>
              <ListItem>JavaScript</ListItem>
              <ListItem>Next JS </ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>CSS Grid</ListItem>
              <ListItem>Styled Components</ListItem>
              <ListItem>Vercel</ListItem>
              <ListItem>Mobile First</ListItem>
            </List>
            <P>
              Usefull resource for clients and employers who want to know me,
              contact me and see live demos and repositors of my projects.
            </P>
            <List>
              <ExternalLink md href="http://jason-prince.com" target="_blank">
                Live Demo
              </ExternalLink>
              <ExternalLink
                md
                href="https://github.com/Jason-Prince/my-portfolio-2020-v2"
                target="_blank"
              >
                Github Repo
              </ExternalLink>
            </List>
          </Details>
        </Project>
        <Contact id="contact">
          <SvgLink
            href="https://www.linkedin.com/in/jason-c-prince/"
            target="_blank"
          >
            <Svg viewBox="0 0 3333 3333">
              <path d="M1465 1354h322v165h5c45-81 155-165 318-165 340 0 403 212 403 488v561h-336v-498c0-119-2-271-175-271-175 0-202 129-202 263v506h-336V1354zM1667 0c460 0 877 187 1179 488 302 302 488 718 488 1179 0 460-187 877-488 1179-302 302-718 488-1179 488-460 0-877-187-1179-488C186 2544 0 2128 0 1667c0-460 187-877 488-1179C790 186 1206 0 1667 0zm1093 573c-280-280-666-453-1093-453S853 293 574 573c-280 280-453 666-453 1093s173 814 453 1093c280 280 666 453 1093 453s814-173 1093-453c280-280 453-666 453-1093s-173-814-453-1093zm-1528 490c0 97-78 175-175 175s-175-78-175-175 78-175 175-175 175 78 175 175zm-350 291h350v1049H882V1354z" />
            </Svg>
            <div>Jason-C-Prince</div>
          </SvgLink>
          <SvgLink href="https://github.com/jason-prince" target="_blank">
            <Svg viewBox="0 0 640 640">
              <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
            </Svg>
            <div>Jason-Prince</div>
          </SvgLink>
          <div>
            <Svg noLink viewBox="0 0 122.88 122.88">
              <path d="M61.44,0c16.97,0,32.33,6.88,43.44,18c11.12,11.12,18,26.48,18,43.44c0,16.96-6.88,32.33-18,43.44 c-11.12,11.12-26.48,18-43.44,18c-16.97,0-32.33-6.88-43.44-18C6.88,93.77,0,78.41,0,61.44C0,44.47,6.88,29.11,18,18 C29.11,6.88,44.47,0,61.44,0L61.44,0z M48.1,56.19c2,3.6,4.3,7.06,7.29,10.21c2.99,3.17,6.72,6.06,11.55,8.52 c0.35,0.18,0.7,0.18,1,0.05c0.46-0.18,0.92-0.55,1.39-1.01c0.35-0.35,0.8-0.93,1.27-1.55c1.85-2.44,4.15-5.47,7.39-3.96 c0.07,0.03,0.13,0.07,0.2,0.11l10.81,6.22c0.03,0.02,0.07,0.05,0.11,0.07c1.43,0.98,2.02,2.49,2.03,4.2c0,1.75-0.64,3.71-1.58,5.36 c-1.25,2.19-3.08,3.63-5.2,4.6c-2.01,0.92-4.26,1.42-6.41,1.74c-3.38,0.5-6.55,0.18-9.8-0.82c-3.17-0.98-6.37-2.61-9.85-4.76 l-0.25-0.16c-1.6-1-3.33-2.07-5.03-3.33c-6.21-4.68-12.54-11.45-16.65-18.9c-3.46-6.26-5.34-13.01-4.32-19.44 c0.57-3.53,2.09-6.74,4.72-8.85c2.3-1.85,5.4-2.87,9.41-2.51c0.46,0.03,0.87,0.3,1.09,0.7l6.94,11.72 c1.01,1.32,1.14,2.62,0.59,3.92c-0.46,1.07-1.39,2.05-2.66,2.98c-0.37,0.32-0.82,0.64-1.29,0.98c-1.55,1.12-3.32,2.42-2.71,3.96 L48.1,56.19L48.1,56.19L48.1,56.19L48.1,56.19z M98.3,24.58C88.87,15.15,75.83,9.31,61.44,9.31c-14.39,0-27.43,5.83-36.86,15.27 C15.15,34.01,9.31,47.05,9.31,61.44c0,14.39,5.83,27.43,15.27,36.86s22.46,15.27,36.86,15.27c14.39,0,27.43-5.83,36.86-15.27 c9.43-9.43,15.27-22.46,15.27-36.86C113.57,47.05,107.73,34.01,98.3,24.58L98.3,24.58z" />
            </Svg>
            <div>‪(415) 498-0783‬</div>
          </div>
          <SvgLink href="mailto:jasoncprince@gmail.com?Mail From Portfolio Site">
            <Svg viewBox="0 0 122.1 121.53">
              <path d="M74.81,34.32l0.23-0.99l1.37-6.05h16.68l-9.6,45.32c-0.17,0.82-0.33,1.55-0.45,2.21v0c-0.3,1.64-0.44,2.79-0.44,3.46 c0,0.97,0.24,1.75,0.71,2.29c0.5,0.54,1.08,0.82,1.75,0.82c2.26,0,5.22-1.49,8.82-4.46c3.58-2.96,6.73-7.01,9.41-12.12 c2.67-5.11,4.01-10.7,4.01-16.78c0-5.05-0.95-9.81-2.87-14.28c-1.92-4.47-4.7-8.33-8.31-11.63c-3.62-3.28-8.11-5.85-13.44-7.7 c-5.33-1.85-11.37-2.78-18.1-2.78c-6.88,0-13.18,0.91-18.9,2.7c-5.74,1.79-10.76,4.36-15.1,7.7c-4.34,3.34-7.96,7.49-10.87,12.42 c-2.57,4.29-4.53,9.06-5.87,14.28c-1.36,5.22-2.03,10.55-2.03,15.98c0,7.25,1.45,13.87,4.34,19.87c2.87,6.02,7.07,11.05,12.58,15.1 c5.48,4.08,12.12,6.97,19.93,8.67c7.79,1.7,16.59,2.05,26.41,1.03c7.79-0.93,14.39-2.7,19.8-5.31c5.41-2.61,10.01-6.28,13.76-11 h13.46c-2.18,4.51-5.05,8.54-8.56,12.08c-3.51,3.54-7.64,6.51-12.36,8.95c-4.7,2.42-9.99,4.25-15.86,5.52 c-5.84,1.27-12.23,1.9-19.16,1.9c-10.35,0-19.69-1.36-27.98-4.08c-8.31-2.72-15.29-6.64-20.97-11.76 c-5.65-5.11-9.95-11.22-12.86-18.34C1.44,80.27,0,72.44,0,63.83c0-8.97,1.49-17.37,4.49-25.16c3-7.78,7.29-14.56,12.92-20.32 C23.04,12.6,29.9,8.11,38.01,4.88C46.12,1.62,55.07,0,64.85,0c8,0,15.34,1.17,22.02,3.51c6.67,2.33,12.4,5.7,17.15,10.07 c4.77,4.38,8.39,9.58,10.92,15.58c2.5,6,3.75,12.62,3.75,19.87c0,5.65-1.01,11.17-3.04,16.59c-2.01,5.41-4.92,10.29-8.69,14.61 c-3.75,4.31-8.2,7.72-13.29,10.25c-5.11,2.5-10.61,3.75-16.5,3.75c-3.41,0-6.06-0.58-7.96-1.75c-1.9-1.14-3.17-3-3.8-5.52 c-0.96,0.95-1.96,1.8-2.99,2.57c-0.83,0.62-1.69,1.17-2.58,1.67c-2.2,1.24-4.56,2.12-7.07,2.62c-4.77,0.95-9.38,0.5-13.85-1.34 c-4.47-1.84-8.07-4.92-10.83-9.26c-2.76-4.34-4.14-9.68-4.14-16.05c0-6.62,1.42-13.11,4.27-19.52C31.06,41.25,35.1,36,40.34,31.91 c5.24-4.08,11.17-6.13,17.8-6.13c7.37,0,12.84,2.69,16.38,8.08L74.81,34.32L74.81,34.32z M40.25,67.05c0,5.07,1.06,8.93,3.15,11.63 c2.11,2.7,4.88,4.06,8.28,4.06c3.97,0,7.44-1.6,10.46-4.75c0.89-0.93,1.71-1.94,2.47-3.01c0.51-0.72,1-1.48,1.45-2.27 c1.17-2.02,2.15-4.25,2.94-6.7c1.53-4.77,2.31-9.38,2.33-13.84v-0.16c0-0.99-0.05-1.94-0.15-2.84c-0.13-1.12-0.34-2.18-0.63-3.18 c-0.54-1.79-1.31-3.36-2.35-4.73c-1.04-1.34-2.26-2.35-3.73-3.06c-1.45-0.69-3.11-1.03-4.96-1.03c-3.69,0-7.03,1.44-10.01,4.34 c-2.95,2.84-5.2,6.55-6.81,11.11l0,0l-0.05,0.12C41.05,57.36,40.25,62.13,40.25,67.05L40.25,67.05z" />
            </Svg>
            <div>Jason.C.Prince@gmail.com</div>
          </SvgLink>
        </Contact>
        <Footer>© Jason Prince. All rights reserved.</Footer>
      </Section>
    </>
  );
}
