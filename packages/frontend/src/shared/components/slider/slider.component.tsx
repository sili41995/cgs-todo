import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import { IProps } from './slider.types';
import SliderControls from '~shared/components/sliderControls';
import Todo from '~shared/components/todo';
import LinkWithQuery from '../linkWithQuery';
import { Container } from './slider.styles';

const Slider: FC<IProps> = ({ todos }) => (
	<Container>
		<Swiper
			className="todos-slider"
			spaceBetween={24}
			slidesPerView={1}
			navigation
			modules={[Navigation, Pagination, Scrollbar, A11y]}
		>
			{todos.map((todo, index) => (
				<SwiperSlide key={index}>
					<LinkWithQuery to={`${todo.id}`}>
						<Todo todo={todo} />
					</LinkWithQuery>
				</SwiperSlide>
			))}
			<SliderControls />
		</Swiper>
	</Container>
);

export default Slider;
