import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore, AppDispatch } from "./config/store";
import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
} from "./config/StateSchema";

export {
  StateSchema,
  StoreProvider,
  createReduxStore,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfig,
};
