import user from '../../data/user';
import { Profile } from '../Profile/Profile';

export const App = () => {
    return (
        <>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
        </>
    );
};