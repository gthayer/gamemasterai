import { Baskervville, Open_Sans } from '@next/font/google'
import Statblock from './statBlock';

const baskervville = Baskervville({ 
  weight: '400',
  subsets: ['latin'],
})

const openSans = Open_Sans({
	subsets: ['latin'],
});

export default function StatBlockGenerator({monster}) {
	return (
		<Statblock/>
	);
};