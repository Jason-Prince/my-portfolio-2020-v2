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
          <ListItem>HTML</ListItem>
          <ListItem>CSS </ListItem>
          <ListItem>Sass</ListItem>
          <ListItem>Styled Components</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>Python</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Next JS</ListItem>
          <ListItem>Knex JS</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>GitHub</ListItem>
          <ListItem>Material UI</ListItem>
          <ListItem>Bootstrap</ListItem>
          <ListItem>React Hooks</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>Django</ListItem>
          <ListItem>Node JS</ListItem>
          <ListItem>SQLite3</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>Netlify</ListItem>
          <ListItem>Heroku</ListItem>
          <ListItem>Algorithms</ListItem>
          <ListItem>Data Structures</ListItem>
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
