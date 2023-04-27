import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
function RequireAuth({ user, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
    return;
  }, [user]);
  return children;
}
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(RequireAuth);
