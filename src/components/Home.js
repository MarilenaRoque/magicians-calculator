import React from 'react';

export default function Home() {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    margin: 'auto',
  };
  const textStyle = {
    fontSize: '25px',
  };
  return (
    <div style={homeStyle}>
      <h2 style={textStyle}>
        Welcome to Math Magicians!
      </h2>
      <p style={textStyle}>
        Math magicians is the tool that you needed to solve your mathematical problems in an easy,
        faster and fun way. We want to help you and guide you through the Magic Math Land
        and make you explore the best mathematical experiences.
      </p>
      <p style={textStyle}>
        Okay...I admit that was corny, but we all know math isn’t always the most exciting
        subject to teach. That means you have to find strategies to make lessons fun,
        like gamification in the classroom, math puzzles or -- in this case -- math jokes
        that will lighten the mood and brighten the vibe in your classroom.
      </p>
    </div>
  );
}
