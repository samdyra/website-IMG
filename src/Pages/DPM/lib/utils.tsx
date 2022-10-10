import style from "../index.module.scss"

export function getCommandName(args: string[]) {
  const [_commandName, ...rest] = args;

  const isSudo = _commandName === "sudo" && rest.length >= 1;
  const commandName = isSudo ? rest[0] : _commandName;
  const commandArgs = isSudo ? rest.slice(1, rest.length) : rest;

  return { isSudo, commandArgs, commandName };
}

export function classNames(...classNames: unknown[]) {
  return classNames.filter(Boolean).join(" ");
}

export interface CommandOutputOptions {
  command: string;
}

export type CommandOutputFunc = (options: CommandOutputOptions) => JSX.Element | string;

export const initBanner: CommandOutputFunc = () => {
  const {title} = style
  
  return (
  <p className="my-3 -ml-9">
    <span className={title}>
      {`

██████╗ ███████╗██╗    ██╗ █████╗ ███╗   ██╗    ██████╗ ███████╗██████╗ ██╗    ██╗ █████╗ ██╗  ██╗██╗██╗      █████╗ ███╗   ██╗
██╔══██╗██╔════╝██║    ██║██╔══██╗████╗  ██║    ██╔══██╗██╔════╝██╔══██╗██║    ██║██╔══██╗██║ ██╔╝██║██║     ██╔══██╗████╗  ██║
██║  ██║█████╗  ██║ █╗ ██║███████║██╔██╗ ██║    ██████╔╝█████╗  ██████╔╝██║ █╗ ██║███████║█████╔╝ ██║██║     ███████║██╔██╗ ██║
██║  ██║██╔══╝  ██║███╗██║██╔══██║██║╚██╗██║    ██╔═══╝ ██╔══╝  ██╔══██╗██║███╗██║██╔══██║██╔═██╗ ██║██║     ██╔══██║██║╚██╗██║
██████╔╝███████╗╚███╔███╔╝██║  ██║██║ ╚████║    ██║     ███████╗██║  ██║╚███╔███╔╝██║  ██║██║  ██╗██║███████╗██║  ██║██║ ╚████║
╚═════╝ ╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
                                                                                                                               
███╗   ███╗ █████╗ ██╗  ██╗ █████╗ ███████╗██╗███████╗██╗    ██╗ █████╗                                                        
████╗ ████║██╔══██╗██║  ██║██╔══██╗██╔════╝██║██╔════╝██║    ██║██╔══██╗                                                       
██╔████╔██║███████║███████║███████║███████╗██║███████╗██║ █╗ ██║███████║                                                       
██║╚██╔╝██║██╔══██║██╔══██║██╔══██║╚════██║██║╚════██║██║███╗██║██╔══██║                                                       
██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██║███████║██║███████║╚███╔███╔╝██║  ██║                                                       
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝                                                       
                                                                                                                               
`}
    </span>
    <span className="block mt-3 font-code">
      {"ALERTA!!!! WEBSITE IMG-ITB DI HACK DPM!!! KETIK 'tolong' UNTUK INFORMASI LEBIH LANJUT"}
    </span>
  </p>
)}

export const commandNotFound: CommandOutputFunc = ({ command }) => (
  <p>{`zsh: command not found: ${command}. Please try a different command.`}</p>
);
