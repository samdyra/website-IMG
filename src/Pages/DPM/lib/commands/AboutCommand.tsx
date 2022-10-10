import { Command } from "../Command";
import kami from "../../../../assets/images/kami.jpg"
export default class AboutCommand extends Command {
  constructor() {
    super({ name: "tentang" });
  }

  render(): string | JSX.Element {
    return (
      <p>
        {`
██     ██ ███████ ██       ██████  ██████  ███    ███ ███████ 
██     ██ ██      ██      ██      ██    ██ ████  ████ ██      
██  █  ██ █████   ██      ██      ██    ██ ██ ████ ██ █████   
██ ███ ██ ██      ██      ██      ██    ██ ██  ██  ██ ██      
 ███ ███  ███████ ███████  ██████  ██████  ██      ██ ███████       

`}
          "Hi, kamu ga kena hack kok hahahha becandaa (lucu ga). welcome ke website DPM IMG-ITB!!\nkamu bisa klik tentang (nama anggota dpm) buat kepoin mereka!!"
        <img src={kami} style={{height:200}}></img>
      </p>
    );
  }
}
