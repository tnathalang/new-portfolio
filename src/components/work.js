import React, { useState } from 'react';
import Chatty from '../assets/images/chatty.png';
import pearup from '../assets/images/pearup.png';
import jungle from '../assets/images/jungle.png';
import tweeter from '../assets/images/tweeter.png';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    height: 220,
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <section id="three" className="wrapper style6 special">
      <div className="inner">
        <header className="major">
          <h2>My Current Stack</h2>
          <p>
            I am currently working as a full-stack developer, using{' '}
            <b>React, Node.js and C#</b>
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h2>Languages</h2>
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
            <h2>Tools</h2>
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
            <h2>Library and frameworks</h2>
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
    // <div className="wrapper style3 special" id="#three">
    //   <header>
    // 	<h4>Portfolio</h4>
    //      <p>Here are some of the stuff I did</p>
    //     </header>
    //     <div className="grid-container">
    //       <div className="box">
    //         <Card className={classes.card} href="#open-modal">
    //           <CardActionArea>
    //             <CardMedia
    //               className={classes.media}
    //               image={pearup}
    //               title="Social Media for introverts"
    //             />
    //             <div id="open-modal" class="modal-window">
    //               <div>
    //                 <a href="#" title="Close" class="modal-close">
    //                   Close
    //                 </a>
    //                 <h1>Voilà!</h1>
    //                 <div>
    //                   A CSS-only modal based on the :target pseudo-class. Hope
    //                   you find it helpful.
    //                 </div>
    //               </div>
    //             </div>
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="h2">
    //                 Pear-UP!
    //               </Typography>
    //               <Typography>
    //                 Matching users base on common interests and for scheduling a
    //                 meetup with someone to do an activity within a coworker
    //                 space on the fly type of app
    //               </Typography>
    //               <Typography
    //                 variant="body3"
    //                 color="textSecondary"
    //                 component="p"
    //               >
    //                 Made using React on Rails, with Postgres DB, Bootstrap and
    //                 SASS for styling
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>

    //           <CardActions>
    //             <Button
    //               size="small"
    //               color="primary"
    //               href="https://github.com/tnathalang/Pear-Up-"
    //               target="_blank"
    //             >
    //               Github Link
    //             </Button>
    //           </CardActions>
    //         </Card>
    //       </div>
    //       <div className="box">
    //         <Card className={classes.card}>
    //           <CardActionArea>
    //             <CardMedia
    //               className={classes.media}
    //               image={jungle}
    //               title="eCommerce Plateform"
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="h2">
    //                 Jungle
    //               </Typography>
    //               <Typography>
    //                 An e-commerce Ruby on Rails app, offers a review system and
    //                 purchase options with Stripes. Required Users to have an
    //                 account
    //               </Typography>
    //               <Typography
    //                 variant="body3"
    //                 color="textSecondary"
    //                 component="p"
    //               >
    //                 Made using React on Rails, with Postgres DB, Bootstrap and
    //                 SASS for styling
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //           <CardActions>
    //             <Button
    //               size="small"
    //               color="primary"
    //               href="https://github.com/tnathalang/jungle-rails"
    //               target="_blank"
    //             >
    //               Github Link
    //             </Button>
    //           </CardActions>
    //         </Card>
    //       </div>
    //       <div className="box">
    //         <Card className={classes.card}>
    //           <CardActionArea>
    //             <CardMedia
    //               className={classes.media}
    //               image={Chatty}
    //               title="Chatting app"
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="h2">
    //                 Chatty
    //               </Typography>
    //               <Typography>
    //                 A minimal chatting app built with React, support multiple
    //                 users. You can also change colors of your name! no log ins
    //                 needed
    //               </Typography>
    //               <Typography
    //                 variant="body3"
    //                 color="textSecondary"
    //                 component="p"
    //               >
    //                 Made using React and SASS
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //           <CardActions>
    //             <Button
    //               size="small"
    //               color="primary"
    //               href="https://github.com/tnathalang/chatty"
    //               target="_blank"
    //             >
    //               Github Link
    //             </Button>
    //           </CardActions>
    //         </Card>
    //       </div>
    //       <div className="box">
    //         <Card className={classes.card}>
    //           <CardActionArea>
    //             <CardMedia
    //               className={classes.media}
    //               image={tweeter}
    //               title="A Twitter clone"
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="h2">
    //                 Tweeter
    //               </Typography>
    //               <Typography>
    //                 A twitter clone project to help learn front-end without
    //                 frameworks and css practice. You can send tweets and they
    //                 are stored.
    //               </Typography>
    //               <Typography
    //                 variant="body3"
    //                 color="textSecondary"
    //                 component="p"
    //               >
    //                 Made with Ruby on Rails, with Postgres DB, Bootstrap and CSS
    //                 3 for styling
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //           <CardActions>
    //             <Button
    //               size="small"
    //               color="primary"
    //               href="https://github.com/tnathalang/tweeter"
    //               target="_blank"
    //             >
    //               Github Link
    //             </Button>
    //           </CardActions>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default MediaCard;
