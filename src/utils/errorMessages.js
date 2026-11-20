// Firebase gives error codes like "auth/invalid-credential".
// This turns them into simple messages a normal user understands.
export function getErrorMessage(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Please login instead.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Wrong email or password.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment and try again.";
    case "auth/network-request-failed":
      return "Network error. Check your internet connection.";
    case "auth/configuration-not-found":
    case "auth/operation-not-allowed":
      return "Email/Password sign-in is not enabled in the Firebase Console.";
    default:
      return "Something went wrong (" + code + "). Please try again.";
  }
}
