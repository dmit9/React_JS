import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator} from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
/* let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
} */

/* let AuthRedirectComponent = withAuthRedirect(Dialogs); */

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);
