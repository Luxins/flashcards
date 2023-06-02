import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Flashcard from './Flashcard';

const BlueText = styled.div `color: blue;`;

function App() {
	const flashcards = [
		{question: 'Question 1', answer: 'Answer1'},
	];
	
  return (
	<BlueText>
		{flashcards.map((flashcard, index) => 
			<Flashcard key={index} question={flashcard.question} answer={flashcard.answer} />
		)}
	</BlueText>
  );
}

export default App;
