import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  //componentDidCatch triggered whenever a child coponent encounters an error
  //componentDidCatch method is the ErrorBoundary
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  //add render of this props children so that I can wrap <ErrorBoundary> around any component that should be protected
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
