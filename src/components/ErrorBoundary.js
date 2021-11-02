import { Component } from "react";

class ErrorBoundary extends Component {
  //componentDidCatch triggered whenever a child coponent encounters an error
  //componentDidCatch method is the ErrorBoundary
  componentDidCatch() {}
  //add render of this props children so that I can wrap <ErrorBoundary> around any component that should be protected
  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
