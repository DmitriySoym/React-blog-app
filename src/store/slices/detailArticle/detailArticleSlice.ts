import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticle, INews } from "types";
import { spaceBlogApi } from "services";

interface IDetailPostState {
  post: IArticle;
  isLoading: boolean;
  error: null | string;
}

export const fetchDetailArticle = createAsyncThunk<IArticle, string, { rejectValue: string }>(
  "detailArticle/fetchDetailArticle",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceBlogApi.getArticleById(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IDetailPostState = {
  post: {} as IArticle | INews,
  isLoading: false,
  error: null,
};

const detailArticlelice = createSlice({
  name: "detailArticle",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchDetailArticle.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDetailArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });
    builder.addCase(fetchDetailArticle.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default detailArticlelice.reducer;
