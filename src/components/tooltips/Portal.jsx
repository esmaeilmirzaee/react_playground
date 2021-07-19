import ReactDOM from 'react-dom';

export function Portal(props) {
  return ReactDOM.createPortal(props.children, document.body);
}
