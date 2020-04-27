import { Channel, Client, Message, TextChannel } from "discord.js";

export interface Options {
  token: string;
}

export class Messenger {
  private discord: Client;

  static async init(opts: Options): Promise<Messenger> {
    const messenger = new Messenger();
    await messenger.login(opts.token);

    return messenger;
  }

  private constructor() {
    this.discord = new Client();

    this.discord.once("ready", () => {
      console.log("Discord client ready");
    });
  }

  async send(channelId: string, message: string): Promise<Message> {
    const channel = await this.discord.channels.fetch(channelId);

    if (!channel) {
      throw new Error("No channel found with specified id");
    }
    if (!isTextChannel(channel)) {
      throw new Error("Non text channel");
    }

    return channel.send(message);
  }

  private async login(token: string): Promise<string> {
    return this.discord.login(token);
  }
}

function isTextChannel(channel: Channel): channel is TextChannel {
  return channel.type === "text";
}
