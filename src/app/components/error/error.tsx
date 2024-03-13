import React, { ErrorInfo } from 'react';

interface CustomErrorProps {
  children: React.ReactNode;
}

export default class CustomErrorComponent extends React.Component<CustomErrorProps, { hasError: boolean }> {
  constructor(props: CustomErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <>{this.props.children}</>;
  }
}
