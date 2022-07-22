import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';
const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h3>Essays</h3>
            <Essay q='Question 1: Explain the difference between HTML, CSS and JavaScript.'>
                <p>The difference between HTML, CSS, and JavaScript is drastically different.
                Hypertext Markup Language or HTML was first
                proposed in 1989 at the Cern institute in Sweden by
                Tim-Berners-Lee. Tim Berners-Lee originally developed the
                language to make documents on the early internet more easily
                read. HTML can be improved or assisted by CSS, as well as JavaScript.</p>
                <p>Cascading Style sheets or CSS is a
                programming language that deals with much of the design and
                formatting of webpages on the internet. CSS allows the user to
                use certain selectors to design and format web pages.
                There are many identifiers in CSS and that provides the user with an
                array of different tools that he/she/them may use to design webpages with.</p>
                <p>JavaScript also known as JS is a programming language
                that was developed by Sun Microsystems to
                work along with HTML and CSS. JavaScript was
                designed as an easy-to-use object scripting language
                designed for creating live online applications that link
                together objects and resources on both clients and servers.</p>
                <p><strong>MLA Bibliograpghy</strong></p>
                <p>“Press Release.” Sun Microsystems,
                “HTML Standard.” Tim Berners Lee, html.spec.whatwg.org. Accessed 7 July 2022.
                “CSS Snapshot 2021.” Tab Atkins Jr, 31 Dec. 2021, www.w3.org/TR/CSS/#css.
                </p>




            </Essay>

            <Essay q='Question 2: What is the difference between Git, Github and Heroku?'>
            <p>The difference between Git, GitHub, and Heroku is drastically different.
            Git is software that was developed as a type of version control for programmers.
            It was developed by the founder of LINUX Linus Torvalds and was initially released in 2005.
            Git is free and open source and is used worldwide among the programmer community as a way to
            collaborate on projects.</p>

            <p>GitHub is a repository where the projects that programmers collaborate on are then stored.
            Git can be used to upload these projects to GitHub and store them in their own
            unique repositories. GitHub acts like Git but offers a variety of features that Git does not.
            These features can range from chat, IDE’s, Dependency management, etc.
            there are thousands of unique apps and actions that can be used on GitHub.</p>

            <p>Heroku is a container-based cloud Platform as a Service(PaaS).
            Programmers and developers alike use Heroku to build applications in the cloud.
            With the Heroku being cloud based it gives users the freedom to deploy as well as maintain
            their projects from anywhere</p>

            <p>Both Git, GitHub, and Heroku play a vital role in a programmer’s knapsack of tools.
            These three tools are used daily across the world and a variety of technology that the
            public uses today such as Facebook, Netflix, and Twitter could not be maintained
            efficiently without these tools.</p>
            <strong>MLA Bibliograpghy</strong>
            <p>Microsoft. “GitHub: Where the World Builds Software · GitHub.”GitHub, Github, 1 July 2022, https://github.com/.
            Chacon, Scott. “--Distributed-Even-If-Your-Workflow-Isnt.” Git, 1 July 2022, https://gitscm.com/
            “About Heroku.” Heroku, https://www.heroku.com/about</p>

            </Essay>

            <Essay q='Question 3: What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
            <p>Single Page applications are a web application or website that interacts with the user.
            These single page web applications rewrite the current page data from a web server.
            Examples of single page applications are websites such as Google Maps, Trello, and gmail.
            You can see changes happening in real time and data is being presented in realtime. </p>
            <p>Multi-Page application work in a traditional way every change that is displayed submits data back to the server
            and it requests the data rendering a new page from the server in the browser.   Multi-Page appications are usually
            larger than the SPA's because they need to be, due to the amount of the content.</p>
            </Essay>

            <Essay q='Question 4: What is the difference between Web Designer, Front End Developer and Back End Developer?'>
            <p>Web designers are in charge of overall changes on the website. they are in charge of
            making the site look the way it does.
            They create prototypes for Developers to to translate into HTML, CSS, and JS.</p>
            <p>Front end developers - Client side: works on the HTML/CSS/JS - what shpws up in the browser</p>
            <p>Back end dev - Works on the webserver side.</p>
            </Essay>
            <Essay q='Question 5: Distinguish the difference between Site Relative, Document Relative, and Absolute Paths?'>
            <p>The address of the link is relative to the overall site</p>
            <p>The address of the link is relative to the address of the document the link appears in</p>
            <p>is the hierarchical path that locates a file or folder in a file system starting from the root.</p>
            </Essay>
            <Essay q='Question 6:'>
            <p>JPG: Joint Photograpgic Experts Group: Photography Images with continous tone</p>
            <p>GIF: A bitmap image structure that are suitable for
                    sharp-edged line art with a limited number of colors, such as logos</p>
            <p>PNG: Portable Network Graphics developed as an improved, non-patented replacement </p>
            <p>SVG: Scalable Vector Graphics is used to define vector-based graphics for the Web
                SVG defines the graphics in XML format every attribute in SVG files can be animated </p>
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;