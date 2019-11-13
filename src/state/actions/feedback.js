import NavigationService from '<utils>/NavigationService';
import feedbackConstants from '<state>/constants/feedback';

export function feedbackAction(data, type) {
  const feedback = status => {
    return { type: feedbackConstants[type], status };
  };

  return async dispatch => {
    dispatch(feedback(data));
    NavigationService.navigate('Feedback');
  };
}
