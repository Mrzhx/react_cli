import { useNavigate } from "react-router-dom";

function Navigate(path: string, replace: boolean = false) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(path, { replace: replace });
  }
  handleClick()
}



export { Navigate }
