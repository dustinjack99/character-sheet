import { Router } from "express";
import { Messenger } from "./messenger";
import { validateRollRequest } from "./validation";

export function makeApiRouter(messenger: Messenger, channelId: string): Router {
  const router = Router();

  router.post("/roll", async (req, res) => {
    const valid = validateRollRequest(req.body);

    if (valid.error) {
      return res.status(400).json({ errors: valid.error });
    }

    const rollRequest = valid.ok;
    const roll = rollD10s(rollRequest.dice);
    await messenger.send(channelId, rollRequest.message + " " + showRoll(roll));

    return res.status(200).json({ roll });
  });

  return router;
}

function rollD10s(n: number): number[] {
  const result = [];
  for (let i = 0; i < n; i++) {
    const die = Math.floor(Math.random() * 10) + 1;
    result.push(die);
  }

  return result;
}

function showRoll(roll: number[]): string {
  return `[ ${roll.join(", ")} ]`;
}
