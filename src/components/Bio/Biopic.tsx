import { keyframes, styled } from 'styled-components';

const BIOPIC = `
Hi, I'm Emmanuel. I program computers, and I love it.

When I was fourteen, I decided that I didn't have to wait for university to learn programming. Back in those days, unlimited internet and fast connections were unthinkable. But we could use a 56k modem and pay by the minute to get some information. After learning a bit about QBasic—I was using DOS—I discovered that the language to learn was C. I went to the city with my mother and bought a book about C. I bought Linux magazine and installed my first Linux distribution. I was so excited.

C was hard for a fifteen-year-old teenage alone with his computer. I could not get the hang of pointer. Fortunately, I discovered PHP and bought a book. After a while and a lot of aborted projects, I managed to make a website for my parents' association. It was using SPIP. The main learning from those days was: website interface need to be as simple as it can be—minimalism is key for user experience.

After a term in university, I was still not programming and I fell into a rabbit hole of student volunteering. It drove me into trying to understand the world through sociology. Long story short, I never did. I gave up and I became an elementary school teacher. During this time, I was programming on and off. Sometimes, I picked up some C++. The next time it was Python. In the mean time, I moved in Canada for six years. I've learned a lot about didactic and pedagogy. This lasted nine years until I met one of my parents' students. He was a programmer, and it was awesome. I realized that the missing piece was socializing. Until this meeting, programming had been a lonesome hobby for me. After, it became a social experience. I could share, talk, and learn with someone else.

I decided to switch careers. I enrolled in 42 Quebec. I got selected and finished the program in five months instead of eighteen. I was programming all the time. I got my internship at Eddyfi. I finished the proof of concept I was tasked in three weeks instead of four months and then spent all the remaining time working on a production-ready version of the feature. I turned down the job offer they made to me to work for Demarque on an education project in which I could mix my old career with the new one. This has been so far an amazing experience. I've learned so much about how to work on a complex web app, how to design features, optimize some areas of the project, work professionally with other programmers and that business needs to make money. Programming is just a tool.
`;

export default function Biopic() {
  return(
    <BiopicWrapper id="Whoiam">
      { BIOPIC }
    </BiopicWrapper>
  );
}

const BiopicWrapper = styled.div`
  margin: auto;
  line-height: 1.8;
  text-align: justify;
  text-indent: 2rem;
  padding: 20px;
  white-space: pre-line;
`;
