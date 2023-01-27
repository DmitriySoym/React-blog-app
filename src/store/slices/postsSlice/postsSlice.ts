import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IButton, IOptionDateSort, IPost, ISelectOption, SortByDate, TabOne } from "types";
import { spaceBlogApi } from "services";

interface ISearchParams {
  searchQuery: string | null;
}

interface ISortParams {
  sortQuery: string | null;
}

interface IPostState {
  posts: IPost[];
  page: number;
  isLoading: boolean;
  error: null | string;
  searchParams: ISearchParams;
  endPoint: TabOne;
}

export const optionDate: IOptionDateSort[] = [
  { value: SortByDate.DAY, label: "Day" },
  { value: SortByDate.WEEK, label: "Week" },
  { value: SortByDate.MONTH, label: "Month" },
  { value: SortByDate.YEAR, label: "Year" },
];

export const buttons: IButton[] = [
  { id: "0", title: "Day" },
  { id: "1", title: "Week" },
  { id: "2", title: "Month" },
  { id: "3", title: "Year" },
];

export const optionSortByTitle: ISelectOption[] = [
  { value: "", label: "Set article sorting" },
  { value: "title", label: "Title (A-Z)" },
  { value: "title:DESC", label: "Title (Z-A)" },
];

export const fetchAllPosts = createAsyncThunk<
  IPost[],
  { endpoint: string; page: number; query: string; sortParams: string },
  { rejectValue: string }
>("post/fetchAllPosts", async (params, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getAllPostsStartPage(
      params.page,
      params.query,
      params.sortParams,
      params.endpoint,
    );
  } catch (error) {
    return rejectWithValue("error");
  }
});

const initialState: IPostState = {
  posts: [],
  page: 0,
  isLoading: false,
  error: null,
  searchParams: {
    searchQuery: null,
  },
  endPoint: TabOne.ARTICLE,
};

const articlesSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchParams.searchQuery = payload.searchQuery;
    },
    setEndPoint: (state, { payload }) => {
      state.endPoint = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default articlesSlice.reducer;

export const { setSearchQuery, setEndPoint, setPage } = articlesSlice.actions;
