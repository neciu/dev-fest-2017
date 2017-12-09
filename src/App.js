import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	${props => props.color ? `background-color: ${props.color}` : ''};
	
	${props => props.size ? `flex: ${props.size}` : ''};
	
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	align-items: ${props => props.align || 'stretch'};
	${props => props.self ? `align-self: ${props.self}` : ''};
	${props => props.justify ? `justify-content: ${props.justify}` : ''};
`;

const Row = props => <Box {...props} direction="row"/>;

const Column = props => <Box {...props} direction="column"/>;

export default function App() {
	return (
		<Column>
			<Column align="center">
				<Title>Rockstar Speakers</Title>
				<Row self="stretch" justify="space-around">
					<Speaker
						imageUrl="https://devfest.pl/images/people/mm.png"
						name="Magdalena Mips"
						location="Warszawa, PL"
					/>
					<Speaker
						imageUrl="https://devfest.pl/images/people/lm.png"
						name="Laura Morinigo"
						location="Berlin, Germany"
					/>
					<Speaker
						imageUrl="https://devfest.pl/images/people/oj.png"
						name="Olga Jakubowska"
						location="Warszawa, PL"
					/>
					<Speaker
						imageUrl="https://devfest.pl/images/people/we.png"
						name="Wojtek Erbetowski"
						location="Warszawa, PL"
					/>
				</Row>
			</Column>
			
			<Row>
				<Column size={1}>
					<Title>Organizer</Title>
					<BodyText>
						GDG Warsaw with support of 4 GDGs from all around Poland is
						proud organizer of DevFest Poland
					</BodyText>
				</Column>
				
				<Column size={1}>
					<Title>What is GDG</Title>
					<BodyText>
						Google Developers Group (GDG) - is open and volunteer geek
						community who create exciting projects and share experience about
						Google technologies with a passion. Learn more at
						developers.google.com!
					</BodyText>
				</Column>
			</Row>
			
			<Row size="300px">
				<Column size={2}>
					<ImageAsBackground
						imageUrl="https://devfest.pl/images/backgrounds/photos_1.jpg"
					/>
				</Column>
				
				<Column size={1}>
					<ImageAsBackground
						imageUrl="https://devfest.pl/images/backgrounds/photos_2.jpg"/>
					<ImageAsBackground
						imageUrl="https://devfest.pl/images/backgrounds/photos_3.jpg"/>
				</Column>
			</Row>
		
		</Column>
	);
}

const Title = styled.span`
	font-family: "Roboto", "Noto", sans-serif;
	font-size: 32px;
	font-weight: 300;
	text-transform: uppercase;
	margin-bottom: 12px;
`;

const BodyText = styled.span`
	font-family: "Roboto", "Noto", sans-serif;
	font-weight: 300;
	font-size: 16px;
	margin-bottom: 12px;
`;

const SmallText = styled.span`
	font-family: "Roboto", "Noto", sans-serif;
	font-weight: 400;
	font-size: 12px;
	margin-bottom: 12px;
`;

const Speaker = ({imageUrl, name, location}) =>
	<Column align="center">
		<Image src={imageUrl}/>
		<BodyText>{name}</BodyText>
		<SmallText>{location}</SmallText>
	</Column>;

const Image = styled.img`
	width: 120px;
	border-radius: 50%;
	margin-bottom: 12px;
`;

const ImageAsBackground = styled.div`
	width: 100%;
	height: 100%;
	background-image: url("${props => props.imageUrl}");
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;