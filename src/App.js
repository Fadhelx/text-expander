import React, { useState } from 'react';
import './index.css';

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past
        the stars and exploring new worlds. It's the stuff of dreams
        and science fiction, but believe it or not, space travel is a
        real thing. Humans and robots are constantly venturing out
        into the cosmos to uncover its secrets and push the boundaries
        of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and
        international space organizations. And while it's not always
        easy (or cheap), the results are out of this world. Think
        about the first time humans stepped foot on the moon or when
        rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={false} className="box">
        Space missions have given us incredible insights into our
        universe and have inspired future generations to keep reaching
        for the stars. Space travel is a pretty cool thing to think
        about. Who knows what we'll discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  className,
  collapsedNumWords = 10,
  expanded = false,
  expandButtonText = 'Show text',
  collapseButtonText = 'Collapse text',
  buttonColor = '#1110ff',
}) {
  const [expand, setExpand] = useState(expanded);
  const handleOnClick = () => {
    setExpand(!expand);
  };
  const text = React.Children.map(children, (child) => child).join(
    ''
  );
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const splitedWords = words.slice(0, collapsedNumWords).join(' ');

  return !expand ? (
    <div>
      <p className={className}>
        {splitedWords}...{' '}
        <span style={{ color: buttonColor }} onClick={handleOnClick}>
          {expandButtonText}
        </span>
      </p>
    </div>
  ) : (
    <p className={className}>
      {children}{' '}
      <span style={{ color: buttonColor }} onClick={handleOnClick}>
        {collapseButtonText}
      </span>
    </p>
  );
}
