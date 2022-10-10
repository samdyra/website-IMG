import { Command } from "../Command";
import { Navigate } from "react-router-dom";

export default class DateCommand extends Command {
  constructor() {
    super({ name: "exit" });
  }

  render(): string | JSX.Element {
    const date = new Date();

    return (
      <Navigate to="/"></Navigate>
    );
  }
}
