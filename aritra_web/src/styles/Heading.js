import styled from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fontSizes } = theme;

const Heading = styled.h3`
	position: relative;
	display: flex;
	align-items: center;
	margin: 10px 0 40px;
	width: 100%;
	white-space: nowrap;
	font-size: ${fontSizes.h3};
	${media.tablet`font-size: 24px;`};

	&:before {
		counter-increment: section;
		margin-right: 10px;
		font-weight: normal;
		color: ${colors.green};
		font-size: ${fontSizes.xl};
		position: relative;
		bottom: 4px;
		${media.tablet`font-size: ${fontSizes.lg};`};
	}
`;

export default Heading;
