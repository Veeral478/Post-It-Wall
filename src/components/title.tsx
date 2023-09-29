import React from 'react';

interface TitleProps {
  // Define your prop types here
}

// Use the React.FC type to define a functional component
export const Title: React.FC<TitleProps> = () => {
  return (
    <aside>
      <h2>
        {"Post-It Board"}
      </h2>
      <p>
        {"Welcome! Have something on your mind? Post it on our public wall for everyone to see!"}
      </p>
    </aside>
  );
};
