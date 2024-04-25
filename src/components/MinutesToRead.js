import React from "react";

const MinutesToRead = ({ minutes }) => {
  // Define two emojis: a coffee cup and a bento box.
  const coffeeEmoji = "☕️";
  const bentoEmoji = "🍱";

  // Declare two variables, emoji and text, which we will use to store the appropriate emoji and text based on the number of minutes.
  let emoji;
  let text;

  // Check if the number of minutes is less than 30.
  if (minutes < 30) {
    // Calculate the number of coffee cups to display.
    const coffeeCups = Math.ceil(minutes / 5);

    // Set the emoji to the appropriate number of coffee cups.
    emoji = coffeeEmoji.repeat(coffeeCups);

    // Set the text to the number of minutes followed by "min read".
    text = `${emoji} ${minutes} min read`;
  } else {
    // Calculate the number of bento boxes to display.
    const bentoBoxes = Math.ceil(minutes / 10);

    // Set the emoji to the appropriate number of bento boxes.
    emoji = bentoEmoji.repeat(bentoBoxes);

    // Set the text to the number of minutes followed by "min read".
    text = `${emoji} ${minutes} min read`;
  }

  // Return the text with the appropriate emoji.
  return <span>{text}</span>;
};

// Export the MinutesToRead component so that it can be used in other parts of the application.
export default MinutesToRead;
