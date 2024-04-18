import { RootState } from 'src/redux/slices/store';

export const selectFilter = (state: RootState) => state.filter;
