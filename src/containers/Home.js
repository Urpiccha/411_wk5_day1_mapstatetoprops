import { connect } from "react-redux";
import Home from "../components/Home";
import { bindActionCreators } from "redux";
import { addCar, removeCar } from "../redux/actions";

const mapStateToProps = state => {
	return {
		cars: state.cars
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addCar, removeCar }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
