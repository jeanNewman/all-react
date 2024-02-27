import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const user =[
    {
        userName: "jeanNewman", name: "Jean Newman", initialFollowing: true
    },
    {
        userName: "vitoyayo", name: "Victor Cedeno", initialFollowing: false
    },
    {
        userName: "sirlordt", name: "Tomas Moreno", initialFollowing: true
    }
]
export function App () {
    const formatUserName = (userName) => '@' + userName
    return(
        <section className='App'>
           {
                user.map((user) => 
                    (
                    
                        <TwitterFollowCard 
                            key={user.userName}
                            formatUserName={formatUserName}
                            userName={user.userName}
                            name={user.name}
                            initialFollowing={user.initialFollowing}
                        />
                    )
                )
            
            }
            
        </section>
    )
}