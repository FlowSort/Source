import { Component, type ErrorInfo, type ReactNode } from "react";

export class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state={error:null as Error|null};
  static getDerivedStateFromError(error:Error){return {error};}
  componentDidCatch(error:Error,info:ErrorInfo){console.error("FlowSort UI error",error,info);}
  render(){if(this.state.error)return <section className="ui-error"><div className="ui-error-icon">!</div><h2>Esta sección no pudo cargarse</h2><p>Reintentar para recuperar la vista.</p><button onClick={()=>this.setState({error:null})}>Reintentar</button></section>;return this.props.children;}
}
