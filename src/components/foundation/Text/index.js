import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`;

export function Text({
  tag, variant, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};