import {Statuses} from "../../utils/variable";

export const selectLoading=state=>state.loading.articleList
export const selectStatusRequest= state=>state.loading.request.status===Statuses.REQUEST
export const selectStatusFaiLure= state=>state.loading.request.error