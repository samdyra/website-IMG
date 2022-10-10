import { Command } from "../Command";
import kreator from "../../.././../assets/images/kreator.jpg"
export default class WhoamiCommand extends Command {
  private WHOAMI = "kami dari GRAFIS X IMGHacker69xxx";

  constructor() {
    super({ name: "para-kreator" });
  }

  render(): string | JSX.Element {
    return (
      <>
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
        href="https://www.instagram.com/imgitb/"
      >
        {this.WHOAMI}
      </a>
      <img src={kreator} style={{width: 600}} ></img>
      </>
    );
  }
}
