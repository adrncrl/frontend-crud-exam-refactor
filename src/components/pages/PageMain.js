import styles from './styles.module.scss';
import React from 'react';

function PageMain(props) {
	const {children} = props;

	return (
		<main className={styles['main']} role='main'>
			{children}
		</main>
	);
}

export default PageMain;
