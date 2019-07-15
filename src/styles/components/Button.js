import styled, { css } from 'styled-components'

const size = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
}

const color = {
  default: css`
    background-color: #7289da;
    color: #fff;

    &:hover {
      background: #5f73bc;
    }
  `,
  danger: css`
    background-color: #e04848;

    &:hover {
      background-color: #a43d3d;
    }
  `,
  gray: css`
    background-color: #b9bbbe;
    color: #666;

    &:hover {
      background-color: #999;
    }
  `,
}

const Button = styled.button.attrs({
  type: 'button',
})`
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  transition: 0.3ms ease-in;

  ${props => size[props.size || 'default']}
  ${props => color[props.color || 'default']};
`

export default Button
