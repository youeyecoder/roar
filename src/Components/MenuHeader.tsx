import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const MenuHeader = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Bikes"
        value="bikes"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Cars"
        value="cars"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
