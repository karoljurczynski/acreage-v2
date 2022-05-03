import MenuItem from "../../atoms/MenuItem/MenuItem";
import { Wrapper } from "./styles";

import farm from '../../../images/icons/menu/farm.png';
import market from '../../../images/icons/menu/market.png';
import store from '../../../images/icons/menu/store.png';
import community from '../../../images/icons/menu/community.png';


const MainMenu: React.FC = () => {
	return (
		<Wrapper>
			<MenuItem title="Farm" 			icon={farm} 		 navigateTo={'/farm'}      />
			<MenuItem title="Store" 		icon={store} 		 navigateTo={'/store'} 		 />
			<MenuItem title="Market" 	  icon={market}	   navigateTo={'/market'} 	 />
			<MenuItem title="Community" icon={community} navigateTo={'/community'} />
		</Wrapper>
	)
}


export default MainMenu;