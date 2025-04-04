import styled from 'styled-components';
import SpecialOfferImg from '../assets/special-offer.jpg';
import Logo from '../assets/jglogo.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import './home.css';

const OuterDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`
const BackgroundContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-image: url('../../borabora.png');
	width: 100%;
	background-size:     cover;               
	background-repeat:   no-repeat;
	background-position: center center; 
	height: 800px;
	justify-content: space-between;
`
const BackgroundTint = styled.div`
	background-color: rgba(118,118,118, 0.5);
	height: 800px;
	width: 100%;
	position: absolute;
`
const TopMenuContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;;
	z-index: 999;
`

const CompanyBanner = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	background-color: #1E201E;
	margin-left: 10%;

	@media (max-width: 939px) {
		margin-left: 5%;
	}
`
const VacationLabel = styled.label`
	color: white;
	font-size: 18px;
	font-weight: bolder;
`
const TravelAgency = styled.label`
	margin-top: .2rem;
	color: white;
	font-size: 12px;
`
const MenuContainer = styled.div`
	display: flex;
	background-color: #1E201E;
	height: 100px;
	width: 80%;
	margin-left: 10%;
	z-index: 999;

	@media (max-width: 939px) {
		flex-direction: column;
		height: unset;
		width: 45%;
    margin-left: 50%;
	}
`
const TopMenu = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 939px) {
		flex-direction: column;
    align-items: self-end;
		margin-top: 1rem;
  }
`
const MenuItem = styled.button`
	background-color: unset;
	border: none;
	font-weight: bolder;
	color: white;
	font-size: 18px;
	margin-right: 1.5rem;
`
const MenuBlock = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.3rem;;

	@media (max-width: 939px) {
		padding: 1rem;
		white-space: nowrap;
	}
`
const MenuLabel = styled.label`
	color: white;
	font-size: 16px;
	margin-bottom: .5rem;
`
const MenuOption = styled.input`
	color: grey;
	padding: .5rem 0;
	padding-left: 1rem;
	border-radius: 7px;
	height: 100%;
	width: 220px;
	
	@media (max-width: 939px) {
		width: auto;
	}
`
const SearchButton = styled.button`
	color: #B17457;
	background-color: #EEDF7A;
	font-weight: bolder;
	border: none;
	margin: 1.5rem 1rem;
	font-size: 16px;
	padding: 0 2rem;
	margin-left: auto;

	@media (max-width: 939px) {
		padding: 1rem 2rem;
		margin: 1rem;
	}
`
const SpecialOffers = styled.div`
	display: flex;
	flex-direction: column;
	margin: 4rem 10%;

	@media (max-width: 939px) {
		margin: 0 5%;
	}
`
const SpecialOffersLabel = styled.h1`
	font-weight: bolder;
	color: black;
	border-bottom: 3px solid #EEDF7A;
	padding: 2rem 0;
	margin-bottom: 3rem;
`
const SpecialOfferOptionContainer = styled.div`
	display: flex;

	@media (max-width: 939px) {
		flex-wrap: wrap;
	}
`
const OfferContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
  margin-right: 5%;

	@media (max-width: 939px) {
		width: 100%;
	}
`
const SpecialOfferImage = styled.img`
`
const OfferText = styled.div`
	font-size: 1.5em;
	margin-bottom: 2rem;
	color: #52575D;
`
const CompanyName = styled.h1`
	font-size: 4em;
	color: #F7F7F7;
	font-weight: 300;
	text-align: center;
	z-index: 999;

	@media (max-width: 939px) {
		font-size: 2em;
	}
`
const OfferTitle = styled.h2`
  font-size: 1.6em;
	font-weight: bolder;
	color: #4A4947;
	margin: 1rem 0;
`
const Footer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: black;
	padding: 4rem 10%;

	@media (max-width: 939px) {
		justify-content: space-between;
	}
`
const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const CompanyLogo = styled.img`
	width: 30%;
`
const FooterItem = styled.a`
	color: #F7F7F7;
	margin-bottom: 1rem;
`

function Home() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	return (
		<OuterDiv>
			<BackgroundContainer>
				<TopMenuContainer>
					<CompanyBanner>
						<VacationLabel>Vacation</VacationLabel>
						<TravelAgency>TRAVEL AGENCY</TravelAgency>
					</CompanyBanner>
					<TopMenu>
						<MenuItem>Home</MenuItem>
						<MenuItem>About</MenuItem>
						<MenuItem>Destination</MenuItem>
						<MenuItem>Blog</MenuItem>
						<MenuItem>Contact</MenuItem>

					</TopMenu>
				</TopMenuContainer>
				<CompanyName>JG TRAVELGROUP</CompanyName>
				<MenuContainer>
					<MenuBlock>
						<MenuLabel>Check-in date</MenuLabel>
						<DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
					</MenuBlock>
					<MenuBlock>
						<MenuLabel>Check-out date</MenuLabel>
						<DatePicker className="date-picker" selected={endDate} onChange={(date) => setEndDate(date)} />
					</MenuBlock>
					<MenuBlock>
						<MenuLabel>Destination City</MenuLabel>
						<MenuOption placeholder="Type a city..."/>
					</MenuBlock>
					<SearchButton>Search</SearchButton>
				</MenuContainer>
			</BackgroundContainer>
			<BackgroundTint></BackgroundTint>
			<SpecialOffers>
				<SpecialOffersLabel>Special Offers</SpecialOffersLabel>
				<SpecialOfferOptionContainer>
					<OfferContainer>
						<SpecialOfferImage src={SpecialOfferImg}/>
						<OfferTitle>Romantic Getaway in Santorini</OfferTitle>
						<OfferText>Escape to the breathtaking island of Santorini with our exclusive couples' retreat package. Enjoy a 4-night stay in a luxury cliffside hotel with stunning sunset views, private spa treatments, and a candlelit dinner by the sea. Book now and receive a complimentary wine-tasting tour at a local vineyard!</OfferText>
					</OfferContainer>
					<OfferContainer>
						<SpecialOfferImage src={SpecialOfferImg}/>
						<OfferTitle>Adventure in Costa Rica</OfferTitle>
						<OfferText>
						Embark on an unforgettable adventure through Costa Rica’s lush rainforests and pristine beaches. This special offer includes a guided zip-lining experience, a volcano hike, and a river rafting tour, plus 5 nights in eco-friendly lodges. Reserve today and get an extra night for free!</OfferText>
					</OfferContainer>
					<OfferContainer>
						<SpecialOfferImage src={SpecialOfferImg}/>
						<OfferTitle>European City Hopper</OfferTitle>
						<OfferText>
						Explore the charm of Europe with our 10-day city-hopping deal covering Paris, Rome, and Barcelona. Enjoy guided city tours, skip-the-line access to top attractions, and comfortable 4-star accommodations. Book now and receive a free Seine River cruise in Paris!</OfferText>
					</OfferContainer>
				</SpecialOfferOptionContainer>
			</SpecialOffers>
			<Footer>
				<CompanyLogo src={Logo}></CompanyLogo>
				<FooterContainer>
					<FooterItem>About The Company</FooterItem>
					<FooterItem>Contact</FooterItem>
					<FooterItem>Help & Guest Services</FooterItem>
					<FooterItem>Terms of Use</FooterItem>
					<FooterItem>Legal Notices</FooterItem>
					<FooterItem>Privacy Policy</FooterItem>
				</FooterContainer>
			</Footer>
		</OuterDiv>
	);
}

export default Home;