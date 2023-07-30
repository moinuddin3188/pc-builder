import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "../redux/features/pcBuilder/pcBuilderSlice";

export default configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});
