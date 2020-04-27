import Ajv, { ErrorObject } from "ajv";
import { RollRequest } from "./json-schemas/types/rollRequest";
import * as rollRequestSchema from "./json-schemas/rollRequest.json";

const ajv = new Ajv();

const rollReqValidator = ajv.compile(rollRequestSchema);

type Result<T, E> = { ok: T; error: null } | { ok: null; error: E };

function ok<T, E>(value: T): Result<T, E> {
  return { ok: value, error: null };
}

function error<T, E>(err: E): Result<T, E> {
  return { ok: null, error: err };
}

export function validateRollRequest(
  json: unknown
): Result<RollRequest, ErrorObject[]> {
  if (rollReqValidator(json) === true) {
    return ok(json as RollRequest);
  }

  return error(rollReqValidator.errors!);
}
