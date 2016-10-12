const inputStyles = {
  width: '100%',
  display: 'block'
};

const hiddenInputStyles = {
  ...inputStyles,
  display: 'none'
};

const buttonStyles = {
  position: 'absolute',
  top: '50%',
  right: '6px',
  marginTop: '-13px',
  padding: '4px 10px',
  background: '#e2e2e2',
  borderRadius: '2px',
  color: '#000',
  textAlign: 'center',
  textDecoration: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  userSelect: 'none'
};

export { inputStyles, hiddenInputStyles, buttonStyles };
