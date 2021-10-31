import * as actions from "../types/parcel";

const initialState = {
  isLoading: false,
  parcels: [],
  parcelsBiker: [],
  errorMessage: "",
  showSideContainer: false,
  showEditStatus: false,
  editData: {
    id: "",
    status: "",
  },
};

export const parcel = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.FIND_ALL_BIKER_PARCEL_REQUEST:
      return { ...state, isLoading: true };

    case actions.FIND_ALL_BIKER_PARCEL_REQUEST_SUCCESS:
      const parcelsBikerData = action.data;
      return { ...state, isLoading: false, parcelsBiker: parcelsBikerData };

    case actions.FIND_ALL_BIKER_PARCEL_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "No parcels availables",
      };

    case actions.FIND_ALL_PARCEL_REQUEST:
      return { ...state, isLoading: true };

    case actions.FIND_ALL_PARCEL_REQUEST_SUCCESS:
      const parcelsData = action.data;
      return { ...state, isLoading: false, parcels: parcelsData };

    case actions.FIND_ALL_PARCEL_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "No parcels availables",
      };

    case actions.SHOW_CREATE_FORM:
      return {
        ...state,
        showSideContainer: true,
        showEditStatus: false,
      };

    case actions.HIDE_SIDE_CONTAINER:
      return {
        ...state,
        showSideContainer: false,
        showEditStatus: false,
        errorMessage: '',
      };

    case actions.SHOW_EDIT_FORM:
      const editData = action.data;
      return {
        ...state,
        showSideContainer: true,
        showEditStatus: true,
        editData: { id: editData.id, status: editData.status },
      };

    case actions.UPDATE_PARCEL_REQUEST:
      return { ...state, isLoading: true };

    case actions.UPDATE_PARCEL_REQUEST_SUCCESS:
      const parcelDataUpdate = action.data;
      
      const parcelList:any = state.parcels;
      const parcelBikerList:any = state.parcelsBiker;

      let parcelToUpdate = parcelList.findIndex(
        (e: any) => e.id === parcelDataUpdate.id
      )
      let parcelBikerToUpdate = parcelBikerList.findIndex(
        (e: any) => e.id === parcelDataUpdate.id
      );
      
      parcelList[parcelToUpdate] = parcelDataUpdate;
      parcelBikerList[parcelBikerToUpdate] = parcelDataUpdate;
      return {
        ...state,
        isLoading: false,
        parcels: [...parcelList],
        parcelsBiker: [...parcelBikerList]
      };

    case actions.UPDATE_PARCEL_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "The update operation cannot be completed.",
      };

    default:
      return state;
  }
};

export default parcel;
