import { Component, ReactNode } from "react";
import dashboardImg from "../../assets/images/dashboardImg.png";
import "./styles.css";

type Props = {
  title: string;
  provider:string
  description:string
};

export class Article extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }


  render(): ReactNode {
    return (
      <article className="article">
        <img src={dashboardImg} alt="article" />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>
            {this.props.description}
          </p>
        </div>
      </article>
    );
  }
}
