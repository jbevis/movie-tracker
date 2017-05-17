import { connect } from 'react-redux'
import LoginPage from './LoginPage'

const mapStateToProps = (state) => {
  console.log('movieGridContainer', state.movieReducer)
  return { user: state.nameReducer }
}

// const mapDispatchToProps=(dispatch) => {
//   return {
//     handleFavorite: (text, id) => {
//       dispatch(addTodo(text, id))
//     }
//   }
// }

export default connect(mapStateToProps, null)(LoginPage)