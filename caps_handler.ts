function checkAndFixCaps(message: string): string | null {
  let uppercaseCount = 0;
  let letterCount = 0;
  for (const char of message) {
    if (/[a-zA-Z]/.test(char)) {
      letterCount++;
      if (char === char.toUpperCase()) {
        uppercaseCount++;
      }
    }
  }

  if (letterCount > 0 && (uppercaseCount / letterCount) > 0.7) {
    return message.toLowerCase();
  } else {
    return null; // Or return the original message if no change is needed
  }
}

// Example usage:
const testMessage1 = "HELLO EVERYONE!";
const testMessage2 = "Hello there.";

const fixedMessage1 = checkAndFixCaps(testMessage1);
const fixedMessage2 = checkAndFixCaps(testMessage2);

if (fixedMessage1) {
  console.log(`Original: ${testMessage1}, Fixed: ${fixedMessage1}`);
}

if (fixedMessage2) {
  console.log(`Original: ${testMessage2}, Fixed: ${fixedMessage2}`);
}
