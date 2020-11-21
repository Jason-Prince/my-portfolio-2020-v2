import styled, { keyframes } from "styled-components";

const Section = styled.section`
  background-color: ${({ sectionOne, sectionTwo }) =>
    sectionOne
      ? ({ theme }) => theme.colors.indigoDye
      : sectionTwo
      ? ({ theme }) => theme.colors.gainsboro
      : ({ theme }) => theme.colors.white};
  color: ${({ sectionOne, sectionTwo }) =>
    sectionOne
      ? ({ theme }) => theme.colors.gainsboro
      : sectionTwo
      ? ({ theme }) => theme.colors.indigoDye
      : ({ theme }) => theme.colors.jet};
  padding: 3rem;
  display: grid;
  gap: 3rem;
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

const AboutMe = styled.p`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: white;
  text-align: center;
  font-size: 1.2rem;
`;

const Button = styled.a`
  display: inline;
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

const Image = styled.img`
  width: ${({ square }) => (square ? "12rem" : "100%")};
  border-radius: 0.5rem;
`;

const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
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

const LinkContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

export default function Home() {
  return (
    <>
      <Section sectionTwo>
        <Title>
          Hey! I'm Jason. I Can Be Your{" "}
          <Underline>Full Stack Web Developer</Underline>
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
        <P>
          I have 20 years of experience in IT with a BSIT degree and a DOD
          security clearance. Recently, I completed the Full Stack Web
          Development track at{" "}
          <ExternalLink href="#">Lambda School</ExternalLink>
        </P>
        <Image square src="jason.png" alt="Jason Prince"></Image>
        <Project>
          <Image src="reciepeEditor.png" alt="Reciepe Editor"></Image>
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
        </Project>
        <Project>
          <Image src="pixabay.png" alt="Pixabay Image Search"></Image>
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
        </Project>
      </Section>
    </>
  );
}
