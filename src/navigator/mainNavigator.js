import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile215158Navigator from '../features/UserProfile215158/navigator';
import Tutorial215157Navigator from '../features/Tutorial215157/navigator';
import NotificationList215129Navigator from '../features/NotificationList215129/navigator';
import Settings215128Navigator from '../features/Settings215128/navigator';
import Settings215120Navigator from '../features/Settings215120/navigator';
import UserProfile215118Navigator from '../features/UserProfile215118/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile215158: { screen: UserProfile215158Navigator },
Tutorial215157: { screen: Tutorial215157Navigator },
NotificationList215129: { screen: NotificationList215129Navigator },
Settings215128: { screen: Settings215128Navigator },
Settings215120: { screen: Settings215120Navigator },
UserProfile215118: { screen: UserProfile215118Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
