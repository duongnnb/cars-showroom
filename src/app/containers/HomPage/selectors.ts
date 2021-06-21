import { IRootAppState } from './../../../typings/index';
import { createSelector } from 'reselect';

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopCars = createSelector(
  selectHomePage,
  (homePage) => homePage.topCars
);
