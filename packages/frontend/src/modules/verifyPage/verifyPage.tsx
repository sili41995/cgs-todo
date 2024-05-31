import React, { FC } from 'react';
import { Messages } from '~/constants';
import { useVerifyEmail } from '~/hooks';
import DefaultMessage from '~shared/components/defaultMessage';
import Loader from '~shared/components/loader';

const VerifyPage: FC = () => {
	const { isError, isLoading, isSuccess } = useVerifyEmail();

	return (
		<>
			{isLoading && <Loader />}
			{isSuccess && <DefaultMessage message={Messages.verifySuccess} />}
			{isError && <DefaultMessage message={Messages.notFound} />}
		</>
	);
};

export default VerifyPage;
