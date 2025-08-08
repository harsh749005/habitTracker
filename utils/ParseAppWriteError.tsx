const parseAppwriteError = (message: string): string => {
  if (message.includes("Invalid `email` param")) {
    return "Please enter a valid email address.";
  }
  if (message.includes("Invalid credentials")) {
    return "Incorrect email or password.";
  }
  if (message.includes("missing scope")) {
    return "You are not authorized. Please log in.";
  }
  if (message.includes("User already exists")) {
    return "An account with this email already exists.";
  }
  if (message.includes("Invalid `userId` param")) {
    return "User ID format is invalid.";
  }

  return "Something went wrong. Please try again.";
};
export default parseAppwriteError;
