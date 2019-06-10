import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import { CardActions, CardContent, Typography } from '@material-ui/core';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
import chatty from '../assets/images/chatty.png';
import pearup from '../assets/images/pearup.png';
import jungle from '../assets/images/jungle.png';
import tweeter from '../assets/images/tweeter.png';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          About Me
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            I want to build something that contributes to the bigger things
          </h2>
          <p>
            Ever since I was a kid, I always had a curiosity for technology and
            video games. At first, as a kid, I wanted to become an architect or
            even a video-games developer, since I love playing it so much.
            However, as I get older, and trying out many different job fields, I
            realize that <em>nothing sparks me joy as much as programming. </em>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <p>
            With the technology world evolving extremely fast, to be able to
            learn something and create something at the same time, it honestly
            feels very fulfilling. My go to cuisine is Japanese cuisine, but I
            also love Thai food, the spicier the better, I love Jazz, RnB and
            Hip-Hop. When I'm not programming, eating or working, I try to stay
            in shape with badminton.
          </p>

          <blockquote>
            虎穴に入らずんば虎子を得ず. (nothing ventured, nothing gained). -
            Japanese Proverb
          </blockquote>
        </div>
      </section>
    </section>

    {/* <section id="two" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>My current stack</h2>
          <p>
            I am currently working as a full-stack developer, using{' '}
            <b>React, Node.js and C#</b>
          </p>
        </header>
        <div className="row">
          <div className="col-6 col-12-medium">
            <h4 className="icon solid fa-code"> Languages</h4>
            <ul className="alt">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Ruby</li>
              <li>HTML 5 & CSS 3</li>
              <li>C#</li>
            </ul>
            <h4 className="icon solid fa-code-branch"> Tools</h4>
            <ul className="alt">
              <li>Git/Github</li>
              <li>Azure Dev Ops</li>
              <li>VS code</li>
              <li>Contenful</li>
              <li>Wordpress</li>
              <li>Jira</li>
            </ul>
          </div>
          <div className="col-6 col-12-medium">
            <h4 className="icon solid fa-laptop"> Library and Framework</h4>
            <ul className="alt">
              <li>React.JS</li>
              <li>Node.JS</li>
              <li>Ruby on Rails</li>
              <li>.Net</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
            <h4 className="icon solid fa-database"> Database</h4>
            <ul className="alt">
              <li>PostgreSQL</li>
              <li>GraphQL</li>
              <li>SQL</li>
              <li>Knex</li>
            </ul>
          </div>
        </div>
      </div>
    </section> */}
    <section id="two" className="wrapper style6 special">
      <div className="inner">
        <header className="major">
          <h2>My Current Stack</h2>
          <p>
            I am working as a full-stack developer at the moment, using{' '}
            <b>React, Node.js and C#</b>
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h2>Language</h2>
            <p>
              Javascript
              <br />
              Typescript
              <br />
              Ruby
              <br />
              HTML 5 & CSS 3
              <br />
              C#
              <br />
            </p>
          </li>
          <li className="icon solid fa-code-branch">
            <h2>Tool</h2>
            <p>
              Git/Github
              <br />
              Azure Dev Ops
              <br />
              VS Code
              <br />
              Contentful
              <br />
              Wordpress
              <br />
              Jira
              <br />
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h2>Library and framework</h2>
            <p>
              React.JS
              <br />
              Node.JS
              <br />
              Ruby on Rails
              <br />
              .NET
              <br />
              Bootstrap
              <br />
              Material UI
              <br />
            </p>
          </li>
          <li className="icon solid fa-database">
            <h2>Database</h2>
            <p>
              PostgreSQL
              <br />
              GraphQL
              <br />
              SQL
              <br />
              Knes
              <br />
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Some of the works I did</h2>
        </header>
        <p>These were projects I enjoy building the most</p>
      </div>
    </section>
    <section id="three">
      <div className="portfolio">
        <div>
          <span>
            <img src={jungle} alt="" className="img" />
          </span>
          <div className="inner">
            <h2 className="major">Jungle</h2>
            <h4>
              An e-commerce Ruby on Rails app, offers a review system and
              purchase options with Stripes. Required Users to have an account
            </h4>
            <p>
              Made using React on Rails, with Postgres DB, Bootstrap and SASS
              for styling
            </p>
          </div>
          <a
            size="small"
            color="primary"
            href="https://github.com/tnathalang/jungle-rails"
            target="_blank"
          >
            Github Link
          </a>
        </div>
        <div>
          <span>
            <img src={pearup} alt="" className="img" />
          </span>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pear-UP!
            </Typography>
            <Typography>
              Matching users base on common interests and for scheduling a
              meetup with someone to do an activity within a coworker space on
              the fly type of app
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              Made using React on Rails, with Postgres DB, Bootstrap and SASS
              for styling
            </Typography>
          </CardContent>
          <CardActions>
            <a
              size="small"
              color="primary"
              href="https://github.com/tnathalang/Pear-Up-"
              target="_blank"
            >
              Github Link
            </a>
          </CardActions>
        </div>
        <div>
          <span>
            <img src={chatty} alt="" className="img" />
          </span>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Chatty
            </Typography>
            <Typography>
              A minimal chatting app built with React, support multiple users.
              You can also change colors of your name! no log ins needed
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              Made using React and SASS
            </Typography>
          </CardContent>
          <a
            size="small"
            color="primary"
            href="https://github.com/tnathalang/chatty"
            target="_blank"
          >
            Github Link
          </a>
        </div>
        <div>
          <span>
            <img src={tweeter} alt="" className="img" />
          </span>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tweeter
            </Typography>
            <Typography>
              A twitter clone project to help learn front-end without frameworks
              and css practice. You can send tweets and they are stored.
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              Made with JQuery Javascript, with Postgres DB, Bootstrap and CSS 3
              for styling
            </Typography>
          </CardContent>
          <a
            size="small"
            color="primary"
            href="https://github.com/tnathalang/tweeter"
            target="_blank"
          >
            Github Link
          </a>
        </div>
      </div>
    </section>
    <section className="spotlight">
      <div className="image">
        <img src={pic3} alt="" />
      </div>
      <div className="content">
        <h4>Let's talk</h4>
        <form
          method="POST"
          action="https://formspree.io/nathalang_t@hotmail.ca"
        >
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input
                type="text"
                name="demo-name"
                id="demo-name"
                defaultValue=""
                placeholder="Name"
              />
            </div>
            <div className="col-6 col-12-xsmall">
              <input
                type="email"
                name="demo-email"
                id="demo-email"
                defaultValue=""
                placeholder="Email"
              />
            </div>

            <div className="col-12">
              <textarea
                name="demo-message"
                id="demo-message"
                placeholder="Enter your message"
                rows="6"
              ></textarea>
            </div>
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
