import React, { FC } from 'react';
import { Button, List, ListItem } from './sliderControls.styles';
import { AriaLabels } from '~/constants';
import { useSlider } from '~/hooks';

const SliderControls: FC = () => {
	const { onNextBtnClick, onPrevBtnClick } = useSlider();

	return (
		<List>
			<ListItem>
				<Button
					type="button"
					onClick={onPrevBtnClick}
					aria-label={AriaLabels.prevSlideBtn}
				>
					Prev
				</Button>
			</ListItem>
			<ListItem>
				<Button
					type="button"
					onClick={onNextBtnClick}
					aria-label={AriaLabels.nextSlideBtn}
				>
					Next
				</Button>
			</ListItem>
		</List>
	);
};

export default SliderControls;
