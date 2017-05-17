import * as types from './types';
export default {
  [types.SHOW_SLIDER]:(state)=>{
    state.bSlider = true;
  },
  [types.HIDE_SLIDER]:(state)=>{
    state.bSlider = false;
  },
  [types.SHOW_LOADING]:(state)=>{
    state.bLoading = true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.bLoading = false;
  }
}