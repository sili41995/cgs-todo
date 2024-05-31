import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '~shared/components/loader';
import Container from '~shared/components/container';
import NavBar from '~shared/components/navBar';
import MobileMenuContainer from '~shared/components/mobileMenuContainer';
import { Header, Main, Section } from './sharedLayout.styles';

const SharedLayout: FC = () => (
	<>
		<Header>
			<Container>
				<NavBar />
				<MobileMenuContainer />
			</Container>
		</Header>
		<Main>
			<Section>
				<Container>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</Container>
			</Section>
		</Main>
	</>
);

export default SharedLayout;
