const { HomeIcon, RoadIcon, LightIcon, NewsPaperIcon } = require('~/icons');

const listItemSidebar = [
    {
        id: 1,
        item: 'Home',
        icon: <HomeIcon />,
        to: './',
    },
    {
        id: 2,
        item: 'Lộ trình',
        icon: <RoadIcon />,
        to: './',
    },
    {
        id: 3,
        item: 'Học',
        icon: <LightIcon />,
        to: './',
    },
    {
        id: 4,
        item: 'Blog',
        icon: <NewsPaperIcon />,
        to: './',
    },
];

export default listItemSidebar;
