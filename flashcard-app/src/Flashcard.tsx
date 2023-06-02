import React, { useCallback, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledCard = styled(Card)`
	padding: 15px 15px;
	width: 18rem;
`;

const StyledBody = styled(Card.Body)`
	padding: 10% 10%;
	margin: 0% 0%;
`;

const StyledP = styled.p`
	color: #FF0000;
`;

const redSpan = styled.span`
	color: #FF0000;
`;

const CardWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width 100%
`;

const Flashcard: React.FC<{question: string, answer: string}> = ({question, answer}) => {
	const [showAnswer, setShowAnswer] = React.useState<boolean>(false);

	const handleFlipCard = useCallback(() => {
		setShowAnswer(!showAnswer)
	}, [setShowAnswer, showAnswer])

	return (
		<CardWrapper>
		<StyledCard>
			<Card.Img src='/veins.jpeg'/>
			<Card.ImgOverlay>
				<StyledBody>
					<Card.Body>
						<blockquote className='blockquote mb-0'>
							<StyledP>
								{showAnswer ? answer : question}
							</StyledP>
						</blockquote>
					</Card.Body>
					<Button variant='primary' onClick={handleFlipCard}>
						{showAnswer ? 'Show Question' : 'Show Answer'}
					</Button>
				</StyledBody>
			</Card.ImgOverlay>
		</StyledCard>
		</CardWrapper>
	);
};

export default Flashcard;
