import feedbackConstants from '<state>/constants';

const FEEDBACK_INITIAL_STATE = {
  type: 'error',
  title: '',
  content: '',
  share: true,
  shareMessage: {
    title: '',
    message: ''
  },
  onErrorClose: () => this.props.navigation.navigate('Home'),
  onSuccessClose: () => this.props.navigation.navigate('Home'),
  buttonText: 'Done'
};

export function feedback(state = FEEDBACK_INITIAL_STATE, action) {
  switch (action.type) {
    case feedbackConstants.FEEDBACK_SUCCESS:
      return {
        ...state,
        ...action.status.data,
        type: 'success'
      };
    case feedbackConstants.FEEDBACK_ERROR:
      return {
        ...state,
        ...action.status.data,
        type: 'error'
      };
    case feedbackConstants.FEEDBACK_REWARD:
      return {
        ...state,
        ...action.status.data,
        type: 'reward'
      };
    default:
      return state;
  }
}
