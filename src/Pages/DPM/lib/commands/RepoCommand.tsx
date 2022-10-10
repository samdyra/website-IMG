import { Command } from "../Command";

export default class RepoCommand extends Command {
  constructor() {
    super({ name: "repo" });
  }

  render(): string | JSX.Element {
    return (
      <p>
        cekidot kodingan kami dan support kami ^^{" "}
        <a
          rel="noreferrer"
          target="_blank"
          className="underline font-semibold"
          href="https://github.com/samdyra/website-IMG"
        >
          disiniiii
        </a>
      </p>
    );
  }
}
