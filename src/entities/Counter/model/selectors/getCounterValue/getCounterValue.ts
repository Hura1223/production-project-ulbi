import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/counterState";

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
