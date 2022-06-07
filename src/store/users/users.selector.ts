import { createSelector } from "reselect";

export const usersSelector = createSelector(
  (state: any) => state.users,
  (users: any) => {
    return {
      users: users.users,
      countries: users.countries,
    };
  }
);
