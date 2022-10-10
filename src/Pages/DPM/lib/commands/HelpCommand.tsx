import { Command, CommandRenderOptions } from "../Command";

export default class HelpCommand extends Command {
  constructor() {
    super({ name: "tolong" });
  }

  render({ commands }: CommandRenderOptions): string | JSX.Element {
    return (
      <div className="font-semibold font-code">
        <p className="font-semibold font-code">Hello world, welcome!</p>

        <div className="mt-3">
          <p className="underline font-semibold font-code">Available commands</p>

          <ul className="flex flex-col font-semibold font-code">
            {commands.map((command) => (
              <li key={command}>{command}</li>
            ))}
          </ul>
        </div>

        <p className="flex flex-col mt-5 font-semibold font-code">
          <span>
            <kbd>[tab]</kbd>: complete command
          </span>
          <span>
            <kbd>[ctrl+l]</kbd>: clear terminal
          </span>
          <span>
            <kbd>[arrow-up]</kbd>: previous used command
          </span>
          <span>
            <kbd>[arrow-down]</kbd>: next used command
          </span>
        </p>
      </div>
    );
  }
}
