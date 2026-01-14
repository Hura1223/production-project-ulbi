import type { CounterSchema } from "./model/types/counterState";
import { Counter } from "./ui/Counter";
import { counterActions, counterReducer } from "./model/slice/counterSlice";

export { Counter, CounterSchema, counterActions, counterReducer };
