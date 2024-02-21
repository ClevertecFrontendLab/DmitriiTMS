import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';
import { Action, Location } from 'history';
import { AppDispatch } from '@redux/configure-store';

interface LocationState {
  location?: Location | null | undefined;
  action?: Action | null;
}

export const useRedirect = (
  expectedLocation: string,
  expectedPrevLocation: string,
  stageNumber: string,
  errorBack?: string,
  location?: LocationState[],
  currentLocation?: string
) => {
 

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const sideLocation = '/result/error-check-email'
    
    if (!currentLocation || !location) {
      return;
    }

    if (currentLocation !== expectedLocation ) {
      return;
    }
    
    if (location.length > 1) {
      const currentLocationPath = location[location.length - 1].location?.pathname;
      if(currentLocationPath === sideLocation) {
        return;
      }
      if (currentLocationPath !== expectedPrevLocation && currentLocationPath !== errorBack) {
        dispatch(push('/auth'));
      }
    } else {
      const stage = sessionStorage.getItem('stage');
      if (stage !== stageNumber) {
        dispatch(push('/auth'));
      }
    }
  }, [dispatch, location, currentLocation, errorBack, expectedLocation, expectedPrevLocation, stageNumber]);
};
