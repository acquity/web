/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const securities = createSlice({
  name: 'securities',
  initialState: {
    securities: [],
    currentSelectedBuySecurity: null,
    currentSelectedSellSecurity: null
  },
  reducers: {
    updateSecurities: (state, { payload }) => {
      state.securities = payload;
      if (payload.length > 0) {
        const [firstSecurity] = payload;
        if (!state.currentSelectedBuySecurity) {
          state.currentSelectedBuySecurity = firstSecurity;
        }
        if (!state.currentSelectedSellSecurity) {
          state.currentSelectedSellSecurity = firstSecurity;
        }
      }
    },
    setCurrentSelectedBuySecurity: (state, { payload }) => {
      state.currentSelectedBuySecurity = payload;
    },
    setCurrentSelectedSellSecurity: (state, { payload }) => {
      state.currentSelectedSellSecurity = payload;
    },
    updateSecurityMarketPrice: (state, { payload }) => {
      const { id, marketPrice } = payload;
      state.securities.find(x => x.id === id).marketPrice = marketPrice;
    }
  }
});

export const {
  updateSecurities,
  setCurrentSelectedBuySecurity,
  setCurrentSelectedSellSecurity,
  updateSecurityMarketPrice
} = securities.actions;

export default securities.reducer;
