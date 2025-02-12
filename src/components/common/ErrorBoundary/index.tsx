import { Component, ErrorInfo, ReactNode } from "react";
import {ErrorBox,ReloadButton} from "./style";

interface Props {
  children: ReactNode;
  text: string;
  showButton?: boolean;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorBox>
          <div style={{textAlign:"center"}}>
          <p>{this.props.text}</p>
          {this.props.showButton && (
            <ReloadButton onClick={() => {
              this.handleReset();
              window.location.reload(); 
            }}>
              다시 시도
            </ReloadButton>
          )}
          </div>
        </ErrorBox>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
