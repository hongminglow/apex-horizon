import { Component, type ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  sectionName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/** Scoped error boundary for individual dashboard sections */
export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(`[ErrorBoundary] ${this.props.sectionName}:`, error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-error/20 bg-error/5 min-h-[200px] animate-fade-in">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-error/10">
            <AlertTriangle className="w-6 h-6 text-error" />
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-primary mb-1">Something went wrong</h3>
            <p className="text-xs text-muted max-w-[240px]">
              {this.props.sectionName ? `The "${this.props.sectionName}" section` : 'This section'} encountered an error.
            </p>
          </div>
          <button
            type="button"
            onClick={this.handleRetry}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-error/10 text-error hover:bg-error/20 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
