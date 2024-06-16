import { ReactNode, Component } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/navbar";
import { Article } from "./components/Article/article";
export class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Navbar />
        <section className="articles">
          <Article title={"Design Dashboards"} provider="Nasa" description='Lorem' />
          <Article title={"Exemplo 2"} provider="Spacenews" description="Lorem"/>
        </section>
      </>
    );
  }
}
