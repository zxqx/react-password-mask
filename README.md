# react-password-mask

Show/hide the contents of a password field.

## Installation

Install:

```sh
$ npm install react-password-mask
```

## Usage

```js
import PasswordMask from 'react-password-mask';
```

```js
<PasswordMask
  className="form-control"
  id="password"
  name="password"
  placeholder="Enter password"
  value={ui.password}
  onChange={this.handleChange.bind(this)}
  buttonStyles={{ width: '54px' }}
  hideOnTimeout={400}
/>
```

## License

MIT
