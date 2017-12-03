import React from 'react';
import styled from 'styled-components';

export default function App() {
	return (
		<div>
			<div>
				<Title>Rockstar Speakers</Title>
				<div>
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
				</div>
			</div>
			
			<div>
				<div>
					<Title>Organizer</Title>
					<BodyText>
						GDG Warsaw with support of 4 GDGs from all around Poland is
						proud organizer of DevFest Poland
					</BodyText>
				</div>
				
				<div>
					<Title>What is GDG</Title>
					<BodyText>
						Google Developers Group (GDG) - is open and volunteer geek
						community who create exciting projects and share experience about
						Google technologies with a passion. Learn more at
						developers.google.com!
					</BodyText>
				</div>
			</div>
			
			<div>
				<div>
					<div style={{width: '100px', height: '100px'}}>
						<ImageAsBackground
							imageUrl="https://devfest.pl/images/backgrounds/photos_1.jpg"
						/>
					</div>
				</div>
				
				<div>
					<div style={{width: '100px', height: '100px'}}>
						<ImageAsBackground
							imageUrl="https://devfest.pl/images/backgrounds/photos_2.jpg"/>
					</div>
					<div style={{width: '100px', height: '100px'}}>
						<ImageAsBackground
							imageUrl="https://devfest.pl/images/backgrounds/photos_3.jpg"/>
					</div>
				</div>
			</div>
		
		</div>
	);
}

const Title = styled.span`
	font-family: "Roboto", "Noto", sans-serif;
	font-size: 32px;
	font-weight: 300;
	text-transform: uppercase;
`;

const BodyText = styled.span`
	font-family: "Roboto", "Noto", sans-serif;
	font-weight: 300;
	font-size: 16px;
`;

const SmallText = styled.span`
	font-family: "Roboto", "Noto", sans-serif;
	font-weight: 400;
	font-size: 12px;
`;

const Speaker = ({imageUrl, name, location}) =>
	<div>
		<Image src={imageUrl}/>
		<BodyText>{name}</BodyText>
		<SmallText>{location}</SmallText>
	</div>;

const Image = styled.img`
	width: 50px;
	border-radius: 50%;
`;

const ImageAsBackground = styled.div`
	width: 100%;
	height: 100%;
	background-image: url("${props => props.imageUrl}");
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;