import * as types from './types';
export default {
  showSlider:({commit,state})=>{
    commit(types.SHOW_SLIDER);
  },
  hideSlider:({commit,state})=>{
    commit(types.HIDE_SLIDER);
  },
  showLoading:({commit,state})=>{
    commit(types.SHOW_LOADING);
  },
  hideLoading:({commit,state})=>{
    commit(types.HIDE_LOADING);
  }
}