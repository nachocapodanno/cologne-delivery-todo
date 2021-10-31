import * as actionTypes from "../types/parcel";
import parcelService from "../../services/parcel";

export const findAllByBikerId = (id: any) => {
  const request = () => {
    return { type: actionTypes.FIND_ALL_BIKER_PARCEL_REQUEST };
  };
  const success = (data: any) => {
    return { type: actionTypes.FIND_ALL_BIKER_PARCEL_REQUEST_SUCCESS, data };
  };
  const failure = (error: any) => {
    return { type: actionTypes.FIND_ALL_BIKER_PARCEL_REQUEST_FAIL, error };
  };

  return (dispatch: any) => {
    dispatch(request());

    parcelService.findAllByBikerId(id).then(
      (data: any) => {
        dispatch(success(data));
      },
      (error: any) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}

export const findAll = () => {
  const request = () => {
    return { type: actionTypes.FIND_ALL_PARCEL_REQUEST };
  };
  const success = (data: any) => {
    return { type: actionTypes.FIND_ALL_PARCEL_REQUEST_SUCCESS, data };
  };
  const failure = (error: any) => {
    return { type: actionTypes.FIND_ALL_PARCEL_REQUEST_FAIL, error };
  };

  return (dispatch: any) => {
    dispatch(request());

    parcelService.findAll().then(
      (data: any) => {
        dispatch(success(data));
      },
      (error: any) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}

export const handleCreate = () => {
  return { type: actionTypes.SHOW_CREATE_FORM };
}

export const handleEdit = (data: any) => {
  return { type: actionTypes.SHOW_EDIT_FORM, data };
}

export const hideSideContainer = () => {
  return { type: actionTypes.HIDE_SIDE_CONTAINER };
}

export const update = (params: any) => {
  const request = (data: any) => {
    return { type: actionTypes.UPDATE_PARCEL_REQUEST, data };
  };
  const success = (data: any) => {
    return { type: actionTypes.UPDATE_PARCEL_REQUEST_SUCCESS, data };
  };
  const failure = (error: any) => {
    return { type: actionTypes.UPDATE_PARCEL_REQUEST_FAIL, error };
  };

  return (dispatch: any) => {
    dispatch(request({ params }));
    
    parcelService.update({params}).then(
      (data: any) => {
        dispatch(success(data));
        dispatch(hideSideContainer());
      },
      (error: any) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}